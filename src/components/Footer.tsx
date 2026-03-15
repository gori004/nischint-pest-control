import { useAppContext } from '../context/AppContext';

export const Footer = () => {
  const { lang } = useAppContext();
  return (
    <footer className="py-20 px-6 bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="container grid grid-cols-1 gap-12 mx-auto text-left md:grid-cols-4">
        
        {/* Logo & Description */}
        <div className="md:col-span-2">
           <div className="mb-4 text-2xl font-black tracking-tighter text-slate-950 dark:text-white">
             NISCHINT 
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Pest Control</p>
           </div>
           <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-400">
             {lang === 'hi' 
               ? "रतलाम का सबसे भरोसेमंद ऑर्गेनिक पेस्ट मैनेजमेंट। हम आपके घर को सुरक्षित और कीड़ों से मुक्त बनाने के लिए प्रतिबद्ध हैं।" 
               : "Ratlam's most trusted Organic Pest Management. We are committed to making your home safe and pest-free."}
           </p>
        </div>

        {/* Services Links */}
        <div>
           <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-blue-600">
             {lang === 'hi' ? "सेवाएं" : "SERVICES"}
           </h4>
           <ul className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
             <li className="transition-colors cursor-pointer hover:text-blue-600">Termite Control</li>
             <li className="transition-colors cursor-pointer hover:text-blue-600">Cockroach Gel</li>
             <li className="transition-colors cursor-pointer hover:text-blue-600">Rodent Control</li>
           </ul>
        </div>

        {/* Contact Details */}
        <div>
           <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-blue-600">
             {lang === 'hi' ? "संपर्क" : "CONTACT"}
           </h4>
           <div className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
             <p>Patel Colony, Ratlam</p>
             <p>Madhya Pradesh</p>
             
             <div className="mt-6 space-y-2">
               {/* Numbers with strong contrast for both modes */}
               <a href="tel:+919165151698" className="block text-lg font-black transition-colors text-slate-950 dark:text-white hover:text-blue-600">
                 +91 9165151698
               </a>
               <a href="tel:+917224029995" className="block text-lg font-black transition-colors text-slate-950 dark:text-white hover:text-blue-600">
                 +91 7224029995
               </a>
             </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-white/5 text-center text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold">
        © 2026 Nischint Pest Control 
      </div>
    </footer>
  );
};