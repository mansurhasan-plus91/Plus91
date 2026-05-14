import { motion } from 'motion/react';
import { Camera, Video, Monitor, Megaphone, Target, Share2, Sparkles, Wand2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Ad Films",
    icon: Camera,
    desc: "We craft cinematic ad films that breathe life into your brand's vision. From concept to color grade, we ensure every frame is a masterpiece.",
    features: ["Cinematography", "Creative Direction", "Post-Production", "Color Grading"]
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    desc: "Data-driven strategies that scale brands. We don't just run ads; we engineer growth through storytelling and performance optimization.",
    features: ["Meta Ads", "Google Ads", "Content Strategy", "Performance Tracking"]
  },
  {
    title: "CGI & Motion Graphics",
    icon: Wand2,
    desc: "Push the boundaries of reality with our CGI expertise. We create stunning visual effects that leave a lasting impression.",
    features: ["3D Modeling", "Character Animation", "VFX Compositing", "Product Visuals"]
  },
  {
    title: "Influencer Marketing",
    icon: Share2,
    desc: "Connecting brands with voices that matter. We manage high-impact influencer collaborations that drive authentic engagement.",
    features: ["Talent Sourcing", "Campaign Management", "ROI Analytics", "Content Collaboration"]
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-32 max-w-4xl"
        >
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 italic">Our Universe.</h1>
          <p className="text-2xl text-white/50 font-light leading-relaxed">
            From Hollywood-grade production to algorithm-defying marketing, we provide a 360° ecosystem for brand evolution.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-100px" }}
              className={cn(
                "flex flex-col gap-12",
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              )}
            >
              <div className="flex-1">
                <div className="aspect-video rounded-[3rem] glass overflow-hidden relative group">
                  <div className="absolute inset-0 bg-brand-purple/20 group-hover:bg-brand-neon/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon size={100} className="text-white/20 group-hover:text-brand-neon transition-colors" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-8">
                <span className="text-brand-neon font-display font-black text-6xl opacity-20">0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">{service.title}</h2>
                <p className="text-xl text-white/60 font-light leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-4">
                  {service.features.map(f => (
                    <span key={f} className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
