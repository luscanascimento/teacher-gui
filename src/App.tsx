import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloatingCTA } from './components/layout/WhatsAppFloatingCTA';
import { LondonTubeTracker } from './components/layout/LondonTubeTracker';
import { Preloader } from './components/sections/Preloader/Preloader';
import { Hero } from './components/sections/Hero/Hero';
import { AboutGui } from './components/sections/AboutGui/AboutGui';
import { ClassFormats } from './components/sections/ClassFormats/ClassFormats';
import { RealEnglish } from './components/sections/RealEnglish/RealEnglish';
import { CommonMistakes } from './components/sections/CommonMistakes/CommonMistakes';
import { BritishCulture } from './components/sections/BritishCulture/BritishCulture';
import { Pronunciation } from './components/sections/Pronunciation/Pronunciation';
import { LearningJourney } from './components/sections/LearningJourney/LearningJourney';
import { MiniQuiz } from './components/sections/MiniQuiz/MiniQuiz';
import { Benefits } from './components/sections/Benefits/Benefits';
import { FAQ } from './components/sections/FAQ/FAQ';
import { Contact } from './components/sections/Contact/Contact';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useScrollAnimations } from './hooks/useScrollAnimations';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  useSmoothScroll();
  useScrollAnimations();

  return (
    <div className="min-h-screen flex flex-col bg-british-cream text-british-blue antialiased selection:bg-british-red selection:text-british-cream">
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <Header />
      <LondonTubeTracker />
      <main className="flex-1">
        <Hero />
        <AboutGui />
        <ClassFormats />
        <RealEnglish />
        <CommonMistakes />
        <BritishCulture />
        <Pronunciation />
        <LearningJourney />
        <MiniQuiz />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingCTA />
    </div>
  );
};

export default App;
