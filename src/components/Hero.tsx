import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
  export const Hero = () => {
  const { t } = useAppContext();
  return (
    <section className="relative px-6 pt-32 pb-20 overflow-hidden text-center">
      {/* Dynamic Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-700 bg-center bg-cover opacity-60 dark:opacity-20"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/59526/pexels-photo-59526.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
      />
      
      {/* Light/Dark Overlays */}
      <div className="absolute inset-0 z-10 bg-white/60 dark:bg-[#020617]/90" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="container relative z-20 max-w-5xl mx-auto"
      >
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">{t.location}</span>
        <h1 className="mt-4 text-5xl font-black leading-tight tracking-tighter md:text-7xl text-slate-950 dark:text-white">
          {t.heroTitle} <br/><span className="text-blue-600">{t.heroSub}</span>
        </h1>
        {/* Baaki code... */}
      </motion.div>
    </section>
  );
};