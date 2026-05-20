import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const traditions = [
  {
    title: "The Outiya Ritual",
    arabic: "طقوس الوطية",
    description: "A celebration of beauty and grace, where the bride shines in her traditional attire, surrounded by the scent of jasmine and the warmth of family.",
    align: "left"
  },
  {
    title: "Henna Ceremony",
    arabic: "مراسم الحناء",
    description: "The delicate art of henna painting, a symbol of good luck and prosperity, marking the beginning of a beautiful journey together.",
    align: "right"
  },
  {
    title: "Carthaginian Elegance",
    arabic: "أناقة قرطاجية",
    description: "Exchanging vows in the historic backdrop of Carthage, where thousand-year-old stones witness a modern union of souls.",
    align: "left"
  }
];

export const Traditions = () => {
  return (
    <section className="relative py-24 bg-luxury-black text-white overflow-hidden">
      {/* Decorative background texture */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="/images/traditions_bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Our Roots" 
          arabicTitle="أصالتنا" 
          subtitle="A tribute to our beautiful Tunisian heritage."
          light
        />

        <div className="max-w-4xl mx-auto space-y-24 mt-20">
          {traditions.map((trad, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: trad.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col ${trad.align === 'left' ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} text-center`}
            >
              <span className="arabic-text text-luxury-gold text-4xl mb-4 font-cairo">
                {trad.arabic}
              </span>
              <h3 className="text-3xl font-playfair mb-6 tracking-wide">
                {trad.title}
              </h3>
              <p className={`text-luxury-beige/70 font-light leading-relaxed max-w-lg ${trad.align === 'left' ? 'md:text-left' : 'md:text-right text-center'}`}>
                {trad.description}
              </p>
              <motion.div 
                className="h-[1px] w-24 bg-luxury-gold mt-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Luxury frame details */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-luxury-gold/20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-luxury-gold/20 pointer-events-none" />
    </section>
  );
};
