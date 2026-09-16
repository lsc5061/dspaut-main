export async function onRequestPost({ request, env, waitUntil }) {
  try {
    const bodyText = await request.text();
    
    // Slack 서명 검증 (보안)
    const slackSignature = request.headers.get('x-slack-signature');
    const slackTimestamp = request.headers.get('x-slack-request-timestamp');
    
    if (env.SLACK_SIGNING_SECRET && slackSignature && slackTimestamp) {
      // 5분 이내의 요청인지 확인 (Replay attack 방지)
      const time = Math.floor(Date.now() / 1000);
      if (Math.abs(time - parseInt(slackTimestamp)) < 60 * 5) {
        const sigBasestring = 'v0:' + slackTimestamp + ':' + bodyText;
        const encoder = new TextEncoder();
        const key = await crypto.subtle.importKey(
          'raw',
          encoder.encode(env.SLACK_SIGNING_SECRET),
          { name: 'HMAC', hash: 'SHA-256' },
          false,
          ['sign']
        );
        const signatureBytes = await crypto.subtle.sign('HMAC', key, encoder.encode(sigBasestring));
        const hexSignature = 'v0=' + Array.from(new Uint8Array(signatureBytes))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
          
        if (hexSignature !== slackSignature) {
          console.error("Slack signature verification failed");
          return new Response('Unauthorized', { status: 401 });
        }
      } else {
        return new Response('Request too old', { status: 401 });
      }
    }

    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (e) {
      return new Response('Invalid JSON', { status: 400 });
    }

    // 1. Slack URL Verification (Challenge)
    if (body.type === 'url_verification') {
      return new Response(body.challenge, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // 2. Event Handling
    if (body.type === 'event_callback' && body.event) {
      const event = body.event;
      
      // 스레드에 달린 댓글(message)이고, 사람이 작성한 글인지(bot_id가 없는지) 확인
      if (event.type === 'message' && event.thread_ts && !event.bot_id) {
        // Cloudflare Workers는 응답을 빨리 안 주면 Slack이 계속 재시도하므로 비동기로 처리
        waitUntil(processSlackThreadReply(event, env));
      }
    }

    return new Response('OK', { status: 200 });

  } catch (error) {
    console.error('Slack Event API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

async function processSlackThreadReply(event, env) {
  try {
    // 1. Get the original message (parent)
    const repliesRes = await fetch(`https://slack.com/api/conversations.replies?channel=${event.channel}&ts=${event.thread_ts}&limit=1`, {
      headers: { 'Authorization': `Bearer ${env.SLACK_BOT_TOKEN}` }
    });
    const repliesData = await repliesRes.json();
    
    if (repliesData.ok && repliesData.messages && repliesData.messages.length > 0) {
      const parentMsg = repliesData.messages[0];
      
      // Check if the parent message has the blocks from our feedback bot
      if (parentMsg.blocks && parentMsg.blocks.length >= 2) {
        const questionBlock = parentMsg.blocks[1];
        if (questionBlock.fields && questionBlock.fields[0] && questionBlock.fields[0].text) {
          const text = questionBlock.fields[0].text;
          // text looks like: *질문(Question):*\nWhat is B3?
          const match = text.match(/\*질문\(Question\):\*\n(.*)/s);
          if (match && match[1]) {
            const originalQuestion = match[1].trim();
            const correction = event.text.trim();
            
            // Save to KV
            if (env.AI_KV) {
              await env.AI_KV.put(originalQuestion, correction);
              console.log(`Saved to KV: Q='${originalQuestion}', A='${correction}'`);
              
              // Reply in Slack thread to confirm
              await fetch('https://slack.com/api/chat.postMessage', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${env.SLACK_BOT_TOKEN}`
                },
                body: JSON.stringify({
                  channel: event.channel,
                  thread_ts: event.thread_ts,
                  text: `✅ *지식 베이스 학습 완료!*\n이제 AI가 비슷한 질문에 대해 다음 내용을 참고하여 답변합니다:\n> ${correction}`
                })
              });
            } else {
              console.error("CRITICAL: AI_KV is not bound in environment!");
            }
          }
        }
      }
    } else {
      console.error("Failed to fetch replies from Slack API:", repliesData.error);
    }
  } catch (e) {
    console.error("Error processing thread reply:", e);
  }
}
