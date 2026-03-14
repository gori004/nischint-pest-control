import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Reviews = () => {
  const { lang } = useAppContext();

  const reviews = [
    {
      name: lang === 'hi' ? "राजेश शर्मा" : "Rajesh Sharma",
      location: lang === 'hi' ? "पटेल कॉलोनी, रतलाम" : "Patel Colony, Ratlam",
      text: lang === 'hi' ? "दीमक के लिए इनकी सर्विस बेस्ट है। 2 साल हो गए और एक भी दीमक नहीं दिखी। बहुत ही प्रोफेशनल टीम है।" : "Best service for termites. It's been 2 years and not a single termite seen. Very professional team.",
      rating: 5
    },
    {
      name: lang === 'hi' ? "अमित पटवा" : "Amit Patwa",
      location: lang === 'hi' ? "स्टेशन रोड, रतलाम" : "Station Road, Ratlam",
      text: lang === 'hi' ? "किचन में कॉकरोच से बहुत परेशान था, हर्बल जेल ट्रीटमेंट के बाद अब किचन एकदम साफ है। कोई गंध भी नहीं आई।" : "Was troubled by cockroaches in the kitchen, after herbal gel treatment, it's clean now. No smell at all.",
      rating: 5
    },
    {
      name: lang === 'hi' ? "संजय जैन" : "Sanjay Jain",
      location: lang === 'hi' ? "सैलाना रोड" : "Sailana Road",
      text: lang === 'hi' ? "रतलाम में सबसे अच्छी और सस्ती पेस्ट कंट्रोल सर्विस। इनका व्यवहार बहुत अच्छा है।" : "Best and affordable pest control service in Ratlam. Their behavior is very good.",
      rating: 4
    }
  ];

  return (
    <section className="px-6 py-24 transition-colors duration-500 bg-slate-50 dark:bg-white/5">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
            {lang === 'hi' ? "हमारे ग्राहकों की राय" : "What Our Clients Say"}
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-600/20" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="mb-6 italic leading-relaxed text-slate-600 dark:text-slate-300">
                "{rev.text}"
              </p>

              <div>
                <h4 className="text-lg font-bold">{rev.name}</h4>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{rev.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};