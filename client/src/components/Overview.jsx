import React from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../assets/WhatsApp Image 2026-03-21 at 4.53.26 PM.jpeg';

const skills = [
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 
  'JavaScript', 'HTML', 'CSS', 'Git', 'REST API', 'Mongoose'
];

const stats = [
  { label: 'Projects', value: '1+' },
  { label: 'Commitment', value: '100%' },
  { label: 'Bugs Tolerated', value: '0' },
];

const Overview = () => {
  return (
    <section id="overview" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue-electric text-glow">
              OVERVIEW
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Avatar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-neon to-blue-electric rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
              
              {/* Floating idle animation */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative w-64 h-64 bg-blue-deep rounded-lg border border-blue-electric/30 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-electric/10 to-transparent z-0" />
                  <img src={avatarImg} alt="Priyanshu Kumar" className="w-full h-full object-cover z-10 grayscale-hover" />
                  
                  {/* Scanning line */}
                  <motion.div
                    className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-electric to-transparent opacity-70 z-20"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 0.8 }}
                  />

                  {/* M5 Accent Corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-electric/20 to-transparent rotate-45 transform translate-x-8 translate-y-8" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-7"
          >
            {/* Bio text with word-by-word staggered reveal */}
            <motion.p
              className="text-lg text-white/80 leading-relaxed mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.03, delayChildren: 0.5 } },
              }}
            >
              {"I'm a passionate Full Stack Developer specializing in the MERN stack. I build scalable, secure, and visually stunning web applications. For me, coding is like engineering a high-performance vehicle:".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}{' '}<span className="text-blue-light font-medium italic">Every system tuned for peak performance.</span>
            </motion.p>

            {/* Skills */}
            <div className="mb-10">
              <motion.h3
                className="text-sm uppercase tracking-widest text-white/50 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Tech Stack
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.6, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.6 + (index * 0.07) }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-blue-dark border border-white/5 rounded text-sm text-blue-light hover:border-blue-neon hover:text-white hover:shadow-[0_0_10px_rgba(0,170,255,0.4)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + (i * 0.15) }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-default"
                >
                  <motion.div
                    className="text-3xl font-black text-blue-electric mb-1 group-hover:text-blue-light transition-colors"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 1 + (i * 0.15) }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs uppercase tracking-wider text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
