import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Dynamic progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    // Keep the preloader visible for 2.2 seconds to show animations
    const timeout = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-blue-deep origin-top"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100vh', 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center text-5xl md:text-7xl font-black text-white tracking-tighter mb-4"
        >
          <motion.span 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5] 
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-4 h-4 md:w-5 md:h-5 bg-blue-electric rounded-full mr-6 shadow-[0_0_20px_rgba(30,144,255,0.9)]" 
          />
          <motion.span
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 1.2, ease: "circInOut", delay: 0.2 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-light"
          >
            नमस्ते <span className="text-blue-electric ml-3">Developers</span>
          </motion.span>
        </motion.div>

      </div>

      {/* Thin Background Track */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10" />

      {/* Progress Bar (Blue / M5 Theme) */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 m5-stripe"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(progress, 100)}%` }}
        transition={{ ease: "easeOut", duration: 0.1 }}
      />
    </motion.div>
  );
};

export default Preloader;
