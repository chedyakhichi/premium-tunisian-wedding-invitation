import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SectionHeader } from './SectionHeader';

const images = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", width: 800, height: 1200 },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1519225495810-7512312205ff?q=80&w=2070&auto=format&fit=crop", width: 800, height: 1000 },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop", width: 1000, height: 1500 },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop", width: 1200, height: 800 },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop", width: 800, height: 1100 },
];

export const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Captured Moments" 
          arabicTitle="لحظات خالدة"
          subtitle="A glimpse into our beautiful journey together." 
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mt-16">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden group cursor-pointer break-inside-avoid"
              onClick={() => setIndex(i)}
            >
              <img 
                src={img.src} 
                alt={`Wedding moment ${i + 1}`} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-luxury-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-[0.3em] font-light border-b border-white/50 pb-2">
                  View Full
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
        />
      </div>
    </section>
  );
};
