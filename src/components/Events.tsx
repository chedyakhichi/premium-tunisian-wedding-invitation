import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: "Henna Night",
    arabicTitle: "ليلة الحناء",
    date: "13 August 2026",
    time: "20:00",
    location: "Maison Khichi — Mornag",
    image: "/images/henna.jpg",
    description: "A night of warm oriental ambiance and ancestral traditions."
  },
  {
    title: "Wettia",
    arabicTitle: "الوطية",
    date: "14 August 2026",
    time: "20:00",
    location: "Salle des fêtes Diva — Mornag",
    image: "/images/wettia.jpg",
    description: "A premium modern celebration of joy and elegance."
  },
  {
    title: "Wedding Ceremony",
    arabicTitle: "حفل الزفاف",
    date: "15 August 2026",
    time: "19:00",
    location: "Dar Bouraoui — Carthage",
    image: "/images/ceremony.jpg",
    description: "Our main celebration in the historic heart of Carthage."
  }
];

export const Events = () => {
  return (
    <section className="py-24 bg-luxury-ivory overflow-hidden" id="events">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="The Celebration" 
          arabicTitle="برنامج الاحتفالات"
          subtitle="Join us as we celebrate our love through these special moments." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative flex flex-col h-full bg-white shadow-xl overflow-hidden border border-luxury-gold/10"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="arabic-text text-white text-xl font-cairo drop-shadow-lg">
                    {event.arabicTitle}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-playfair mb-4 text-luxury-black group-hover:text-luxury-gold transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center gap-3 text-luxury-brown/80">
                    <Calendar size={18} className="text-luxury-gold" />
                    <span className="text-sm font-light tracking-wide">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-luxury-brown/80">
                    <Clock size={18} className="text-luxury-gold" />
                    <span className="text-sm font-light tracking-wide">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-luxury-brown/80">
                    <MapPin size={18} className="text-luxury-gold" />
                    <span className="text-sm font-light tracking-wide underline decoration-luxury-gold/30">{event.location}</span>
                  </div>
                </div>

                <p className="text-sm font-light italic text-luxury-brown/70 border-t border-luxury-gold/20 pt-4">
                  {event.description}
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 border border-luxury-gold text-luxury-gold text-xs uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold hover:text-white transition-all duration-300"
                >
                  View Map
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
