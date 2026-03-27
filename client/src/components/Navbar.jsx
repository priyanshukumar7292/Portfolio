import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Overview', 'Projects', 'Certificates', 'Connect'];

  const scrollToSection = (e, target) => {
    e.preventDefault();
    const el = document.getElementById(target.toLowerCase());
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glassmorphism border-b border-blue-electric/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="absolute top-0 left-0 w-full h-[3px] m5-stripe" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Magnetic>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-tighter text-glow text-blue-electric hover:text-white transition-colors cursor-pointer inline-block"
              onClick={(e) => scrollToSection(e, 'hero')}
            >
              PK.
            </motion.div>
          </Magnetic>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((item, idx) => (
              <Magnetic key={item}>
                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className="text-sm uppercase tracking-widest text-white/70 hover:text-blue-neon transition-colors cursor-hover inline-block"
                >
                  {item}
                </motion.a>
              </Magnetic>
            ))}
          </div>

          <Magnetic>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(30,144,255,0.7)', color: '#fff', borderColor: '#fff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="hidden md:block px-4 py-1 text-xs font-semibold uppercase tracking-wider border border-blue-electric text-blue-electric rounded-full shadow-[0_0_10px_rgba(30,144,255,0.3)] cursor-pointer"
            >
              MERN Dev
            </motion.div>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
