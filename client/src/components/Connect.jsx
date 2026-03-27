import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';
import axios from 'axios';
import Magnetic from './Magnetic';
import whatsappImg from '../assets/WhatsApp Image 2026-03-21 at 4.53.26 PM.jpeg';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // POST to backend. Port is usually 5000 in dev
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setToastMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setToastMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-glow z-0 opacity-80" />
      
      {/* Background Animated Dots */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-blue-electric w-2 h-2 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-electric text-glow">
              LET'S BUILD TOGETHER
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Open to full-time roles, freelance, and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="group">
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-blue-electric transition-colors">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-blue-dark/50 border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-electric transition-colors placeholder-white/20"
                  placeholder="Your Name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-blue-electric transition-colors">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-blue-dark/50 border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-electric transition-colors placeholder-white/20"
                  placeholder="name@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-blue-electric transition-colors">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-blue-dark/50 border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-electric transition-colors placeholder-white/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Magnetic>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-blue-electric hover:bg-blue-neon text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(30,144,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden cursor-hover"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === 'loading' ? (
                      <>Processing <Loader2 size={18} className="animate-spin" /></>
                    ) : status === 'success' ? (
                      'Sent ✓'
                    ) : (
                      <>Send Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </span>
                  
                  {/* Button Hover Sweep Effect */}
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
                </button>
              </Magnetic>
              
              {/* Status Toast */}
              {status === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm mt-4 text-center">
                  {toastMessage}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-4 text-center">
                  {toastMessage}
                </motion.p>
              )}

            </form>
          </motion.div>

          {/* Social Links Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center h-full space-y-8 pl-0 md:pl-12 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 group-hover:text-blue-neon transition-colors">Direct Contact</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Prefer direct email? Or do you want to check out my professional networks? Hit me up.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Magnetic>
                <a 
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-blue-deep border border-blue-electric/20 rounded-md hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all group cursor-hover"
                >
                  <img src={whatsappImg} alt="WhatsApp" className="w-6 h-6 object-cover rounded-full group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">Message on WhatsApp</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href="mailto:your_email@gmail.com"
                  className="flex items-center gap-4 px-6 py-4 bg-blue-deep border border-blue-electric/20 rounded-md hover:border-blue-electric hover:shadow-[0_0_15px_rgba(30,144,255,0.2)] transition-all group cursor-hover"
                >
                  <Mail className="text-blue-electric group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">Shoot an Email</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href="https://www.linkedin.com/in/priyanshu-kumar-27876833b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-blue-deep border border-blue-electric/20 rounded-md hover:border-blue-electric hover:shadow-[0_0_15px_rgba(30,144,255,0.2)] transition-all group cursor-hover"
                >
                  <Linkedin className="text-blue-electric group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">Connect on LinkedIn</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a 
                  href="https://github.com/priyanshukumar7292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-blue-deep border border-blue-electric/20 rounded-md hover:border-blue-electric hover:shadow-[0_0_15px_rgba(30,144,255,0.2)] transition-all group cursor-hover"
                >
                  <Github className="text-blue-electric group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">Follow on GitHub</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Connect;
