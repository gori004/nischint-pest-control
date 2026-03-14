 import { useAppContext } from '../context/AppContext';
import { ShieldCheck, Zap } from 'lucide-react';

// Images ko import karein (Path check kar lena sahi hai na)
import termiteImg from '../assets/termite-service.jpg';
import cockroachImg from '../assets/cockroach-service.jpg';

export const Services = () => {
  const { lang } = useAppContext();

  const services = [
    {
      title: lang === 'hi' ? "दीमक नियंत्रण" : "Termite Control",
      desc: lang === 'hi' ? "दीवारों और फर्नीचर के लिए ।" : "for walls and furniture protection.",
      img: termiteImg,
      badge: lang === 'hi' ? "सबसे लोकप्रिय" : "Most Popular"
    },
    {
      title: lang === 'hi' ? "कॉकरोach और जनरल पेस्ट" : "Cockroach & General Pest",
      desc: lang === 'hi' ? "किचन के लिए सुरक्षित और असरदार हर्बल जेल।" : "Safe and effective herbal gel for your kitchen.",
      img: cockroachImg,
      badge: lang === 'hi' ? "सुरक्षित तकनीक" : "Safe Tech"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#020617]">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tighter md:text-5xl">
            {lang === 'hi' ? "हमारी प्रीमियम सेवाएं" : "Our Premium Services"}
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={i} className="group relative bg-slate-50 dark:bg-white/[0.02] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 transition-all hover:shadow-2xl">
              
              {/* Badge */}
              <div className="absolute top-6 right-6 z-20 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                {s.badge}
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img 
                  src={s.img} 
                  alt={s.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-10">
                <h3 className="mb-4 text-2xl font-black dark:text-white">{s.title}</h3>
                <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                  {s.desc}
                </p>
                
                
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};