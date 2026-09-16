export async function onRequestPost({ request, env }) {
  try {
    const bodyText = await request.text();
    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (e) {
      return new Response('Invalid JSON', { status: 400 });
    }

    // 1. Slack URL Verification (Challenge)
    // 슬랙 봇을 처음 세팅할 때 슬랙 측에서 "너네 서버 진짜 살아있어?" 하고 물어보는 인증 절차입니다.
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
        
        // 여기에 나중에 추가할 로직:
        // 1. event.thread_ts 를 사용해 슬랙 API에서 원본 메시지(질문)를 가져옴
        // 2. 질문과 현재 이벤트의 텍스트(event.text)를 매칭하여 KV에 저장
        // 일단은 서버가 무사히 이벤트를 받았다는 뜻으로 200 OK를 리턴합니다.
        console.log('--- [Slack Thread Reply Received] ---');
        console.log(`Thread TS: ${event.thread_ts}`);
        console.log(`Reply Text: ${event.text}`);
        console.log('-------------------------------------');
      }
    }

    // 슬랙은 이벤트 전송 후 3초 이내에 200 OK를 받지 못하면 재전송하므로 일단 무조건 200을 줍니다.
    return new Response('OK', { status: 200 });

  } catch (error) {
    console.error('Slack Event API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
