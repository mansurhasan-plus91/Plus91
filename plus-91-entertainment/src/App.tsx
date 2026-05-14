import { motion } from 'motion/react';
import { Hero } from '@/components/Hero';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { Portfolio } from '@/pages/Portfolio';
import { Contact } from '@/pages/Contact';
import { DigitalMarketing } from '@/pages/DigitalMarketing';
import { PlusAI } from '@/components/PlusAI';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-brand-matte selection:bg-brand-neon selection:text-black">
          <Navbar />
          
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/marketing" element={<DigitalMarketing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>

          <PlusAI />
          <WhatsAppButton />
          
          {/* Global Ambient Glows */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
          </div>
        </div>
      </SmoothScroll>
    </Router>
  );
}
