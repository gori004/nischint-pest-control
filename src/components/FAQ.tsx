import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const { lang } = useAppContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: lang === 'hi' ? "क्या आपकी दवाइयां सुरक्षित हैं?" : "Are your chemicals safe?",
      a: lang === 'hi' 
        ? "हाँ, हम WHO द्वारा प्रमाणित हर्बल और गंधहीन दवाओं का उपयोग करते हैं जो बच्चों और पालतू जानवरों के लिए सुरक्षित हैं।" 
        : "Yes, we use WHO-certified herbal and odorless chemicals that are completely safe for children and pets."
    },
    {
      q: lang === 'hi' ? "दीमक के उपचार में कितना समय लगता है?" : "How long does termite treatment take?",
      a: lang === 'hi' 
        ? "घर के आकार के आधार पर इसमें आमतौर पर 4-6 घंटे लगते हैं।" 
        : "It usually takes 4-6 hours depending on the house size."
    },
    {
      q: lang === 'hi' ? "क्या मुझे घर खाली करना होगा?" : "Do I need to empty the house?",
      a: lang === 'hi' 
        ? "नहीं, हमारी जेल तकनीक और आधुनिक स्प्रे के लिए आपको घर खाली करने की आवश्यकता नहीं है।" 
        : "No, our gel technology and modern sprays don't require you to vacate the premises."
    },
    {
      q: lang === 'hi' ? "क्या आप रतलाम के बाहर भी सर्विस देते हैं?" : "Do you serve outside Ratlam?",
      a: lang === 'hi' 
        ? "हाँ, हम रतलाम के साथ-साथ सैलाना, जावरा और आसपास के क्षेत्रों में भी सेवाएं प्रदान करते हैं।" 
        : "Yes, we provide services in Ratlam as well as Sailana, Jaora, and nearby regions."
    }
  ];

  return (
    <section className="px-6 py-24 bg-transparent">
      <div className="container max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black md:text-5xl">
            {lang === 'hi' ? "अक्सर पूछे जाने वाले सवाल" : "Common Questions"}
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {questions.map((faq, i) => (
            <div 
              key={i} 
              className="border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden bg-white dark:bg-white/[0.02]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.05]"
              >
                <span className="pr-4 text-lg font-bold">{faq.q}</span>
                <div className="text-blue-600 shrink-0">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 mt-2 leading-relaxed border-t text-slate-500 dark:text-slate-400 border-slate-100 dark:border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};