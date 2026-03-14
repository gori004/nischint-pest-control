import { useAppContext } from '../context/AppContext';
// Image ko yahan import karo
import termiteResult from '../assets/termite-compare.jpg'; 

export const Comparison = () => {
  const { lang } = useAppContext();
  
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-white/[0.02]">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="mb-12 text-3xl font-black md:text-5xl">
          {lang === 'hi' ? "काम का परिणाम" : "Our Results"}
        </h2>
        
        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl bg-slate-200">
          {/* Imported Image use karein */}
          <img 
            src={termiteResult} 
            alt="Before After Results" 
            className="object-cover w-full h-auto min-h-[300px]"
          />
          
          {/* Labels */}
          <div className="absolute px-4 py-1 text-xs font-bold text-white uppercase bg-red-600 rounded-full shadow-lg bottom-6 left-6">
            {lang === 'hi' ? "पहले" : "Before"}
          </div>
          <div className="absolute px-4 py-1 text-xs font-bold text-white uppercase bg-green-500 rounded-full shadow-lg bottom-6 right-6">
            {lang === 'hi' ? "बाद में" : "After"}
          </div>
        </div>
        
        
     
      </div>
    </section>
  );
};