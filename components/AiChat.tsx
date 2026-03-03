import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm your compliance assistant. Ask me about POPIA readiness or our security checks." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-2xl transition-all duration-500 border border-white/10 ${
          isOpen ? 'bg-surface text-slate-400 rotate-90 scale-0 opacity-0' : 'bg-white hover:bg-brand-accent text-black hover:text-white scale-100 opacity-100'
        }`}
        aria-label="Open Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <div
        className={`fixed bottom-8 right-8 z-50 w-full sm:w-[24rem] glass-panel rounded-[32px] shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right border border-white/10 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-12 pointer-events-none'
        }`}
        style={{ height: '600px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Security Assistant</h3>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-white text-black font-bold rounded-br-sm'
                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-5 py-3">
                 <div className="flex space-x-1">
                   <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                   <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                   <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-white/5">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-transparent px-4 text-sm text-white placeholder-slate-600 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-white text-black rounded-full hover:bg-brand-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiChat;