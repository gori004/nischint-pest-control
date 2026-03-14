import { AppProvider, useAppContext } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats'; // Naya
import { Services } from './components/Services';
import { Comparison } from './components/Comparison';
import { Reviews } from './components/Reviews';
import { ContactForm } from './components/ContactForm';
import { PestTool } from './components/PestTool';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer'; // Naya
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

function AppContent() {
  const { isDark, lang } = useAppContext();
  
  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500 selection:bg-blue-600/30">
        
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <Stats />
          <Services />
          <Comparison />
          <Reviews />
          <ContactForm />
          <PestTool />
          <FAQ />
        </main>

        <Footer />

        {/* --- ADVANCED: LIVE PEST ALERT NOTIFICATION --- */}
        <AnimatePresence>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="fixed bottom-28 left-6 z-40 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-white/10 flex items-center gap-4 max-w-xs hidden md:flex"
          >
            <div className="flex items-center justify-center w-10 h-10 text-green-500 rounded-full bg-green-500/10 shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                {lang === 'hi' ? "अभी-अभी बुकिंग हुई!" : "New Booking!"}
              </p>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {lang === 'hi' ? "स्टेशन रोड, रतलाम से" : "From Station Road, Ratlam"}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating WhatsApp */}
        <a 
          href="https://wa.me/+919165151698" 
          target="_blank" 
          rel="noreferrer"
          className="fixed z-50 p-5 text-white transition-all bg-green-500 rounded-full shadow-2xl bottom-8 right-8 hover:scale-110 active:scale-95 group"
        >
          <MessageCircle size={28} />
          <span className="absolute px-4 py-2 mr-4 text-xs font-bold transition-opacity -translate-y-1/2 bg-white shadow-xl opacity-0 pointer-events-none right-full top-1/2 text-slate-900 rounded-xl group-hover:opacity-100 whitespace-nowrap">
            {lang === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat on WhatsApp'}
          </span>
        </a>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}