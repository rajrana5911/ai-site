import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Category = 'All' | 'Web' | 'App' | 'Marketing';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const projects = [
    { id: 1, title: 'FinTech Dashboard', cat: 'Web', img: 'https://picsum.photos/seed/fintech/600/400' },
    { id: 2, title: 'Fitness Tracker App', cat: 'App', img: 'https://picsum.photos/seed/fitness/600/400' },
    { id: 3, title: 'E-Commerce Redesign', cat: 'Web', img: 'https://picsum.photos/seed/ecom/600/400' },
    { id: 4, title: 'Social Media Campaign', cat: 'Marketing', img: 'https://picsum.photos/seed/social/600/400' },
    { id: 5, title: 'Delivery App', cat: 'App', img: 'https://picsum.photos/seed/food/600/400' },
    { id: 6, title: 'Corporate Branding', cat: 'Marketing', img: 'https://picsum.photos/seed/brand/600/400' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="pt-24 pb-12 min-h-screen bg-tech-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-gray-400">A showcase of our recent work.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Web', 'App', 'Marketing'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-tech-neon border-tech-neon text-tech-dark font-bold'
                  : 'bg-transparent border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-tech-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <span className="text-tech-neon mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.cat}</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                    View Case Study <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
