import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const RSVP = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section className="py-24 bg-luxury-ivory" id="rsvp">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="R.S.V.P" 
          arabicTitle="تأكيد الحضور"
          subtitle="Please let us know if you can join our celebration." 
        />

        <div className="bg-white p-8 md:p-12 shadow-2xl border border-luxury-gold/10 relative overflow-hidden">
          {/* Decorative motif */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-luxury-brown font-medium">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-luxury-ivory/50 border-b border-luxury-gold/30 p-3 focus:border-luxury-gold outline-none transition-colors font-light"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-luxury-brown font-medium">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-luxury-ivory/50 border-b border-luxury-gold/30 p-3 focus:border-luxury-gold outline-none transition-colors font-light"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-luxury-brown font-medium">Number of Guests</label>
                    <select
                      className="w-full bg-luxury-ivory/50 border-b border-luxury-gold/30 p-3 focus:border-luxury-gold outline-none transition-colors font-light appearance-none cursor-pointer"
                      value={formState.guests}
                      onChange={(e) => setFormState({...formState, guests: e.target.value})}
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-luxury-brown font-medium">Will you attend?</label>
                    <div className="flex gap-4 p-3">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          checked={formState.attending === 'yes'}
                          onChange={() => setFormState({...formState, attending: 'yes'})}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 rounded-full border border-luxury-gold flex items-center justify-center ${formState.attending === 'yes' ? 'bg-luxury-gold' : ''}`}>
                          {formState.attending === 'yes' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </div>
                        <span className="text-sm font-light">Yes, with pleasure</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          checked={formState.attending === 'no'}
                          onChange={() => setFormState({...formState, attending: 'no'})}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 rounded-full border border-luxury-gold flex items-center justify-center ${formState.attending === 'no' ? 'bg-luxury-gold' : ''}`}>
                          {formState.attending === 'no' && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </div>
                        <span className="text-sm font-light">Regretfully, no</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-luxury-brown font-medium">Special Message (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full bg-luxury-ivory/50 border-b border-luxury-gold/30 p-3 focus:border-luxury-gold outline-none transition-colors font-light resize-none"
                    placeholder="Wishes, dietary requirements, etc."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isSubmitting}
                  className="w-full bg-luxury-black text-luxury-gold py-4 text-sm uppercase tracking-[0.3em] font-medium flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-luxury-gold border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span>Send RSVP</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center text-luxury-gold mb-4">
                  <CheckCircle2 size={48} strokeWidth={1} />
                </div>
                <h3 className="text-3xl font-playfair">Thank You, {formState.name}!</h3>
                <p className="text-luxury-brown font-light">Your response has been received. We look forward to celebrating with you.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-luxury-gold underline underline-offset-8 mt-8"
                >
                  Edit Response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
