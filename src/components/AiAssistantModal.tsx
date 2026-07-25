import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { soundEffects } from '../utils/audio';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Greetings! I'm Sanjeev's AI Twin. Ask me anything about Sanjeev's projects, technical accomplishments, Victor Academy internship tracker, or hire availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    soundEffects.playClick();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentPrompt = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-twin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentPrompt }),
      });

      if (response.ok) {
        const data = await response.json();
        const replyText = data.reply || getLocalFallbackReply(currentPrompt);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'assistant',
            text: replyText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        throw new Error('API route unavailable');
      }
    } catch {
      // Local intelligent response fallback
      setTimeout(() => {
        const replyText = getLocalFallbackReply(currentPrompt);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'assistant',
            text: replyText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 600);
    } finally {
      setIsLoading(false);
    }
  };

  const getLocalFallbackReply = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('hire') || q.includes('available') || q.includes('contact') || q.includes('email')) {
      return "Sanjeev is currently open for full-stack development, Figma UI/UX design contracts, and growth strategy roles! You can reach out directly via iamheresanjeev@gmail.com or WhatsApp +91 8668045519.";
    }
    if (q.includes('victor') || q.includes('academy') || q.includes('figma') || q.includes('tracker')) {
      return "Victor Academy is Sanjeev's featured project—a student internship tracking app built in Figma with 15+ interactive screens including student dashboard, attendance streak trackers, and user onboarding!";
    }
    if (q.includes('skill') || q.includes('stack') || q.includes('react') || q.includes('node')) {
      return "Sanjeev specializes in Figma UI/UX, Full-Stack MERN Development with React, Node.js, Express, and Tailwind CSS, plus Motion Video Editing with CapCut and Premiere Pro.";
    }
    if (q.includes('findback') || q.includes('startup') || q.includes('lost') || q.includes('found')) {
      return "FindBack is Sanjeev's live web startup—a hyperlocal lost-and-found network pairing neighborhood drop-off hubs with Google Auth, 3-table database persistence, interactive satellite maps, and instant UPI finder rewards!";
    }
    return "Sanjeev M is a Creative Developer & UI/UX Designer with active R&D experience at NoviTech and a rich portfolio spanning FindBack Web Startup, Victor Academy Internship Tracker, and PCAS Student Portal.";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#161616] max-w-xl w-full h-[600px] max-h-[85vh] rounded-2xl border-4 border-[#000000] relative shadow-[8px_8px_0px_#E31E24] flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-4 bg-[#0d0d0d] border-b-2 border-[#000000] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#161616] border-2 border-[#000000] flex items-center justify-center text-[#E31E24]">
              <span className="material-symbols-outlined text-xl animate-pulse">smart_toy</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#F5F5F0] flex items-center gap-2">
                <span>SANJEEV'S AI TWIN</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E31E24] text-[#F5F5F0] border border-[#000000] font-bold">
                  ONLINE
                </span>
              </h3>
              <p className="text-[10px] font-mono text-[#B8B8B0] font-bold">
                Powered by Gemini AI • Live Portfolio Knowledge
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-[#161616] border-2 border-[#000000] text-[#B8B8B0] hover:text-[#F5F5F0] cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Message History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs bg-[#0d0d0d]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-[#E31E24] border-2 border-[#000000] text-[#F5F5F0] rounded-br-none shadow-[2px_2px_0px_#000000]'
                    : 'bg-[#161616] border-2 border-[#000000] text-[#B8B8B0] rounded-bl-none shadow-[2px_2px_0px_#000000]'
                }`}
              >
                <p className="leading-relaxed font-sans">{msg.text}</p>
                <span className="text-[9px] font-mono text-[#B8B8B0] block text-right font-bold">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#161616] border-2 border-[#000000] p-3 rounded-2xl text-[#B8B8B0] text-xs font-mono flex items-center gap-2 shadow-[2px_2px_0px_#000000]">
                <span className="material-symbols-outlined text-sm text-[#E31E24] animate-spin">
                  sync
                </span>
                <span>Generating response...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2 bg-[#0d0d0d] border-t-2 border-[#000000] flex gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setInput('What are Sanjeev’s key skills?')}
            className="px-2.5 py-1 rounded-lg bg-[#161616] border-2 border-[#000000] text-[10px] font-mono font-bold text-[#B8B8B0] hover:text-[#E31E24] whitespace-nowrap cursor-pointer"
          >
            💡 Key Skills
          </button>
          <button
            onClick={() => setInput('Tell me about Victor Academy')}
            className="px-2.5 py-1 rounded-lg bg-[#161616] border-2 border-[#000000] text-[10px] font-mono font-bold text-[#B8B8B0] hover:text-[#E31E24] whitespace-nowrap cursor-pointer"
          >
            📱 Victor Academy
          </button>
          <button
            onClick={() => setInput('How to hire Sanjeev?')}
            className="px-2.5 py-1 rounded-lg bg-[#161616] border-2 border-[#000000] text-[10px] font-mono font-bold text-[#B8B8B0] hover:text-[#E31E24] whitespace-nowrap cursor-pointer"
          >
            💼 How to hire
          </button>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 bg-[#0d0d0d] border-t-2 border-[#000000] flex gap-2 shrink-0">
          <input
            type="text"
            placeholder="Ask about Sanjeev's work, experience, or hire status..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#161616] border-2 border-[#000000] text-xs text-[#F5F5F0] placeholder-[#B8B8B0] focus:outline-none focus:border-[#E31E24] font-mono"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="btn-crimson px-4 py-2.5 rounded-xl text-xs font-headline font-bold text-[#F5F5F0] uppercase flex items-center justify-center cursor-pointer disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>

      </div>
    </div>
  );
};
