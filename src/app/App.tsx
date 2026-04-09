import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider } from "./components/LanguageContext";
import { ChoiceHero } from "./components/ChoiceHero";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features, HowItWorks } from "./components/Features";
import { Raffles, Winners } from "./components/Raffles";
import { FAQ, Footer } from "./components/Footer";
import { Stats } from "./components/Stats";
import { Blog } from "./components/Blog";
import { Partners } from "./components/Partners";

type AppView = 'choice' | 'app' | 'business';

export default function App() {
  const [view, setView] = useState<AppView>('choice');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-['Inter',sans-serif]">
        <AnimatePresence mode="wait">
          {view === 'choice' && (
            <motion.div
              key="choice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChoiceHero
                onSelectApp={() => setView('app')}
                onSelectBusiness={() => setView('business')}
              />
            </motion.div>
          )}

          {view === 'app' && (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Navbar onBack={() => setView('choice')} onNavigateToBusiness={() => setView('business')} />
              <main>
                <Hero />
                <Stats />
                <Features />
                <HowItWorks />
                <Raffles />
                <Winners />
                <Blog />
                <FAQ />
              </main>
              <Footer />
            </motion.div>
          )}

          {view === 'business' && (
            <motion.div
              key="business"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Navbar onBack={() => setView('choice')} />
              <main>
                <Partners />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}
