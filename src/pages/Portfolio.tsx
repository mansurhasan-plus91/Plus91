import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Ad Films', 'Campaigns', 'Corporate', 'CGI'];

const projects = [
  {
    id: 1,
    title: "The Urban Shift",
    category: "Ad Films",
    year: "2024",
    video: "https://assets.mixkit.co/videos/preview/mixkit-delivery-man-riding-his-scooter-through-the-city-40032-large.mp4",
    poster: "https://images.unsplash.com/photo-1492691523567-30730029d01e?q=80&w=1200&auto=format&fit=crop",
    client: "Metro Logistics"
  },
  {
    id: 2,
    title: "Cyber Pulse 2077",
    category: "CGI",
    year: "2024",
    video: "https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-futuristic-city-landscape-41372-large.mp4",
    poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    client: "Neo Tech"
  },
  {
    id: 3,
    title: "Heritage Reborn",
    category: "Campaigns",
    year: "2023",
    video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-an-artist-working-on-a-painting-42403-large.mp4",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop",
    client: "Royal Arts"
  },
  {
    id: 4,
    title: "Visionary Summit",
    category: "Corporate",
    year: "2023",
    video: "https://assets.mixkit.co/videos/preview/mixkit-people-in-a-business-meeting-room-42404-large.mp4",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    client: "Global Corp"
  },
  {
    id: 5,
    title: "Liquid Flow",
    category: "CGI",
    year: "2024",
    video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-animation-of-blue-liquid-waves-34447-large.mp4",
    poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    client: "Hydro Dynamics"
  },
  {
    id: 6,
    title: "Street Anthem",
    category: "Ad Films",
    year: "2024",
    video: "https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-down-a-street-at-night-42405-large.mp4",
    poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    client: "Vibe Apparel"
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="pt-32 pb-40 px-10 min-h-screen bg-brand-matte">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-3 py-1 border border-brand-gold/30 bg-brand-gold/10 rounded-full text-[10px] uppercase tracking-widest text-brand-gold mb-6"
            >
              Selected Productions
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-none italic text-gradient mb-6">
              WORK.
            </h1>
            <p className="text-xl font-light text-gray-400 leading-relaxed">
              We don't just capture images; we archive emotions and performance. Explore our cinematic ecosystem.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all border",
                  activeCategory === cat 
                    ? "bg-white text-black border-white" 
                    : "bg-white/5 text-white/50 border-white/10 hover:border-blue-500/50 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden relative glass">
                  {/* Poster Image */}
                  <img 
                    src={project.poster} 
                    alt={project.title}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-all duration-700",
                      hoveredProject === project.id ? "scale-110 opacity-0" : "scale-100 opacity-100"
                    )}
                  />
                  
                  {/* Hover Video Preview */}
                  {hoveredProject === project.id && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )}

                  {/* Dark Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Interaction UI */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-brand-gold/10 backdrop-blur-[2px]">
                    <div className="h-20 w-20 bg-brand-gold text-black rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Play size={24} className="fill-current ml-1" />
                    </div>
                  </div>

                  {/* Metadata Overlays */}
                  <div className="absolute top-8 right-8">
                     <div className="h-12 w-12 rounded-full glass flex items-center justify-center border-white/20 hover:bg-brand-gold hover:text-black transition-all">
                        <ArrowUpRight size={20} />
                     </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-gold mb-2">{project.client}</p>
                        <h3 className="text-3xl font-display font-black tracking-tight text-white">{project.title}</h3>
                    </div>
                    <div className="text-right">
                        <span className="text-sm font-mono text-white/40 block mb-1">YR_{project.year}</span>
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 bg-white/10 rounded-full">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Perspective Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-gold/10 to-brand-gold-light/10 opacity-0 group-hover:opacity-100 blur-[40px] -z-10 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <div className="mt-40 text-center flex flex-col items-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-10">End of curated view</p>
          <button className="group px-12 py-5 rounded-full border border-white/10 hover:border-blue-400 transition-all font-bold tracking-[0.2em] text-[11px] uppercase relative overflow-hidden">
            <span className="relative z-10">Inquire for Archive Access</span>
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
