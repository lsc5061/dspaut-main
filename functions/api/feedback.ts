export async function onRequestPost({ request, env }: any) {
  try {
    const body = await request.json();
    const { question, answer, feedback } = body;

    // Log the feedback directly to Cloudflare Pages Functions Logs
    console.log('--- 🤖 [CHATBOT FEEDBACK RECEIVED] ---');
    console.log(`Type: ${feedback === 'up' ? '👍 (Good)' : '👎 (Bad)'}`);
    console.log(`User Question: ${question}`);
    console.log(`AI Answer: ${answer.substring(0, 100)}...`); 
    console.log('--------------------------------------');

    // Debug: Check if env variable exists
    let debugInfo = {
      hasWebhookUrl: false,
      webhookUrlLength: 0,
      slackResponseStatus: 0,
      slackResponseText: '',
      error: ''
    };

    if (env.SLACK_WEBHOOK_URL) {
      debugInfo.hasWebhookUrl = true;
      debugInfo.webhookUrlLength = env.SLACK_WEBHOOK_URL.length;
      
      const slackMessage = {
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: feedback === 'up' ? "👍 챗봇 긍정 피드백 수신!" : "👎 챗봇 부정 피드백 수신!",
              emoji: true
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*질문(Question):*\n${question}`
              }
            ]
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*AI 답변(Answer):*\n${answer.substring(0, 300)}${answer.length > 300 ? '...' : ''}`
              }
            ]
          }
        ]
      };

      try {
        const slackRes = await fetch(env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackMessage)
        });
        
        debugInfo.slackResponseStatus = slackRes.status;
        if (!slackRes.ok) {
          debugInfo.slackResponseText = await slackRes.text();
          console.error('Slack API returned an error:', slackRes.status, debugInfo.slackResponseText);
        } else {
          console.log('Successfully sent message to Slack!');
        }
      } catch (slackError: any) {
        debugInfo.error = slackError.message || String(slackError);
        console.error('Failed to send fetch request to Slack:', slackError);
      }
    } else {
      console.error('CRITICAL: env.SLACK_WEBHOOK_URL is undefined or empty!');
    }

    return new Response(JSON.stringify({ success: true, debug: debugInfo }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error('Feedback API Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
}
// Trigger rebuild v3
