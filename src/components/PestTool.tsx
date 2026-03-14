import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export const PestTool = () => {
  const { t, lang } = useAppContext();
  const [selected, setSelected] = useState<string | null>(null);

  const pests: any = {
    hi: { termite: "दीमक: गहरी मिट्टी का उपचार", cockroach: "कॉकरोच: हर्बल जेल तकनीक", rat: "चूहे: इको-फ्रेंडली ट्रैप" },
    en: { termite: "Termite: Deep soil treatment", cockroach: "Cockroach: Herbal gel tech", rat: "Rats: Eco-friendly traps" }
  };

  return (
    <section className="max-w-4xl px-6 py-20 mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center">{t.toolTitle}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {['termite', 'cockroach', 'rat'].map((p) => (
          <button key={p} onClick={() => setSelected(p)} className={`p-6 rounded-2xl border-2 transition-all ${selected === p ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-white/5'}`}>
            <span className="block mb-2 text-2xl">{p === 'termite' ? '🐜' : p === 'cockroach' ? '🪳' : '🐀'}</span>
            <span className="font-bold capitalize">{p}</span>
          </button>
        ))}
      </div>
      {selected && (
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-6 mt-8 text-center text-white bg-blue-600 rounded-3xl">
          <p className="text-lg font-bold">{pests[lang][selected]}</p>
        </motion.div>
      )}
    </section>
  );
};