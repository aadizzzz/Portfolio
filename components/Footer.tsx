
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="philosophy" className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 lg:p-24 rounded-[48px] border-white/5 text-center relative overflow-hidden">
          {/* Animated Background Blob */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black mb-8 max-w-4xl mx-auto leading-tight"
          >
            Ready to build <span className="text-gradient">the next big thing?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            I'm currently accepting new projects and architectural consulting opportunities.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <motion.a
              href="mailto:addhiman6@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold transition-all shadow-2xl shadow-blue-600/20 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Start a Conversation</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center space-x-4">
              {[
                { Icon: Github, href: "https://github.com/aadizzzz" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/aadizz8960/" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-slate-400 hover:text-white border-white/5 shadow-xl"
                >
                  <item.Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 font-medium tracking-wider text-xs uppercase flex flex-col md:block text-center md:text-left">
              <span>Designed & Engineered by</span>
              <span className="text-white md:ml-1 mt-1 md:mt-0 block md:inline">Aditya Dhiman</span>
            </div>
            <div className="flex items-center space-x-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-400 transition-colors">Resume</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-slate-600 text-[10px] uppercase tracking-[0.5em]">
          © 2026 ADITYA DHIMAN. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
