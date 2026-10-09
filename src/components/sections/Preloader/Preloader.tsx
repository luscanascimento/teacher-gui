import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const greetings = [
  { text: 'Hello.', sub: 'Standard & Polite' },
  { text: 'Hi there!', sub: 'Warm & Friendly' },
  { text: 'Alright, mate?', sub: 'British Casual 🇬🇧' },
  { text: 'Welcome to Teacher Gui.', sub: 'Real English. Real Connection.' },
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasVisited = sessionStorage.getItem('tg_preloader_seen');

    if (prefersReducedMotion || hasVisited) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              sessionStorage.setItem('tg_preloader_seen', 'true');
              onComplete();
            }, 500);
          }, 600);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-british-red text-british-cream transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
    >
      {/* Subtle British Red geometric watermarks */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-red-pattern" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
        {/* Monogram Roundel */}
        <div className="w-14 h-14 rounded-full border-2 border-british-cream/40 flex items-center justify-center mb-6 shadow-md bg-british-red-dark">
          <span className="font-serif font-black text-xl text-british-cream">TG</span>
        </div>

        {/* Dynamic greeting message */}
        <div className="min-h-[90px] flex flex-col items-center justify-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-british-cream animate-fadeIn key={currentIndex}">
            {greetings[currentIndex].text}
          </h2>
          <p className="text-xs uppercase font-mono tracking-vintage text-british-camel mt-2">
            {greetings[currentIndex].sub}
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 h-1 bg-british-cream/20 rounded-full mt-6 overflow-hidden">
          <div
            className="h-full bg-british-camel transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / greetings.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
