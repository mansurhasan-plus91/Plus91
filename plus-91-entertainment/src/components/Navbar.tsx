import { motion } from 'motion/react';
import { Camera, Film, Mic, Rocket, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-8",
        isScrolled ? "glass py-4 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-10 flex border-red-500/0 items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-12 h-12 relative flex items-center justify-center overflow-hidden rounded-full border border-brand-gold/30 gold-glow">
            <img 
              src="/input_file_0.png" 
              alt="Plus 91 Logo" 
              className="w-full h-full object-cover scale-150"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter uppercase leading-none text-brand-gold font-display">PLUS 91</span>
            <span className="font-light opacity-60 text-[10px] tracking-[0.2em] uppercase">Entertainment Co.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "hover:opacity-100 transition-opacity",
                  location.pathname === link.path ? "opacity-100 text-brand-neon" : "opacity-70"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link 
            to="/contact"
            className="bg-white text-black px-6 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-brand-neon transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
