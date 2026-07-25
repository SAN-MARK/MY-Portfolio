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
      text: "Greetings! I'm Sanjeev's AI Twin. Ask me anything about Sanjeev's projects, 3,387+ LinkedIn growth strategy, Victor Academy internship tracker, or hire availability!",
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
      return "Sanjeev is currently open for full-stack development, Figma UI/UX design contracts, and growth strategy roles! You can reach out directly via hello@neonprofessional.com or click the 'HIRE ME' button in the navigation bar.";
    }
    if (q.includes('victor') || q.includes('academy') || q.includes('figma') || q.includes('tracker')) {
      return "Victor Academy is Sanjeev's featured project—a student internship tracking app built in Figma with 15+ interactive screens including student dashboard, attendance streak trackers, and user onboarding!";
    }
    if (q.includes('linkedin') || q.includes('follower') || q.includes('growth') || q.includes('raphael')) {
      return "Sanjeev built an organic audience of 3,387+ LinkedIn followers with a growth rate of 21.8/day, garnering direct engagement from McKinsey leader & CEO Raphael Buck!";
    }
    if (q.includes('skill') || q.includes('stack') || q.includes('react') || q.includes('node')) {
      return "Sanjeev specializes in Figma UI/UX (98%), Full-Stack MERN Development with React, Node.js, Express, and Tailwind CSS (92%), plus Motion Video Editing with CapCut and Premiere Pro (85%).";
    }
    if (q.includes('findback') || q.includes('startup') || q.includes('lost') || q.includes('found')) {
      return "FindBack is Sanjeev's live web startup (findback-84.vercel.app)—a hyperlocal lost-and-found network pairing neighborhood drop-off hubs with Google Auth, 3-table database persistence, interactive satellite maps, and instant UPI finder rewards!";
    }
    return "Sanjeev M is a Creative Developer & Growth Strategist with 3,387+ LinkedIn followers, active R&D experience at NoviTech, and a rich portfolio spanning FindBack Web Startup (findback-84.vercel.app), Victor Academy Internship Tracker, and PCAS Student Portal.";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-card max-w-xl w-full h-[600px] max-h-[85vh] rounded-2xl border border-[#00fbfb] relative shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-4 bg-[#0a0a0a] border-b border-[#3a4a49] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1a1a2e] border border-[#00fbfb] flex items-center justify-center text-[#00fbfb]">
              <span className="material-symbols-outlined text-xl animate-pulse">smart_toy</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-base text-white flex items-center gap-2">
                <span>SANJEEV'S AI TWIN</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00fbfb]/20 text-[#00fbfb] border border-[#00fbfb]/40">
                  ONLINE
                </span>
              </h3>
              <p className="text-[10px] font-mono text-gray-400">
                Powered by Gemini AI • Live Portfolio Knowledge
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-[#1a1a2e] border border-[#3a4a49] text-gray-400 hover:text-white"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Message History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs bg-[#0a0a0a]/60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-[#ff4d80]/20 border border-[#ff4d80]/50 text-white rounded-br-none'
                    : 'bg-[#1a1a2e] border border-[#3a4a49] text-gray-200 rounded-bl-none'
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
                <span className="text-[9px] font-mono text-gray-400 block text-right">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a2e] border border-[#3a4a49] p-3 rounded-2xl text-gray-400 text-xs font-mono flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#00fbfb] animate-spin">
                  sync
                </span>
                <span>Generating response...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2 bg-[#0a0a0a] border-t border-[#3a4a49]/40 flex gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setInput('What are Sanjeev’s key skills?')}
            className="px-2.5 py-1 rounded-lg bg-[#1a1a2e] border border-[#3a4a49] text-[10px] font-mono text-gray-300 hover:text-[#00fbfb] whitespace-nowrap"
          >
            💡 Key Skills
          </button>
          <button
            onClick={() => setInput('Tell me about Victor Academy')}
            className="px-2.5 py-1 rounded-lg bg-[#1a1a2e] border border-[#3a4a49] text-[10px] font-mono text-gray-300 hover:text-[#00fbfb] whitespace-nowrap"
          >
            📱 Victor Academy
          </button>
          <button
            onClick={() => setInput('How to hire Sanjeev?')}
            className="px-2.5 py-1 rounded-lg bg-[#1a1a2e] border border-[#3a4a49] text-[10px] font-mono text-gray-300 hover:text-[#00fbfb] whitespace-nowrap"
          >
            💼 How to hire
          </button>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 bg-[#0a0a0a] border-t border-[#3a4a49] flex gap-2 shrink-0">
          <input
            type="text"
            placeholder="Ask about Sanjeev's work, experience, or hire status..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#1a1a2e] border border-[#3a4a49] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00fbfb]"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="btn-gradient px-4 py-2.5 rounded-xl text-xs font-headline font-bold text-white uppercase flex items-center justify-center cursor-pointer disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>

      </div>
    </div>
  );
};
