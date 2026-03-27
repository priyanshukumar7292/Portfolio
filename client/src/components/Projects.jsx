import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Github, ExternalLink, Star, Bot } from 'lucide-react';

// Hardcoded featured projects (hosted outside GitHub public repos)
const FEATURED_PROJECTS = [
  {
    id: 'friday-chatbot',
    number: '★',
    title: 'FRIDAY — THE BOOK CHATBOT',
    description: 'An AI-powered book chatbot that answers questions about any book or novel, provides authorial insights, and delivers personalized reading recommendations based on your mood.',
    tech: ['AI', 'JavaScript', 'Netlify'],
    stars: null,
    github: null,
    homepage: 'https://friday-ac7q.netlify.app/',
    category: 'Full Stack',
    featured: true,
  }
];

const Projects = () => {
  const [realRepos, setRealRepos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const { data } = await axios.get('https://api.github.com/users/priyanshukumar7292/repos?sort=updated');
        
        const mappedRepos = data.filter(repo => !repo.fork && repo.name.toLowerCase() !== 'project').slice(0, 5).map((repo, idx) => ({
          id: repo.id,
          number: `0${idx + 1}`.slice(-2),
          title: repo.name.replace(/-/g, ' ').toUpperCase(),
          description: repo.description || 'A high-performance full stack web application built with modern technologies.',
          tech: repo.language ? [repo.language] : ['JavaScript', 'HTML'],
          stars: repo.stargazers_count,
          github: repo.html_url,
          homepage: repo.homepage,
          category: repo.name.toLowerCase().includes('backend') ? 'Backend' : 
                   repo.name.toLowerCase().includes('react') ? 'Frontend' : 'Full Stack',
          featured: false,
        }));
        
        setRealRepos(mappedRepos);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch repos", err);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const filters = ['All', 'Frontend', 'Backend', 'Full Stack'];
  
  const allProjects = [...FEATURED_PROJECTS, ...realRepos];

  const filteredRepos = filter === 'All' 
    ? allProjects 
    : allProjects.filter(repo => repo.category === filter);

  return (
    <section id="projects" className="py-24 bg-blue-dark/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue-electric text-glow">
                WHAT I'VE BUILT
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4 mt-8 md:mt-0 overflow-x-auto pb-2"
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm whitespace-nowrap uppercase tracking-wider transition-all ${filter === f ? 'text-blue-electric border-b-2 border-blue-electric' : 'text-white/40 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-electric/20 border-t-blue-electric rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ translateY: -4 }}
                className={`group relative bg-blue-deep p-8 rounded-sm transition-all flex flex-col h-full ${
                  repo.featured
                    ? 'border border-blue-electric shadow-[0_0_20px_rgba(30,144,255,0.25)] hover:shadow-[0_0_35px_rgba(30,144,255,0.45)]'
                    : 'border border-blue-electric/20 hover:border-glow grayscale-hover'
                }`}
              >
                {/* Top Animated Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-neon transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                {/* Featured Badge */}
                {repo.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-electric/20 border border-blue-electric/50 text-[10px] uppercase tracking-widest text-blue-electric font-bold">
                    <Bot size={10} /> Featured
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-4xl font-black transition-colors ${repo.featured ? 'text-blue-electric/30' : 'text-white/5 group-hover:text-blue-electric/20'}`}>
                    {repo.featured ? <Bot size={32} className="text-blue-electric/50" /> : repo.number}
                  </span>
                  <div className="flex gap-4 mt-1">
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-neon">
                        <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {repo.github && (
                      <a href={repo.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-neon">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-neon transition-colors">
                  {repo.title}
                </h3>
                
                <p className="text-sm text-white/60 mb-8 flex-grow">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <div className="flex gap-3 flex-wrap">
                    {repo.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-blue-light">{t}</span>
                    ))}
                  </div>
                  {repo.stars !== null && (
                    <div className="flex items-center text-white/40 text-xs">
                      <Star size={14} className="mr-1" /> {repo.stars}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/priyanshukumar7292" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-sm uppercase tracking-widest text-blue-electric border border-blue-electric rounded hover:bg-blue-electric hover:text-white transition-all hover:shadow-[0_0_15px_rgba(30,144,255,0.4)]"
          >
            View Full GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
