import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Note: For a real production app, place 'wedding-song.mp3' in public/audio/
  const audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Autoplay blocked", err);
        setIsPlaying(false);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (!hasInteracted) setHasInteracted(true);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio ref={audioRef} src={audioSrc} loop />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="relative flex items-center justify-center w-14 h-14 bg-luxury-black/20 backdrop-blur-md border border-luxury-gold/30 rounded-full text-luxury-gold shadow-2xl overflow-hidden group"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <Volume2 size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <VolumeX size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Rings when playing */}
        {isPlaying && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-luxury-gold"
          />
        )}
      </motion.button>

      {/* Subtle Hint for first-time visitors */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-xs text-luxury-gold whitespace-nowrap pointer-events-none"
        >
          Play Music
        </motion.div>
      )}
    </div>
  );
};
