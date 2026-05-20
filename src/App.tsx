import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Events } from './components/Events';
import { Traditions } from './components/Traditions';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { AudioPlayer } from './components/AudioPlayer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth entrance for the entire page
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-luxury-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <Hero />
      
      <div className="relative">
        {/* Floating background decorative elements */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
          <div className="absolute top-[20%] left-[5%] w-64 h-64 border border-luxury-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] right-[5%] w-96 h-96 border border-luxury-gold/10 rounded-full blur-3xl" />
        </div>

        <section className="relative z-10">
          <Events />
          <Traditions />
          <Gallery />
          <RSVP />
        </section>
      </div>

      <footer className="py-12 bg-luxury-black text-center border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <span className="text-luxury-gold text-4xl font-cormorant italic mb-4 block">M & C</span>
          <p className="text-white/40 text-xs uppercase tracking-[0.5em] font-light">
            Marouen & Chayma — 15.08.2026
          </p>
          <div className="mt-8 text-white/20 text-[10px] uppercase tracking-widest">
            Handcrafted with love for our special day
          </div>
        </div>
      </footer>

      <AudioPlayer />
    </main>
  );
}

export default App;
