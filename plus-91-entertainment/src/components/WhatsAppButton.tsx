import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = "+910000000000"; // Placeholder
  const message = encodeURIComponent("Hello Plus 91 Entertainment, I’m interested in your ad film & digital marketing services.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-28 left-10 z-50 h-14 w-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:brightness-110 transition-all group"
    >
      <MessageCircle className="text-white fill-white" />
      <div className="absolute left-16 bg-brand-gold text-black px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl shadow-brand-gold/20">
        Chat with us
      </div>
    </motion.a>
  );
}
