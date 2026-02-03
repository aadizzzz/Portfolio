
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Connect', id: 'philosophy' }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center font-black text-blue-400 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            AD
          </div>
        </motion.div>

        <div className="hidden md:flex glass px-8 py-2.5 rounded-2xl border border-white/5 shadow-2xl space-x-8 items-center">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollTo(item.id)}
              className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 hover:text-white transition-all relative group"
            >
              {item.name}
              <motion.span 
                className="absolute -bottom-1 left-0 h-[2px] bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </button>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,99,235,0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('philosophy')}
          className="relative group overflow-hidden bg-blue-600 px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all"
        >
          <span className="relative z-10 text-white">Hire Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
