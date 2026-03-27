import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import Magnetic from './Magnetic';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-dark relative border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          <Magnetic>
            <motion.div
              className="text-2xl font-bold tracking-tighter text-glow text-blue-electric cursor-pointer inline-block"
              whileHover={{ scale: 1.15, textShadow: '0 0 20px rgba(30,144,255,0.9)', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              PK.
            </motion.div>
          </Magnetic>

          <div className="flex gap-6">
            <a href="https://github.com/priyanshukumar7292" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-electric transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-kumar-27876833b" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue-electric transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your_email@gmail.com" className="text-white/40 hover:text-blue-electric transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center bg-blue-deep border border-blue-electric/30 hover:border-blue-electric text-blue-electric rounded transition-all hover:shadow-[0_0_10px_rgba(30,144,255,0.3)] group"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="text-center text-xs text-white/30 uppercase tracking-widest mt-12">
          &copy; {new Date().getFullYear()} Priyanshu Kumar &middot; All Rights Reserved
        </div>
      </div>

      {/* BMW M5 Bottom Stripe */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] m5-stripe" />
    </footer>
  );
};

export default Footer;
