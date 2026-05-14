import { motion } from 'motion/react';
import { Hero } from '@/components/Hero';
import { Film, Megaphone, Target, Monitor, Share2, Sparkles, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Ad Films",
    icon: Film,
    desc: "Cinematic commercials that captivate and convert.",
    color: "from-brand-gold to-brand-gold-light",
    link: "/services"
  },
  {
    title: "Performance Marketing",
    icon: Target,
    desc: "Algorithmic strategies for exponential growth.",
    color: "from-brand-gold-light to-brand-gold",
    link: "/marketing"
  },
  {
    title: "Corporate Films",
    icon: Monitor,
    desc: "Your company story, told through a cinematic lens.",
    color: "from-brand-gold to-brand-charcoal",
    link: "/services"
  },
  {
    title: "VFX & Motion Graphics",
    icon: Sparkles,
    desc: "Breathtaking visuals that defy the ordinary.",
    color: "from-brand-gold-light to-brand-charcoal",
    link: "/services"
  }
];

export function Home() {
  return (
    <main className="w-full">
      <Hero />

      {/* Marquee Services */}
      <section className="py-24 bg-brand-matte relative overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex items-center gap-20 pr-20"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-5xl md:text-8xl font-display font-black text-white/5 tracking-tighter uppercase italic">CINEMATIC PRODUCTION</span>
                <div className="h-3 w-3 rounded-full bg-brand-gold" />
                <span className="text-5xl md:text-8xl font-display font-black text-transparent stroke-white/10 stroke-[1px] tracking-tighter uppercase italic">DIGITAL MARKETING</span>
                <div className="h-3 w-3 rounded-full bg-brand-gold-light" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-40 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-3xl">
               <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-3 py-1 border border-brand-gold/30 bg-brand-gold/10 rounded-full text-[10px] uppercase tracking-widest text-brand-gold mb-6"
              >
                Core Competencies
              </motion.span>
              <h2 className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter leading-none">Innovative Solutions.</h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed">We blend creative mastery with data-driven performance to give your brand the edge it deserves. From script to algorithm, we evolve your brand universe.</p>
            </div>
            <Link to="/services" className="group flex items-center gap-3 text-brand-gold font-bold tracking-[0.2em] text-[10px] uppercase transition-all hover:text-white">
              VIEW ALL SERVICES
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] glass hover:bg-white/10 transition-all cursor-pointer border border-white/5 relative overflow-hidden flex flex-col justify-between h-[400px]"
              >
                <div className={cn(
                  "absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br",
                  service.color
                )} />
                
                <div className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-xl",
                  service.color
                )}>
                  <service.icon size={26} className="text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
                   <Link to={service.link} className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">
                    EXPLORE <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Showcase Section */}
      <section className="py-20 px-10">
         <div className="max-w-7xl mx-auto">
            <div className="aspect-video w-full rounded-[3.5rem] overflow-hidden relative group shadow-2xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://assets.mixkit.co/videos/preview/mixkit-creative-and-modern-studio-interior-lighting-at-night-42217-large.mp4"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="h-24 w-24 rounded-full bg-white text-black flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform"
                >
                  <Play size={32} className="ml-2 fill-current" />
                </motion.div>
              </div>
              <div className="absolute bottom-12 left-12 text-left">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-4">PRODUCTION_REEL_2024</p>
                <h3 className="text-5xl font-display font-black tracking-tighter">THE CINEMATIC EDGE.</h3>
              </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 px-10 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display font-black mb-16 tracking-tighter leading-none"
          >
            Ready to <br/> <span className="italic text-gradient">Rise?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button className="px-12 py-6 bg-brand-gold text-black rounded-full font-display font-black text-2xl shadow-2xl hover:bg-brand-gold-light hover:scale-105 transition-all">
              LET'S CREATE
            </button>
            <button className="px-12 py-6 border border-white/20 rounded-full font-display font-bold text-xl hover:bg-white/5 transition-all">
              BOOK CONSULTATION
            </button>
          </motion.div>
        </div>
        
        {/* Abstract Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      <footer className="py-24 border-t border-white/5 px-10 bg-brand-matte">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-2 space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-black text-black italic">+91</div>
                <span className="text-2xl font-display font-black tracking-tighter uppercase">PLUS 91</span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed font-light">
                World-class cinematic production and digital marketing company specializing in ad films, brand commercials, and creative storytelling.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-8 text-white/30">Connect</p>
              <div className="flex flex-col gap-6 text-sm font-medium">
                <a href="#" className="hover:text-brand-neon transition-colors">Instagram</a>
                <a href="#" className="hover:text-brand-neon transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-brand-neon transition-colors">YouTube</a>
                <a href="#" className="hover:text-brand-neon transition-colors">Vimeo</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-8 text-white/30">Offices</p>
              <div className="flex flex-col gap-6 text-sm font-medium text-gray-500">
                <p>Mumbai, India</p>
                <p>Dubai, UAE</p>
                <p>London, UK</p>
              </div>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
             <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">© 2024 PLUS 91 ENTERTAINMENT CO. ALL RIGHTS RESERVED.</p>
             <div className="flex gap-10 text-[10px] font-bold tracking-[0.1em] uppercase text-white/30">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const ArrowRight = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);
