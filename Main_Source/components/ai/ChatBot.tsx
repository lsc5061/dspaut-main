import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const getInitialMessage = (lang: string) => {
  const isKo = lang === 'ko';
  return isKo 
    ? '안녕하세요! 성산연구소 AI 어시스턴트입니다. 초음파 비파괴검사(NDT) 장비 스펙, 기술 지원, 혹은 견적 문의 등 궁금한 점을 자유롭게 질문해 주세요.' 
    : 'Hello! I am the DSPAUT AI Assistant. Feel free to ask me anything about our ultrasonic NDT equipment, technical specifications, or request a quote.';
};

export default function ChatBot({ lang = 'en', currentPath = '' }: { lang?: string, currentPath?: string }) {
  const isKo = lang === 'ko';
  const texts = {
    initial: getInitialMessage(lang),
    title: isKo ? 'AI 어시스턴트' : 'AI Assistant',
    placeholder: isKo ? '질문을 입력하세요...' : 'Type your question...',
    error: isKo ? '오류가 발생했습니다.' : 'An error occurred.',
    networkError: isKo ? '네트워크 오류가 발생했습니다.' : 'A network error occurred.'
  };

  const quickReplies = isKo 
    ? ['초음파 탐상기 제품 라인업 알려줘', 'B3 장비 주요 스펙이 뭐야?', '제품 견적은 어떻게 받아?']
    : ['Show me UT product lineup', 'What are B3 specifications?', 'How to request a quote?'];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string, feedback?: 'up' | 'down'}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWrapperRef = useRef<HTMLDivElement>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('dspaut_chat_messages');
    const savedLang = localStorage.getItem('dspaut_chat_lang');

    if (savedLang !== lang) {
      // Language changed: Reset chat
      setMessages([{ role: 'assistant', content: texts.initial }]);
      localStorage.removeItem('dspaut_chat_messages');
      localStorage.setItem('dspaut_chat_lang', lang);
    } else if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        setMessages([{ role: 'assistant', content: texts.initial }]);
      }
    } else {
      setMessages([{ role: 'assistant', content: texts.initial }]);
    }
  }, [lang, texts.initial]); // Depend on lang and texts.initial to reload if language changes

  // Save to LocalStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      // 🚨 안정성 개선 2번: LocalStorage 용량 초과 방지 (최대 40개 대화만 유지하되 첫 인사말은 고정)
      const MAX_HISTORY = 40;
      const messagesToSave = messages.length > MAX_HISTORY
        ? [messages[0], ...messages.slice(-(MAX_HISTORY - 1))]
        : messages;

      localStorage.setItem('dspaut_chat_messages', JSON.stringify(messagesToSave));
      localStorage.setItem('dspaut_chat_lang', lang);
    }
  }, [messages, lang]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatWrapperRef.current && !chatWrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (userMsg: string) => {
    // 🚨 안정성 개선 1번: 쿨타임 중이거나 로딩 중이면 입력 무시 (Rate Limiting 방어)
    if (!userMsg.trim() || isLoading || isCooldown) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    setIsCooldown(true);

    // 3초 쿨타임 적용 (서버 과부하 및 과금 폭탄 방지)
    setTimeout(() => {
      setIsCooldown(false);
    }, 3000);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: messages.filter((_, idx) => idx !== 0), lang })
      });

      if (!res.ok) {
        let errText = texts.error;
        try { 
          const data = await res.json(); 
          errText = data.error || errText; 
        } catch(e){}
        setMessages(prev => [...prev, { role: 'assistant', content: errText }]);
        setIsLoading(false);
        return;
      }

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      setIsLoading(false); // Stop loading animation immediately

      const reader = res.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            setMessages(prev => {
              const newMsgs = [...prev];
              newMsgs[newMsgs.length - 1].content += chunk;
              return newMsgs;
            });
          }
        }
      }

    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: texts.networkError }]);
      setIsLoading(false);
    }
  };

  const handleFeedback = async (idx: number, type: 'up' | 'down') => {
    setMessages(prev => {
      const newMsgs = [...prev];
      newMsgs[idx] = { ...newMsgs[idx], feedback: type };
      return newMsgs;
    });

    const msg = messages[idx];
    const prevMsg = messages[idx - 1];
    
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: prevMsg?.role === 'user' ? prevMsg.content : '',
          answer: msg.content,
          feedback: type
        })
      });
    } catch (e) {
      // Silently fail to not interrupt UX
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div ref={chatWrapperRef} className="fixed bottom-6 right-6 z-[999] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[550px] bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.2)] flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center shrink-0">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              <h3 className="text-white font-bold tracking-wide">{texts.title}</h3>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => {
                  localStorage.removeItem('dspaut_chat_messages');
                  localStorage.setItem('dspaut_chat_lang', lang);
                  setMessages([{ role: 'assistant', content: texts.initial }]);
                }} 
                title={isKo ? '대화 기록 초기화' : 'Clear Chat'}
                className="text-slate-500 hover:text-cyan-400 transition-colors text-xs border border-slate-700 rounded px-2 py-1"
              >
                Reset
              </button>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                ✕
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyan-950 border border-cyan-800/50 text-cyan-50 rounded-tr-sm' 
                    : 'bg-slate-800/80 border border-slate-700/50 text-slate-200 rounded-tl-sm'
                }`}>
                  {msg.role === 'assistant' ? (
                    <div>
                      <div className="prose prose-invert prose-sm prose-cyan max-w-none break-words">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                      {idx > 0 && !isLoading && (
                        <div className="flex gap-1.5 mt-2 pt-2 border-t border-slate-700/50 justify-end">
                          <button
                            onClick={() => handleFeedback(idx, 'up')}
                            className={`text-xs px-2 py-1 rounded-md transition-all duration-200 ${msg.feedback === 'up' ? 'bg-cyan-600/30 border border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.3)] scale-105' : 'bg-slate-800/50 border border-transparent hover:bg-slate-700/80 hover:border-slate-600'}`}
                            title={isKo ? '도움이 되었습니다' : 'Helpful'}
                          >
                            👍
                          </button>
                          <button
                            onClick={() => handleFeedback(idx, 'down')}
                            className={`text-xs px-2 py-1 rounded-md transition-all duration-200 ${msg.feedback === 'down' ? 'bg-rose-600/30 border border-rose-400 shadow-[0_0_8px_rgba(225,29,72,0.3)] scale-105' : 'bg-slate-800/50 border border-transparent hover:bg-slate-700/80 hover:border-slate-600'}`}
                            title={isKo ? '아쉬운 답변입니다' : 'Not helpful'}
                          >
                            👎
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            
            {/* Quick Replies (Only show when there is only the initial message) */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 mt-4">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSend(reply);
                    }}
                    className="text-xs bg-slate-900 border border-cyan-900/50 text-cyan-300 px-3 py-1.5 rounded-full hover:bg-cyan-950 hover:border-cyan-500 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 border border-slate-700/50 text-slate-400 rounded-2xl rounded-tl-sm px-4 py-2 text-sm flex space-x-1 items-center">
                  <span className="animate-bounce">.</span><span className="animate-bounce delay-75">.</span><span className="animate-bounce delay-150">.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 bg-slate-950 border-t border-slate-800 shrink-0">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={isCooldown ? (isKo ? '잠시 후 다시 입력해 주세요 (3초 쿨타임)' : 'Please wait a moment...') : texts.placeholder}
                disabled={isCooldown}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isLoading || isCooldown || !input.trim()}
                className="absolute right-1.5 w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-900 text-cyan-400 hover:bg-cyan-800 hover:text-cyan-300 transition-colors disabled:opacity-50 disabled:hover:bg-cyan-900 disabled:hover:text-cyan-400 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-slate-900 border-2 border-slate-600 rounded-full shadow-[0_0_15px_rgba(100,116,139,0.3)] animate-neon-pulse hover:animate-none hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center justify-center transition-all duration-300 group"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
            <path d="M12 3.5L20 7.5L12 11.5L4 7.5L12 3.5Z" fill="#9ca3af" />
            <path d="M4 7.5L12 11.5V20.5L4 16.5V7.5Z" fill="#6b7280" />
            <path d="M12 11.5L20 7.5V16.5L12 20.5V11.5Z" fill="#4b5563" />
          </svg>
        </button>
      )}
    </div>
  );
}
