import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react';
import profileImage from '../assets/profile.png';


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl glass-card border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for Hire</span>
          </motion.div>

          <h1 className="text-6xl lg:text-9xl font-black leading-[0.9] mb-10 tracking-tighter">
            ADITYA <br />
            <span className="text-gradient">DHIMAN</span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed">
            Architecting <span className="text-white font-bold italic">Scalable Dreams</span> through
            <span className="text-blue-400 font-mono"> Code</span>. A Software Engineer pushing the boundaries of what's possible in the Full-Stack ecosystem.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-4 bg-white text-slate-900 px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <span>The Projects</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="flex items-center space-x-4">
              {[
                { Icon: Github, href: "https://github.com/aadizzzz" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/aadizz8960/" },
                { Icon: Mail, href: "mailto:contact@adityadhiman.com" } // Assuming a default mailto, but can be updated later
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, rotate: i % 2 === 0 ? 10 : -10, backgroundColor: 'rgba(59,130,246,0.1)' }}
                  className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all border-white/5 shadow-xl"
                >
                  <item.Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
        >
          <div className="relative w-full max-w-lg mx-auto aspect-[3/4]">
            {/* Visual Backdrops */}
            <div className="absolute -inset-10 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-blue-500/20 rounded-[60px] rotate-6 scale-110 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-indigo-500/20 rounded-[60px] -rotate-3 scale-105 pointer-events-none" />

            <div className="relative h-full glass-card rounded-[50px] overflow-hidden border-white/20 shadow-2xl group cursor-crosshair">
              {/* REAL USER IMAGE INTEGRATION */}
              <img
                src={profileImage}
                alt="Aditya Dhiman"
                className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000"
              />

              {/* Data Overlay Tags */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-10 left-10 right-10 flex flex-col space-y-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="glass-card p-6 rounded-3xl backdrop-blur-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] translate-y-10 group-hover:translate-y-0 transition-transform duration-700"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em] mb-1">Architecture</p>
                      <h4 className="text-2xl font-black text-white">Full Stack Expert</h4>
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5">
                      <Code2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] vertical-rl">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;