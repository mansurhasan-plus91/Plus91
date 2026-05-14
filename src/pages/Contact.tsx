import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-40 pb-40 px-10 min-h-screen bg-brand-matte">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-3 py-1 border border-brand-gold/30 bg-brand-gold/10 rounded-full text-[10px] uppercase tracking-widest text-brand-gold mb-8"
            >
              Get In Touch
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-10 italic text-gradient leading-none uppercase">HELLO.</h1>
            <p className="text-2xl text-white/50 mb-16 max-w-lg leading-relaxed font-light">
              Have a bold vision? Let's bring it to life. Reach out and start your cinematic journey today.
            </p>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase mb-3">Email Us</p>
                <div className="flex items-center gap-4 text-2xl font-display font-medium group-hover:text-brand-gold transition-colors">
                  hello@theplus91.com
                  <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={20} />
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <p className="text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase mb-3">Call Us</p>
                <div className="flex items-center gap-4 text-2xl font-display font-medium group-hover:text-brand-gold-light transition-colors">
                  +91 000 000 0000
                  <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={20} />
                </div>
              </div>

              <div className="group cursor-pointer">
                <p className="text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase mb-3">Visit Us</p>
                <div className="flex items-center gap-4 text-2xl font-display font-medium group-hover:text-brand-gold transition-colors">
                  Mumbai, India
                  <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={20} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-12 rounded-[3.5rem] glass relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px]" />
            <form className="relative z-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Your Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none transition-all placeholder:text-white/10 text-sm" placeholder="John Wick" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none transition-all placeholder:text-white/10 text-sm" placeholder="john@continental.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Service Category</label>
                  <div className="grid grid-cols-2 gap-3">
                     {['Ad Films', 'Marketing', 'Corporate', 'Branding'].map(cat => (
                        <button key={cat} type="button" className="py-3 px-4 rounded-xl border border-white/10 text-[10px] font-bold tracking-widest uppercase hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all text-center">
                          {cat}
                        </button>
                     ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none transition-all resize-none placeholder:text-white/10 text-sm" placeholder="Tell us about your masterpiece..." />
                </div>
              </div>

              <button className="w-full py-6 bg-brand-gold text-black font-display font-black text-xl rounded-full shadow-2xl hover:bg-brand-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
                SEND MESSAGE
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="pt-4 flex items-center gap-4 text-white/10">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">OR</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <button className="w-full py-5 border border-white/10 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <MessageSquare size={16} />
                WhatsApp Direct
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
