import { useAppContext } from '../context/AppContext';

export const Footer = () => {
  const { lang } = useAppContext();
  return (
    <footer className="py-20 px-6 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/5">
      <div className="container grid grid-cols-1 gap-12 mx-auto md:grid-cols-4">
        <div className="md:col-span-2">
           <div className="mb-4 text-2xl font-black tracking-tighter dark:text-white">
             NISCHINT<span className="text-blue-600">.</span>
           </div>
           <p className="max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
             {lang === 'hi' 
               ? "रतलाम का सबसे भरोसेमंद ऑर्गेनिक पेस्ट मैनेजमेंट। हम आपके घर को सुरक्षित और कीड़ों से मुक्त बनाने के लिए प्रतिबद्ध हैं।" 
               : "Ratlam's most trusted Organic Pest Management. We are committed to making your home safe and pest-free."}
           </p>
        </div>
        <div>
           <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-blue-600">{lang === 'hi' ? "सेवाएं" : "SERVICES"}</h4>
           <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
             <li className="transition-colors cursor-pointer hover:text-blue-600">Termite Control</li>
             <li className="transition-colors cursor-pointer hover:text-blue-600">Cockroach Gel</li>
             <li className="transition-colors cursor-pointer hover:text-blue-600">Rodent Control</li>
           </ul>
        </div>
        <div>
           <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-blue-600">{lang === 'hi' ? "संपर्क" : "CONTACT"}</h4>
           <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
             Patel Colony, Ratlam<br/>Madhya Pradesh<br/>
             <span className="block mt-2 font-bold text-slate-900 dark:text-white">+91 9165151698</span>
              <span className="block mt-2 font-bold text-slate-900 dark:text-white">+91 7224029995</span>
           </p>
        </div>
      </div>
      <div className="container mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-white/5 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
        © 2026 Nischint Pest Control - Designed by GORI SILRA
      </div>
    </footer>
  );
};