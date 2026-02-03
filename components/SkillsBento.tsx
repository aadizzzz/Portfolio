
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillsBento: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl lg:text-6xl font-black mb-6"
          >
            Technical <span className="text-blue-500">Arsenal</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Leveraging a diverse stack to architect solutions that are as robust as they are intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[200px]">
          {SKILLS.map((category, idx) => {
            // Logic to determine bento sizes for visual interest
            const spanClass = idx === 0 ? 'md:col-span-3 lg:col-span-4 row-span-2' : 
                             idx === 1 ? 'md:col-span-3 lg:col-span-8 row-span-2' : 
                             'md:col-span-6 lg:col-span-12 row-span-1';
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${spanClass} glass-card rounded-[32px] p-8 group relative overflow-hidden flex flex-col`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {category.icon}
                </div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div 
                      key={skill}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      className="px-5 py-2.5 glass-card rounded-2xl text-sm font-medium text-slate-300 border-white/5 transition-all cursor-default flex items-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative Pattern for larger cards */}
                {idx === 1 && (
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] -z-10 rounded-full" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsBento;
