import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getPlusAIResponse } from '@/services/geminiService';

export function PlusAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hey 👋 Welcome to Plus 91 Entertainment. Ready to create something cinematic for your brand?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getPlusAIResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-28 right-10 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="mb-4 w-[350px] overflow-hidden rounded-2xl glass shadow-2xl"
          >
            <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10 uppercase tracking-widest text-[10px] font-bold">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                <span>PLUS AI ASSISTANT</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="h-[400px] overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[90%] rounded-xl px-4 py-3 text-[11px] leading-relaxed",
                    msg.role === 'user' ? "bg-white text-black font-bold" : "bg-white/10 text-white/90"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-xl px-4 py-3 text-[11px] animate-pulse">
                    Analyzing Creative Intent...
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask PLUS AI..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-[11px] focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-gold text-black p-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute right-20 bottom-0 w-60 p-4 glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              <p className="text-[10px] font-bold text-white mb-2 uppercase tracking-widest">PLUS AI</p>
              <p className="text-[10px] leading-relaxed text-gray-300">“Hey 👋 Ready to create something cinematic for your brand?”</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-br from-brand-gold via-brand-gold-light to-brand-gold rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(212,175,55,0.3)] cursor-pointer ring-4 ring-white/5"
        >
          <Sparkles className="text-black" size={20} />
        </motion.button>
      </div>
    </div>
  );
}
