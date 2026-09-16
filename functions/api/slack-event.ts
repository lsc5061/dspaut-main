export async function onRequestPost({ request, env, waitUntil }) {
  try {
    const bodyText = await request.text();
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
        waitUntil(processSlackThreadReply(event, env));
      }
    }

    return new Response('OK', { status: 200 });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}

async function sendDebugLog(env, message) {
  if (env.SLACK_WEBHOOK_URL) {
    await fetch(env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: `[안테나 디버그 로그] ${message}` })
    });
  }
}

async function processSlackThreadReply(event, env) {
  try {
    await sendDebugLog(env, `스레드 댓글 감지됨! (채널: ${event.channel}, 텍스트: ${event.text})`);
    
    // 1. Get the original message (parent)
    const repliesRes = await fetch(`https://slack.com/api/conversations.replies?channel=${event.channel}&ts=${event.thread_ts}&limit=1`, {
      headers: { 'Authorization': `Bearer ${env.SLACK_BOT_TOKEN}` }
    });
    const repliesData = await repliesRes.json();
    
    if (repliesData.ok && repliesData.messages && repliesData.messages.length > 0) {
      const parentMsg = repliesData.messages[0];
      await sendDebugLog(env, `원본 메시지 찾음! 블록 개수: ${parentMsg.blocks ? parentMsg.blocks.length : 0}`);
      
      if (parentMsg.blocks && parentMsg.blocks.length >= 2) {
        const questionBlock = parentMsg.blocks[1];
        if (questionBlock.fields && questionBlock.fields[0] && questionBlock.fields[0].text) {
          const text = questionBlock.fields[0].text;
          await sendDebugLog(env, `추출된 원본 텍스트: ${text}`);
          
          const match = text.match(/\*질문\(Question\):\*\n(.*)/s);
          if (match && match[1]) {
            const originalQuestion = match[1].trim();
            const correction = event.text.trim();
            
            if (env.AI_KV) {
              await env.AI_KV.put(originalQuestion, correction);
              await sendDebugLog(env, `KV 저장 성공! Q: ${originalQuestion} / A: ${correction}`);
              
              // 봇 권한으로 답장 시도 (실패해도 KV는 이미 저장됨)
              const replyRes = await fetch('https://slack.com/api/chat.postMessage', {
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
              const replyData = await replyRes.json();
              if (!replyData.ok) {
                await sendDebugLog(env, `봇 답장 실패 (chat:write 권한 문제일 수 있음): ${replyData.error}`);
              }
            } else {
              await sendDebugLog(env, `치명적 오류: AI_KV 바인딩이 없습니다!`);
            }
          } else {
            await sendDebugLog(env, `정규식 매칭 실패. 텍스트 형식이 다릅니다.`);
          }
        }
      }
    } else {
      await sendDebugLog(env, `Slack API 에러 (conversations.replies): ${repliesData.error}`);
    }
  } catch (e) {
    await sendDebugLog(env, `스크립트 에러 발생: ${e.message}`);
  }
}
