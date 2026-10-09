import React, { useState } from 'react';
import { commonMistakes } from '../../../content/mistakes';
import { Badge } from '../../ui/Badge';
import { Check, X, RotateCw, Sparkles } from 'lucide-react';

export const CommonMistakes: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="py-24 sm:py-32 bg-british-cream text-british-blue relative overflow-hidden"
      aria-label="Erros comuns de brasileiros no inglês"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="red">Things Brazilians Actually Say</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-blue tracking-tight">
            Sounds right. <span className="italic font-serif text-british-red">But is it?</span>
          </h2>
          <p className="text-base sm:text-lg text-british-blue/80 leading-relaxed font-medium">
            Pequenos ajustes que fazem uma diferença enorme na sua confiança. Clique nos cartões para descobrir!
          </p>
        </div>

        {/* 6 Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonMistakes.map((card, index) => {
            const isFlipped = !!flippedCards[card.id];

            return (
              <div
                key={card.id}
                onClick={() => toggleCard(card.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(card.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isFlipped}
                className="group h-[340px] perspective cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red rounded-2xl"
              >
                <div
                  className={`relative w-full h-full duration-500 rounded-2xl transition-all shadow-card group-hover:shadow-card-hover border border-british-blue/10 p-6 flex flex-col justify-between ${
                    isFlipped
                      ? 'bg-gradient-to-br from-british-blue to-british-blue-dark text-british-cream'
                      : 'bg-white text-british-blue'
                  }`}
                >
                  {/* Card Front State (Common Habit) */}
                  {!isFlipped ? (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs text-british-camel font-bold">
                            0{index + 1}
                          </span>
                          <span className="text-[10px] font-mono uppercase bg-british-red/10 text-british-red px-2 py-0.5 rounded-full font-semibold">
                            {card.category}
                          </span>
                        </div>

                        <span className="text-xs font-mono uppercase text-british-grey block mb-2">
                          {card.translationOrContext}
                        </span>

                        <div className="my-4 p-4 rounded-xl bg-british-red/5 border border-british-red/20">
                          <div className="flex items-center gap-1.5 text-xs text-british-red font-bold uppercase tracking-wider mb-1.5">
                            <X className="w-4 h-4" />
                            <span>Como costumam falar:</span>
                          </div>
                          <p className="font-serif font-bold text-xl text-british-blue">
                            "{card.incorrect}"
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-british-blue/10 flex items-center justify-between text-xs text-british-red font-medium">
                        <span className="flex items-center gap-1.5">
                          <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                          <span>Clique para ver o jeito natural</span>
                        </span>
                        <span className="font-mono text-[11px] bg-british-cream px-2 py-0.5 rounded text-british-blue">
                          Virar
                        </span>
                      </div>
                    </>
                  ) : (
                    /* Card Back State (Natural Real English & Teacher's Tip) */
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs text-british-camel font-bold">
                            0{index + 1} • Correção
                          </span>
                          <span className="text-[10px] font-mono uppercase bg-british-camel/20 text-british-camel px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>Natural</span>
                          </span>
                        </div>

                        <div className="mb-4 p-3.5 rounded-xl bg-british-cream/10 border border-british-camel/30">
                          <div className="flex items-center gap-1.5 text-xs text-british-camel font-bold uppercase tracking-wider mb-1">
                            <Check className="w-4 h-4" />
                            <span>O jeito certo &amp; natural:</span>
                          </div>
                          <p className="font-serif font-black text-xl text-british-cream">
                            "{card.correct}"
                          </p>
                        </div>

                        <p className="text-xs text-british-cream/85 leading-relaxed mb-3">
                          {card.explanation}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-british-cream/15 flex items-center justify-between text-[11px] text-british-camel">
                        <span className="flex items-center gap-1 italic">
                          <Sparkles className="w-3 h-3" />
                          <span>{card.tip}</span>
                        </span>
                        <RotateCw className="w-3 h-3 text-british-cream/60 shrink-0 ml-2" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Card Bottom Banner */}
        <div className="mt-14 max-w-2xl mx-auto bg-british-camel/15 border border-british-camel/40 rounded-2xl p-5 text-center">
          <p className="font-serif italic text-base sm:text-lg text-british-blue font-semibold">
            "Todo mundo já cometeu esses deslizes. O segredo é ter alguém paciente para te mostrar o caminho sem vergonha nenhuma!"
          </p>
          <span className="text-xs font-mono text-british-grey mt-1 block">
            — Teacher Gui
          </span>
        </div>
      </div>
    </section>
  );
};
