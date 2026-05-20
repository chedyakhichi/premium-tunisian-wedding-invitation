import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  arabicTitle?: string;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, arabicTitle, light = false }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12 px-4">
      {arabicTitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`arabic-text text-2xl md:text-3xl mb-2 font-cairo ${light ? 'text-luxury-gold' : 'text-luxury-gold'}`}
        >
          {arabicTitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`text-4xl md:text-5xl lg:text-6xl mb-4 font-playfair uppercase tracking-widest ${light ? 'text-white' : 'text-luxury-black'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`h-[1px] w-24 mb-4 ${light ? 'bg-luxury-gold' : 'bg-luxury-brown'}`}
        />
      )}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`max-w-md text-sm md:text-base font-light tracking-loose italic ${light ? 'text-luxury-beige' : 'text-luxury-brown'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
