import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Cursor />
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="min-h-screen bg-transparent relative w-full overflow-hidden text-white animate-fade-in">
          {/* Interactive Background */}
          <ParticlesBackground />
      {/* BMW loading animated sweep on mount */}
      <div className="fixed top-0 left-0 w-full h-1 m5-stripe z-50 animate-stripe-sweep" style={{ animationIterationCount: 1 }}></div>
      
      <Navbar />
      
          <main className="relative z-10">
            <Hero />
            <Overview />
            <Projects />
            <Certificates />
            <Connect />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
