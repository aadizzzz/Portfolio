
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-5xl font-black">Featured <span className="text-slate-500 italic">Work</span></h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 max-w-sm"
          >
            A collection of production-grade applications where logic meets refined user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-[32px] overflow-hidden border-white/5 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  {project.visual ? (
                    project.visual
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute top-4 right-4 z-10">
                    <a
                      href={project.externalLink || project.link}
                      target={project.externalLink || project.link.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer"
                    >
                      <ArrowUpRight className="text-blue-400" />
                    </a>
                  </div>
                </div>

                <div className="p-8 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-400/80 bg-blue-400/5 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="px-8 pb-8 mt-auto">
                  {project.link.startsWith('/') ? (
                    <Link to={project.link} className="flex items-center space-x-2 text-sm font-bold text-white group-hover:underline underline-offset-8">
                      <span>View Case Study</span>
                      <ExternalLink size={14} />
                    </Link>
                  ) : (
                    <a href={project.link} className="flex items-center space-x-2 text-sm font-bold text-white group-hover:underline underline-offset-8">
                      <span>View Case Study</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
