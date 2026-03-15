import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export const Stats = () => {
  const { lang } = useAppContext();
  
  const stats = [
    { num: "100+", label: lang === 'hi' ? "खुश परिवार" : "Happy Families" },
    { num: "1+", label: lang === 'hi' ? "सालों का अनुभव" : "Years Experience" },
    { num: "100%", label: lang === 'hi' ? "सुरक्षित दवाइयां" : "Safe Chemicals" },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-blue-600">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-32 -translate-y-32 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-32 translate-y-32 rounded-full bg-black/10 blur-3xl" />
      
      <div className="container relative z-10 grid grid-cols-1 gap-12 mx-auto md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center justify-center text-center"
          >
            {/* Force text color using absolute white */}
            <h3 className="mb-2 text-5xl font-black tracking-tighter text-white">
              {s.num}
            </h3>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-100 opacity-90">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};