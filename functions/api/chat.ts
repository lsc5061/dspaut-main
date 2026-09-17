import { GoogleGenerativeAI } from '@google/generative-ai';

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { message, history, lang } = body;
    const currentLang = lang || 'en';

    const fallbackKo = "죄송합니다. 저는 성산연구소(SEONGSANLAB)의 비파괴검사(NDT) 장비 및 기술 지원을 위한 AI 어시스턴트입니다. 장비 스펙, 견적, 기술 관련 질문을 남겨주시면 자세히 답변해 드리겠습니다.";
    const fallbackEn = "I apologize. I am an AI assistant for NDT equipment and technical support at SEONGSANLAB. Please leave any questions regarding equipment specifications, quotes, or technical matters, and I will answer them in detail.";
    const fallbackText = currentLang === 'ko' ? fallbackKo : fallbackEn;

    let baseInstruction = `You are a sales and technical support expert at Seongsan Research Institute (DSPAUT). Rule 1: If the user speaks Korean, answer in Korean. If English, answer in English. Rule 2: Keep all responses extremely concise, strictly within 2 to 3 sentences maximum. Rule 3: NEVER output raw URLs or '{lang}'. Use UI navigation instead. Rule 4: CRITICAL - DO NOT translate UI menu names. Use EXACT names provided below. Rule 5: OUT OF SCOPE/NONSENSE - The user is browsing the ${currentLang.toUpperCase()} version of the website. If the user asks a nonsense question (meaningless strings), asks for translation, or asks a question completely unrelated to NDT equipment, company, or technical support, you MUST NOT answer creatively. Instead, you MUST reply EXACTLY with this fallback text and nothing else: "${fallbackText}" [Company Facts] DSPAUT(Seongsanlab), founded in 2011, ultrasonic NDT hardware & software. [Product Lineup] Portable PAUT: P5, B3. Conventional Single UT: T3. SDK/API: R5. [UI Navigation Guide] 1. A/S and Sales Quotes: "상단 메뉴의 '문의하기' 버튼 또는 하단의 문의 양식을 이용해 주세요." (English: 'Contact' button) 2. Software Downloads: "다운로드 전용 사이트를 방문해 주세요." (English: Download Center) 3. Equipment Manuals: "상단 메뉴의 '기술지원'을 클릭 후 'Manual' 게시판을 확인해 주세요." (English: 'Support' -> 'Manual') 4. NDT Study: "상단 메뉴의 '기술지원'을 클릭 후 'Study' 게시판을 확인해 주세요." (English: 'Support' -> 'Study') 5. Video (Calibration): "상단 메뉴의 '기술지원'을 클릭하신 후 'Video' 목록을 확인하시거나 유튜브 채널을 방문해 주세요." (English: 'Support' -> 'Video')`;

    // Fetch custom knowledge base from KV if available
    let customKnowledge = "";
    try {
      if (env.AI_KV) {
        const kvList = await env.AI_KV.list();
        for (const key of kvList.keys) {
          const value = await env.AI_KV.get(key.name);
          customKnowledge += `\n- Q: ${key.name}\n  A: ${value}\n`;
        }
      }
    } catch (e) {
      console.error("Failed to read AI_KV", e);
    }

    if (customKnowledge) {
      baseInstruction += `\n\n[USER CUSTOM KNOWLEDGE BASE (HIGH PRIORITY)]\nIf the user's question is highly similar to any of the questions [Q] below, you MUST answer based on the provided answer [A] below:\n${customKnowledge}`;
    }

    const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY || 'dummy_key');
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-flash-lite-latest',
      systemInstruction: baseInstruction
    });



    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
    }

    if (!env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ 
        error: '[System] 구글 Gemini API 키가 없습니다. 환경 변수에 GEMINI_API_KEY를 설정해주세요.' 
      }), { status: 500 });
    }

    // Convert OpenAI style history to Gemini style
    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await chat.sendMessageStream(message);
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            controller.enqueue(encoder.encode(chunkText));
          }
          controller.close();
        } catch (e: any) {
          console.error("Streaming error:", e);
          controller.enqueue(encoder.encode(`\n\n[Error: ${e.message}]`));
          controller.close();
        }
      }
    });

    return new Response(stream, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
};
