export async function onRequestPost({ request, env }: any) {
  try {
    const body = await request.json();
    const { question, answer, feedback } = body;

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

      try {
        const slackRes = await fetch(env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackMessage)
        });
        
        if (!slackRes.ok) {
          console.error('Slack API returned an error:', slackRes.status);
        }
      } catch (slackError) {
        console.error('Failed to send fetch request to Slack:', slackError);
      }
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
