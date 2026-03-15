 import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PestTool } from './components/PestTool';
import { useAppContext } from './context/AppContext';

function App() {
  const { isDark } = useAppContext();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-500 bg-[#F8FAFC] dark:bg-[#020617] text-slate-900 dark:text-slate-100">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Comparison />
          <PestTool />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;