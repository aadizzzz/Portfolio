
import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

const AboutGrid: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            className="w-[2px] bg-gradient-to-b from-blue-500 to-transparent mb-12"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase"
          >
            Engineering <br /><span className="text-gradient">Philosophy</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            I don't just write code; I architect ecosystems that solve human problems 
            through mathematical elegance and performance optimization.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PHILOSOPHY.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="glass-card p-12 rounded-[40px] group relative overflow-hidden border-white/5 shadow-2xl transition-all duration-500"
            >
              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-[3] transition-transform duration-700" />
              
              <div className="w-20 h-20 glass-card rounded-[30px] flex items-center justify-center mb-10 group-hover:rotate-[15deg] transition-all duration-500 border-white/10 shadow-lg">
                <div className="text-blue-400 scale-[1.5]">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
              
              <div className="absolute bottom-12 left-12 w-8 h-[2px] bg-blue-500/30 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGrid;
