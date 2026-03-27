import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Database } from 'lucide-react';
import cert1 from '../assets/cert1.svg';
import cert2 from '../assets/cert2.svg';
import cert3 from '../assets/cert3.png';
import oracleCert from '../assets/Oracle Certificate.pdf';
import microsoftCert from '../assets/Microsoft certificate.pdf';

const placeholderCerts = [
  {
    id: 1,
    title: 'Oracle Database Certification',
    issuer: 'Oracle',
    date: '2025',
    image: cert1,
    link: oracleCert,
    category: 'AI Foundation Associate'
  },
  {
    id: 2,
    title: 'Dev!@thon — National Hackathon',
    issuer: 'GLA University, Mathura',
    date: 'Oct 2025',
    image: cert2,
    link: 'https://certificate.givemycertificate.com/c/de2df7a9-4652-48d7-bfc5-caa1cc20cb57',
    category: 'Certificate of Participation'
  },
  {
    id: 3,
    title: 'Microsoft Certification',
    issuer: 'Microsoft',
    date: '2025',
    image: cert3,
    link: microsoftCert,
    category: 'Technology'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="absolute inset-0 radial-glow z-0 opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue-electric text-glow">
              CREDENTIALS & CERTIFICATIONS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-blue-electric/50 transition-colors duration-300"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative flex flex-col">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none rounded-2xl" />

                <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 mb-6 relative group-hover:shadow-[0_0_15px_rgba(30,144,255,0.2)] transition-shadow">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale-hover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-light transition-colors">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400 mt-auto">
                  <span className="flex items-center gap-1 text-blue-electric font-medium">
                    <Award size={16} /> {cert.issuer}
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span>{cert.category}</span>
                  <span className="text-zinc-500">•</span>
                  <span>{cert.date}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
