import { motion } from 'motion/react';
import { Camera, Users, Sparkles, Trophy } from 'lucide-react';

export function About() {
  return (
    <div className="pt-32 pb-40 px-10 min-h-screen bg-brand-matte">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-40"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-3 py-1 border border-brand-gold/30 bg-brand-gold/10 rounded-full text-[10px] uppercase tracking-widest text-brand-gold mb-8"
          >
            The Origin Story
          </motion.span>
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-12 italic text-gradient leading-none">THE PULSE.</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <p className="text-3xl md:text-4xl text-white/90 font-light leading-tight">
                Plus 91 Entertainment is more than just a production house. We are a collective of dreamers, rebels, and visual poets dedicated to the art of the frame.
              </p>
              <div className="h-px w-32 bg-brand-gold" />
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Founded with a vision to redefine cinematic standards in India, we've grown into a powerhouse that bridges the gap between traditional storytelling and futuristic digital performance. Every project we touch is an opportunity to push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-[2.5rem] glass space-y-4">
                <Trophy className="text-brand-gold" size={32} />
                <p className="text-5xl font-display font-black text-white">100+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Brands Elevated</p>
              </div>
              <div className="p-8 rounded-[2.5rem] glass space-y-4">
                <Camera className="text-brand-gold" size={32} />
                <p className="text-5xl font-display font-black text-white">500+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Films Produced</p>
              </div>
              <div className="p-8 rounded-[2.5rem] glass space-y-4">
                <Users className="text-brand-gold" size={32} />
                <p className="text-5xl font-display font-black text-white">20+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Creative Minds</p>
              </div>
              <div className="p-8 rounded-[2.5rem] glass space-y-4">
                <Sparkles className="text-brand-gold" size={32} />
                <p className="text-5xl font-display font-black text-white">15+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase opacity-40">Industry Awards</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BTS Visuals Section */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-display font-bold tracking-tighter">BEHIND THE LENS</h2>
            <div className="h-px flex-1 bg-white/10 mx-10 hidden md:block" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500">Archive_BTS_v01</span>
          </div>
          
          <div className="grid grid-cols-12 gap-6 h-[600px]">
            <div className="col-span-8 rounded-[3rem] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1492691523567-30730029d01e?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="BTS 1"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-[2.5rem] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="BTS 2"
                />
              </div>
              <div className="rounded-[2.5rem] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="BTS 3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy / DNA Grid */}
        <section className="py-20 border-t border-white/5">
            <div className="max-w-4xl mb-20 text-center mx-auto">
              <h2 className="text-6xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">OUR DNA.</h2>
              <p className="text-gray-500 font-light italic">The core principles that drive every frame we capture and every strategy we build.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Futurism", color: "text-brand-gold", desc: "We integrate AI and cutting-edge CGI to ensure our clients are always five years ahead of the competition." },
                    { title: "Impact", color: "text-brand-gold-light", desc: "A beautiful frame is useless if it doesn't move the soul. We prioritize emotional resonance in every cut." },
                    { title: "Precision", color: "text-brand-gold", desc: "From pixel-perfect color grading to data-backed meta ads, we leave nothing to chance. Success is engineered." }
                ].map((dna, i) => (
                    <motion.div 
                      key={dna.title} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-12 glass rounded-[3rem] group hover:border-brand-gold transition-all"
                    >
                        <h3 className={cn("text-3xl font-display font-black mb-6 uppercase italic", dna.color)}>{dna.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed font-light">{dna.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Founder Vision */}
        <section className="mt-40 p-12 md:p-24 rounded-[4rem] glass relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto">
             <div className="h-20 w-20 rounded-full bg-white/10 mx-auto mb-10 flex items-center justify-center">
                <Sparkles className="text-white" />
             </div>
             <p className="text-2xl md:text-4xl font-display font-medium italic text-white mb-10 leading-tight">
               "We focus on the intersection of data and poetry. That's where the most powerful brands are born."
             </p>
             <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold">The Visionary Core</p>
          </div>
        </section>
      </div>
    </div>
  );
}
