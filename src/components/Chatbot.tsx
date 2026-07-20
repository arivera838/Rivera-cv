'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

type Message = {
  role: 'user' | 'model';
  parts: [{ text: string }];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: 'Hello! I am Vanguard, standard AI interface for Andres Rivera. How can I assist you today?' }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', parts: [{ text: input.trim() }] };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });

      if (!response.ok) throw new Error('API Error');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      
      let botResponseText = '';
      
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: '' }] }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          botResponseText += decoder.decode(value, { stream: true });
          
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1] = { role: 'model', parts: [{ text: botResponseText }] };
            return newMsgs;
          });
        }
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: 'Sorry, communication protocols encountered an error. Please try again later.' }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-sm bg-surface border border-primary/30 text-primary hover:border-primary transition-all z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-surface rounded-sm flex flex-col z-50 overflow-hidden shadow-2xl border border-primary/30"
          >
            {/* Header */}
            <div className="bg-primary/5 border-b border-primary/30 p-4 flex justify-between items-center relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-16 h-16 border border-primary/20 rounded-full"></div>
              <div className="flex items-center gap-2 z-10">
                <div className="w-8 h-8 rounded-sm bg-surface-alt border border-border flex flex-col items-center justify-center text-primary">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-xs font-mono text-foreground tracking-widest uppercase">Vanguard AI</h3>
                  <p className="text-[9px] text-primary/80 font-mono flex items-center gap-1 uppercase tracking-widest">
                    <span className="w-1 h-1 rounded-sm bg-primary animate-pulse" /> 
                    SYSTEM_ONLINE
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors z-10">
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-6 h-6 rounded-sm flex shrink-0 items-center justify-center ${msg.role === 'user' ? 'bg-surface-alt text-zinc-400 border border-border' : 'bg-primary/10 text-primary border border-primary/30'}`}>
                    {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div className={`p-3 rounded-sm max-w-[80%] text-[10px] leading-relaxed tracking-wide ${msg.role === 'user' ? 'bg-surface-alt border border-border text-zinc-300' : 'bg-primary/5 border border-primary/20 text-primary/90'}`}>
                    {msg.role === 'user' ? (
                      msg.parts[0].text
                    ) : (
                      <div className="prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 flex-row">
                  <div className="w-6 h-6 rounded-sm bg-primary/10 text-primary border border-primary/30 flex shrink-0 items-center justify-center">
                    <Bot size={12} />
                  </div>
                  <div className="p-3 rounded-sm max-w-[80%] bg-primary/5 border border-primary/20 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-sm bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1 h-1 rounded-sm bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1 h-1 rounded-sm bg-primary animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="QUERY_SYSTEM..."
                  className="w-full bg-surface-alt border border-border rounded-sm py-2 pl-3 pr-10 text-[10px] focus:outline-none focus:border-primary text-foreground font-mono uppercase tracking-widest placeholder:text-zinc-700"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-primary disabled:opacity-50 hover:bg-primary/20 rounded-sm transition-colors"
                >
                  <Send size={12} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
