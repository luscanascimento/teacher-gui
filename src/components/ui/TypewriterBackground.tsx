import React, { useState, useEffect } from 'react';

const fullStory = `It was a crisp, misty autumn morning in Bloomsbury. The heavy iron kettle began its soft, familiar whistle on the stove, promising a proper cuppa with just a generous dash of fresh milk. Outside, iconic crimson double-decker buses rattled past soot-kissed Victorian façades, while Londoners quietly took their places in patient, immaculate queues outside the tube station. To speak British English is never merely about memorizing rigid grammar rules from a dusty textbook; it is about stepping into an extraordinary cadence of understatement, gentle irony, warmth, and heartfelt connection.

As George Orwell once famously observed in his essays, a good cup of tea is one of the essential mainstays of civilisation in this country. From the ancient cobblestones of Covent Garden and the lively bookstalls along the South Bank to the amber-lit windows of a neighbourhood pub by the Thames, real language thrives in the humble moments where two people sit down, leave their hesitations at the door, and simply start a conversation.

Down in the tunnels of the London Underground, the rhythmic chime echoes: "Please mind the gap between the train and the platform." Yet the greatest gap in learning a language has never been between words, but between fear and confidence. The beauty of conversation lies in its imperfections: the hesitation that turns into laughter, the searching for a phrase that leads to a new discovery, the quiet thrill of being genuinely understood by someone across the table.

Across the historic libraries of Oxford, the street vendors of Camden, and the rainy avenues of Westminster, the English tongue has continuously evolved through centuries of poetry, theatre, philosophy, and everyday encounters. Every accent carries history; every idiom tells a story of how people chose to connect. When you learn with genuine human care and patience, grammar stops feeling like an obstacle and becomes an open invitation.

"Fancy a cuppa? Let's have a chat." Because fluency is not a race to sound like a machine; it is the courage to share who you are in another language. Here, with every spoken word, you build confidence, discover nuances of culture, and realise that English is not just a skill to put on a resume—it is a bridge to the wider world, built one honest conversation at a time.`;

export const TypewriterBackground: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Respect reduced motion: display full story immediately
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
        // When finished, keep the text fully visible permanently (do NOT erase quickly!)
        clearInterval(interval);
      }
    }, 22);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Full-width, full-height Typewriter Canvas covering sides, top and bottom */}
      <div className="absolute inset-0 p-4 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
        <div className="w-full h-full">
          <div className="font-mono text-xs sm:text-sm md:text-[15px] leading-relaxed md:leading-loose tracking-wide text-british-camel/15 sm:text-british-camel/20 whitespace-pre-line text-justify break-words">
            {displayedText}
            <span className="inline-block w-2 sm:w-2.5 h-3.5 sm:h-4 bg-british-camel/50 ml-1 animate-pulse align-middle" />
          </div>
        </div>
      </div>

      {/* Subtle top and bottom fades so it integrates seamlessly with adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-british-blue to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-british-blue to-transparent pointer-events-none" />
    </div>
  );
};
