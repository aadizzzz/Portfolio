
import React from 'react';
import {
  User,
  Lightbulb,
  Target,
  Compass,
  Code2,
  Globe,
  Database,
  Clapperboard,
  Star,
  Film
} from 'lucide-react';
import { Project, SkillCategory, PhilosophyItem } from './types';
import splitngoImage from './assets/splitngo.png';
import toolboxImage from './assets/toolbox.png';
import honeypotImage from './assets/scamhoneypot.png';


export const PHILOSOPHY: PhilosophyItem[] = [
  {
    title: "About Me",
    description: "Detail-oriented MCA student from CSJM University (Chhatrapati Shahu Ji Maharaj University, Kanpur). Passionate about real-world problem solving through code.",
    icon: <User className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Core Philosophy",
    description: "Clarity & Scalability: Prioritizing simple, maintainable code that is built to grow with future needs.",
    icon: <Lightbulb className="w-5 h-5 text-blue-400" />
  },
  {
    title: "User Impact",
    description: "Focus on user experience and logic complementing each other for high-value outcomes.",
    icon: <Target className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Beyond Coding",
    description: "Explorer and traveler, finding inspiration in new places and scalable architectures.",
    icon: <Compass className="w-5 h-5 text-blue-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "ToolBox",
    description: "A minimalist, all-in-one file utility platform that enhances productivity. Includes multiple file conversion and utility tools with a clean UI.",
    image: toolboxImage,
    tags: ["TypeScript", "React Native", "Secure CPU"],
    link: "/case-study/toolbox",
    externalLink: "https://aadizztoolbox.vercel.app/"
  },
  {
    id: "2",
    title: "SplitNGo",
    description: "An intelligent journey planner using graph algorithms for optimal route finding, simplifying complex travel logistics.",
    image: splitngoImage,
    tags: ["React", "Supabase", "TypeScript", "PostgreSQL"],
    link: "/case-study/splitngo",
    externalLink: "https://splitngo.vercel.app/"
  },
  {
    id: "3",
    title: "Scam Honeypot Intelligence Extraction System",
    description: "Uses Supabase Edge Functions & Gemini AI for Chat to extract intelligence links of UPI ID's Phone Number Bank Account IFSC Code Email address etc.",
    image: honeypotImage,
    tags: ["Supabase", "Gemini AI", "Edge Functions", "React"],
    link: "/case-study/honeypot",
    externalLink: "https://honeypot-omega.vercel.app/"
  },
  {
    id: "4",
    title: "Best Rated Movies",
    description: "Real-time movie tracker fetching data from IMDb, providing users with updated, high-quality movie recommendations.",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
        <div className="relative">
          <div className="absolute -inset-4 bg-purple-500/20 blur-xl rounded-full animate-pulse" />
          <div className="flex -space-x-4">
            <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center transform -rotate-12 border-purple-500/20 z-10">
              <Clapperboard className="w-8 h-8 text-purple-400" />
            </div>
            <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center transform rotate-6 border-indigo-500/20 z-20 bg-indigo-900/40">
              <Film className="w-8 h-8 text-indigo-400" />
            </div>
            <div className="absolute -top-6 right-0 animate-bounce delay-100">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    ),
    tags: ["React.js", "GraphQL", "API Integration"],
    link: "#"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "Java", "C++", "JavaScript"]
  },
  {
    title: "Web & Full-Stack",
    icon: <Globe className="w-5 h-5" />,
    skills: ["HTML5", "CSS3", "React.js", "Node.js", "RESTful APIs", "MongoDB", "MySQL"]
  },
  {
    title: "Core CS",
    icon: <Database className="w-5 h-5" />,
    skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Software Engineering", "DBMS"]
  }
];
