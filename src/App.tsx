import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloatingCTA } from './components/layout/WhatsAppFloatingCTA';
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
import { useSmoothScroll } from './hooks/useSmoothScroll';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col bg-british-cream text-british-blue antialiased selection:bg-british-red selection:text-british-cream">
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <Header />
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
      </main>
      <Footer />
      <WhatsAppFloatingCTA />
    </div>
  );
};

export default App;
