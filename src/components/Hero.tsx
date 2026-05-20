import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/images/hero_bg.jpg" 
          alt="Dar Bouraoui Carthage" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Particles/Dust for cinematic feel */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 100 }}
            animate={{ 
              opacity: [0, 0.5, 0], 
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 50, Math.random() * -50]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + Math.random() * 5, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mb-6"
        >
          <span className="arabic-text text-luxury-gold text-3xl md:text-5xl font-cairo block mb-4">
            نحن نتشرف بدعوتكم لحضور حفل زفاف
          </span>
          <span className="text-white font-poppins tracking-[0.3em] uppercase text-sm md:text-base">
            Save The Date
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
        >
          <span className="text-white text-6xl md:text-8xl lg:text-9xl font-playfair font-light">Marouen</span>
          <span className="text-luxury-gold text-4xl md:text-6xl font-cormorant italic">&</span>
          <span className="text-white text-6xl md:text-8xl lg:text-9xl font-playfair font-light">Chayma</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-12 space-y-4"
        >
          <div className="h-[1px] w-48 bg-luxury-gold/50 mx-auto" />
          <p className="text-luxury-beige text-xl md:text-2xl font-cormorant tracking-widest uppercase">
            15 August 2026
          </p>
          <p className="text-luxury-gold text-lg md:text-xl font-light">
            Dar Bouraoui — Carthage
          </p>
          <motion.a
            href="#rsvp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-luxury-gold text-white text-xs uppercase tracking-[0.3em] font-medium transition-all hover:bg-white hover:text-luxury-gold"
          >
            Confirm Attendance
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs uppercase tracking-widest font-light">Scroll</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[1px] h-12 bg-luxury-gold/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
