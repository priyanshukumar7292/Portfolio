import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 radial-glow z-0" />
      
      {/* Background Particles/Dots */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-blue-electric w-1.5 h-1.5 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        {/* Three colored bars: Blue, White, Red (M5) */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex gap-2 mb-8"
        >
          <div className="w-8 h-1 bg-[#1e90ff] shadow-[0_0_8px_#1e90ff]"></div>
          <div className="w-8 h-1 bg-white shadow-[0_0_8px_#fff]"></div>
          <div className="w-8 h-1 bg-[#ff0000] shadow-[0_0_8px_#ff0000]"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-light to-blue-electric text-glow">
            PRIYANSHU KUMAR
          </span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl uppercase tracking-[0.3em] text-white/80 mb-6 font-medium"
        >
          Full Stack Developer &middot; MERN Stack
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-white/50 max-w-xl mx-auto mb-10 text-sm md:text-base"
        >
          Building high-performance web experiences. Every system tuned for peak execution.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Magnetic>
            <a 
              href="#projects"
              className="px-8 py-3 bg-blue-electric hover:bg-blue-neon text-white font-bold rounded shadow-[0_0_15px_rgba(30,144,255,0.6)] transition-all uppercase tracking-widest text-sm transform hover:-translate-y-1 block cursor-hover"
            >
              View Projects
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="#connect"
              className="px-8 py-3 bg-transparent border-2 border-white/20 hover:border-blue-electric text-white font-bold rounded transition-all uppercase tracking-widest text-sm transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(30,144,255,0.2)] block cursor-hover"
            >
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-blue-electric"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
