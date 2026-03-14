import { useAppContext } from '../context/AppContext';
import { Sun, Moon, Phone } from 'lucide-react';

export const Navbar = () => {
  const { isDark, setIsDark, lang, setLang } = useAppContext();

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-white/80 dark:bg-[#020617]/80">
    <div className="flex items-center gap-3 group">
  {/* Modern Shield Icon (SVG) */}
  <div className="p-2 bg-blue-600 shadow-lg rounded-xl shadow-blue-500/30">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
  
  <div className="text-2xl font-black leading-none tracking-tighter dark:text-white">
    NISCHINT 
    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Pest Control</p>
  </div>
</div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3">
        
        {/* --- YAHAN LAGAO CONTACT BUTTON --- */}
        <a 
          href="tel:+91 9165151698" 
          className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
        >
          <Phone size={16} /> 
          {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
        </a>
        {/* ---------------------------------- */}

        {/* Language Switch */}
        <button 
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} 
          className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 dark:text-white text-[10px] font-black border border-transparent dark:border-white/10"
        >
          {lang === 'en' ? 'HINDI' : 'ENG'}
        </button>

        {/* Dark Mode Toggle */}
        <button 
          onClick={() => setIsDark(!isDark)} 
          className="p-2 bg-gray-100 border border-transparent rounded-xl dark:bg-white/5 dark:text-white dark:border-white/10"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};