import { motion } from 'motion/react';
import { Target, TrendingUp, BarChart3, PieChart, Users, Globe } from 'lucide-react';

const stats = [
  { label: "Avg. ROAS", value: "4.8x", icon: Target },
  { label: "Reach Grow", value: "+240%", icon: TrendingUp },
  { label: "Conversion", value: "6.2%", icon: BarChart3 },
];

export function DigitalMarketing() {
  return (
    <div className="pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-32 max-w-4xl"
        >
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-8 italic text-gradient leading-tight">Growth<br />Engine.</h1>
          <p className="text-2xl text-white/50 font-light leading-relaxed">
            Beyond standard marketing. We build algorithmic dominance. From performance-led Meta ads to global SEO strategies, we move the needle where it matters most.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-brand-neon/10 transition-colors"
            >
              <stat.icon className="text-brand-neon mb-6" size={40} />
              <p className="text-5xl font-display font-black mb-2">{stat.value}</p>
              <p className="text-xs font-bold tracking-widest uppercase opacity-40">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tactical Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-brand-purple flex items-center justify-center">
                  <PieChart size={16} />
                </div>
                Meta & Google Ads
              </h2>
              <p className="text-white/50 leading-relaxed">
                Precision-targeted performance marketing that focuses on ROI rather than just clicks. We optimize for high-intent audiences and scale with efficiency.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-4">
                <div className="h-8 w-8 rounded-lg bg-brand-neon text-black flex items-center justify-center">
                  <Globe size={16} />
                </div>
                Global SEO & Content
              </h2>
              <p className="text-white/50 leading-relaxed">
                Dominating the search engine landscape through authority-building content and technical excellence. We put your brand where people are searching.
              </p>
            </div>
          </div>
          
          <div className="p-1 rounded-[3rem] bg-gradient-to-br from-brand-purple/50 to-brand-neon/50">
             <div className="bg-brand-matte w-full h-full rounded-[2.8rem] p-10 flex flex-col justify-center gap-10">
                <h3 className="text-4xl font-display font-black tracking-tighter">The Plus 91 Edge.</h3>
                <div className="space-y-6">
                  {['AI-Driven Attribution', 'Creative Performance Testing', 'LTV-Focused Scaling', 'Real-time Analytics Dashboard'].map(edge => (
                    <div key={edge} className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-brand-neon" />
                      <span className="text-sm font-bold tracking-wide uppercase">{edge}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-white text-black py-4 rounded-full font-bold text-sm hover:bg-brand-neon transition-colors">
                  REQUEST GROWTH AUDIT
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
