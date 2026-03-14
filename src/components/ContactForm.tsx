 import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export const ContactForm = () => {
  const { lang } = useAppContext();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="px-6 py-24 bg-blue-600/5">
      <div className="container grid items-center max-w-5xl gap-12 mx-auto md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-black">{lang === 'hi' ? "फ्री इंस्पेक्शन बुक करें" : "Book Free Inspection"}</h2>
          <p className="mb-8 text-slate-500">{lang === 'hi' ? "रतलाम के एक्सपर्ट्स से सलाह लें।" : "Get advice from Ratlam's experts."}</p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/10">
          {status === 'success' ? (
            <div className="py-10 font-bold text-center text-green-600">✓ {lang === 'hi' ? 'शुक्रिया! हम जल्द कॉल करेंगे।' : 'Thanks! We will call you soon.'}</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder={lang === 'hi' ? "आपका नाम" : "Your Name"} 
                className="w-full p-4 transition-all border outline-none rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white" />
              <input required type="tel" placeholder={lang === 'hi' ? "मोबाइल नंबर" : "Mobile Number"} 
                className="w-full p-4 transition-all border outline-none rounded-xl bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white" />
              <button className="w-full py-4 font-bold text-white transition-all bg-blue-600 shadow-lg rounded-xl hover:bg-blue-700 shadow-blue-500/30">
                {lang === 'hi' ? 'अभी भेजें' : 'Send Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section> 
  );
};