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

    // Send to Slack if webhook URL is configured
    if (env.SLACK_WEBHOOK_URL) {
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

      await fetch(env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage)
      });
    }

    return new Response(JSON.stringify({ success: true }), {
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
// Trigger rebuild
