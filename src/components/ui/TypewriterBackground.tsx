import React, { useState, useEffect } from 'react';

const fullStory = `It was a misty autumn morning in Bloomsbury. The kettle began its soft, familiar whistle on the stove, promising a proper cuppa with a dash of milk. Outside, iconic red double-decker buses rattled past Victorian brick façades, while commuters formed patient, polite queues outside the Tube station. To speak British English is not merely to recite grammar rules from an old textbook; it is to step into an extraordinary rhythm of understatement, gentle irony, warmth, and genuine human connection. As George Orwell once noted, a cup of tea is one of the mainstays of civilisation. From the cobblestones of Covent Garden to the quiet afternoon light of a neighborhood pub, real English lives in the everyday moments where two people sit down, leave their worries behind, and simply start a conversation. "Alright, mate? Let's have a chat."`;

export const TypewriterBackground: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Respect reduced motion: display full text immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedText(fullStory);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullStory.length) {
        setDisplayedText(fullStory.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        // Pause at the end, then restart smoothly
        clearInterval(interval);
        setTimeout(() => {
          currentIndex = 0;
          setDisplayedText('');
        }, 8000);
      }
    }, 38);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Typewriter Text Canvas with soft vignette */}
      <div className="absolute inset-0 p-6 sm:p-12 md:p-16 flex items-start justify-center">
        <div className="max-w-5xl w-full">
          <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed tracking-wider text-british-camel/15 text-justify break-words">
            {displayedText}
            <span className="inline-block w-2 sm:w-2.5 h-3.5 sm:h-4 bg-british-camel/40 ml-1 animate-pulse align-middle" />
          </p>
        </div>
      </div>

      {/* Soft radial mask to keep center readable and avoid visual noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 25%, transparent 20%, rgba(28, 42, 57, 0.7) 60%, #1C2A39 90%)',
        }}
      />
    </div>
  );
};
