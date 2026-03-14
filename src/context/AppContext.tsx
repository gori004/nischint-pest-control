import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<'en' | 'hi'>('hi');

  // Yeh magic part hai - isse light/dark mode har jagah chalega
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDark]);

  const content = {
    en: {
      location: "Ratlam, MP",
      heroTitle: "Live Tension-Free,",
      heroSub: "We Are Here!",
      heroDesc: "Ratlam's most trusted Organic Pest Management.",
      ctaCall: "Call Now",
      ctaInspect: "Free Inspection"
    },
    hi: {
      location: "रतलाम, मध्य प्रदेश",
      heroTitle: "निश्चिंत रहें,",
      heroSub: "हम हैं ना!",
      heroDesc: "रतलाम का सबसे भरोसेमंद ऑर्गेनिक पेस्ट मैनेजमेंट।",
      ctaCall: "अभी कॉल करें",
      ctaInspect: "फ्री इंस्पेक्शन"
    }
  };

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang, t: content[lang] }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};