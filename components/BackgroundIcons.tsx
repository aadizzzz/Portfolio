
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  GitBranch, 
  Cloud, 
  Flame, 
  Server, 
  Database, 
  Cpu, 
  Terminal, 
  Code2, 
  Layers 
} from 'lucide-react';

const icons = [
  { Icon: Github, color: 'text-white/10', top: '5%', left: '8%', size: 80 },
  { Icon: GitBranch, color: 'text-orange-500/10', top: '25%', left: '85%', size: 60 },
  { Icon: Cloud, color: 'text-blue-400/10', top: '65%', left: '5%', size: 90 }, // Cloudflare representation
  { Icon: Flame, color: 'text-yellow-500/10', top: '80%', left: '75%', size: 70 }, // Firebase representation
  { Icon: Server, color: 'text-indigo-400/10', top: '15%', left: '45%', size: 55 }, // AWS representation
  { Icon: Database, color: 'text-cyan-400/10', top: '45%', left: '92%', size: 65 },
  { Icon: Cpu, color: 'text-purple-400/10', top: '75%', left: '15%', size: 100 },
  { Icon: Terminal, color: 'text-emerald-400/10', top: '50%', left: '12%', size: 45 },
  { Icon: Code2, color: 'text-pink-400/10', top: '35%', left: '18%', size: 50 },
  { Icon: Layers, color: 'text-blue-500/10', top: '10%', left: '70%', size: 85 },
];

const BackgroundIcons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color}`}
          initial={{ opacity: 0 }}
          animate={{ 
            y: [0, -50, 0],
            x: [0, 20, 0],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.7
          }}
          style={{ top: item.top, left: item.left }}
        >
          <item.Icon size={item.size} strokeWidth={0.5} />
        </motion.div>
      ))}
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
    </div>
  );
};

export default BackgroundIcons;
