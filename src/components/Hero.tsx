import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-32 pb-20 px-10">
      {/* Background Ambiance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <motion.div 
          style={{ y: y1 }}
          className="md:col-span-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 border border-brand-gold/30 bg-brand-gold/10 rounded-full text-[10px] uppercase tracking-widest text-brand-gold mb-6"
          >
            Creative Production & Digital Marketing House
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[64px] md:text-[96px] leading-[0.85] font-bold tracking-tighter mb-8 text-gradient uppercase"
          >
            CRAFTING STORIES<br />THAT MOVE BRANDS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light text-gray-400 max-w-xl leading-relaxed mb-12"
          >
            We create cinematic ad films, powerful corporate stories, and performance-driven digital marketing campaigns that elevate brands globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="group flex items-center space-x-3 bg-brand-gold text-black px-8 py-4 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all hover:bg-brand-gold-light">
              <span>START YOUR PROJECT</span>
              <ArrowRight size={16} />
            </button>
            <button className="flex items-center space-x-3 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-[11px] tracking-widest uppercase bg-white/5 backdrop-blur-sm hover:border-brand-gold transition-colors">
              <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full">
                <Play size={12} className="fill-current" />
              </div>
              <span>PLAY SHOWREEL</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side Stats/Focus */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:col-span-4 flex flex-col space-y-6"
        >
          <div className="p-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500">Latest Project</span>
              <span className="text-[10px] uppercase text-brand-gold">CGI / VFX</span>
            </div>
            <div className="h-32 w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" 
                alt="Latest work"
              />
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 rounded text-[9px] font-mono">STILL_FRAME_042.RAW</div>
            </div>
            <h3 className="text-lg font-bold">Project Horizon 2024</h3>
            <p className="text-xs text-gray-500 mt-2">International commercial for leading automotive brand.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-[1.5rem] border border-white/10 bg-white/5">
              <div className="text-2xl font-bold text-brand-gold">12M+</div>
              <div className="text-[9px] uppercase tracking-wider text-gray-500">Campaign Reach</div>
            </div>
            <div className="p-4 rounded-[1.5rem] border border-white/10 bg-white/5">
              <div className="text-2xl font-bold text-brand-gold">150+</div>
              <div className="text-[9px] uppercase tracking-wider text-gray-500">Films Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
