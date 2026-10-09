import React, { useState } from 'react';
import { britishFacts } from '../../../content/britishFacts';
import { BritishCuriosity } from '../../../types';
import { Badge } from '../../ui/Badge';
import { BritishFlagIcon, LondonUndergroundRoundel, TeaCupIcon } from '../../ui/Icons';
import { Sparkles } from 'lucide-react';
import { TypewriterBackground } from '../../ui/TypewriterBackground';

const categories: ('All' | BritishCuriosity['category'])[] = [
  'All',
  'British Culture',
  'Everyday Expressions',
  'British vs. American',
  'Useful Travel English',
];

export const BritishCulture: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFacts =
    selectedCategory === 'All'
      ? britishFacts
      : britishFacts.filter((f) => f.category === selectedCategory);

  return (
    <section
      id="cultura"
      className="py-24 sm:py-32 bg-british-blue text-british-cream relative overflow-hidden"
      aria-label="Cultura e curiosidades britânicas"
    >
      {/* Live typing background behind the section */}
      <TypewriterBackground />

      {/* Decorative background geometry */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-parchment-pattern" />
      <div
        className="absolute -left-20 top-20 w-80 h-80 rounded-full border border-british-camel/20 pointer-events-none opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2">
            <Badge variant="camel">British Culture &amp; Life</Badge>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-cream tracking-tight">
            More than tea <br />
            <span className="italic font-serif text-british-camel">&amp; biscuits. 🇬🇧</span>
          </h2>
          <p className="text-base sm:text-lg text-british-cream/80 leading-relaxed font-medium">
            Porque aprender inglês também é descobrir como as pessoas realmente vivem, pensam e se expressam na Terra da Rainha e do Rei.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar" role="tablist">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wide transition-all shrink-0 ${
                  isSelected
                    ? 'bg-british-camel text-british-blue shadow-md scale-105 font-bold'
                    : 'bg-british-blue-dark/80 text-british-cream/80 hover:bg-british-blue-dark hover:text-british-cream border border-british-blue-light/30'
                }`}
              >
                {cat === 'All' ? 'Todos os Tópicos' : cat}
              </button>
            );
          })}
        </div>

        {/* Cultural Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacts.map((fact) => (
            <div
              key={fact.id}
              className="bg-british-blue-dark/60 border border-british-blue-light/30 rounded-2xl p-6 flex flex-col justify-between hover:border-british-camel/50 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-british-blue-light/30">
                  <span className="text-[11px] font-mono uppercase tracking-vintage text-british-camel font-semibold">
                    {fact.category}
                  </span>
                  {fact.category === 'Useful Travel English' ? (
                    <LondonUndergroundRoundel className="w-6 h-6" label="TUBE" />
                  ) : fact.category === 'British Culture' ? (
                    <BritishFlagIcon className="w-5 h-3" />
                  ) : (
                    <TeaCupIcon className="w-4 h-4 text-british-camel" />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-british-cream mb-3 group-hover:text-british-camel transition-colors">
                  {fact.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-british-cream/80 leading-relaxed mb-4">
                  {fact.description}
                </p>

                {/* Example phrase if available */}
                {fact.examplePhrase && (
                  <div className="bg-british-cream/10 border-l-2 border-british-camel rounded-r-xl p-3 my-3">
                    <p className="font-serif font-bold text-sm text-british-cream">
                      "{fact.examplePhrase}"
                    </p>
                    <p className="text-xs text-british-camel font-mono mt-0.5">
                      {fact.exampleTranslation}
                    </p>
                  </div>
                )}

                {/* Vocabulary comparison table if available */}
                {fact.comparisonPairs && (
                  <div className="mt-4 pt-3 border-t border-british-blue-light/30">
                    <span className="text-[11px] font-mono uppercase text-british-camel/80 block mb-2">
                      Exemplos clássicos de vocabulário:
                    </span>
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 text-xs">
                      {fact.comparisonPairs.slice(0, 6).map((pair, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-british-cream/5 p-2 rounded border border-british-cream/5"
                        >
                          <span className="font-bold text-british-cream">
                            🇬🇧 {pair.british}
                          </span>
                          <span className="text-british-grey">vs</span>
                          <span className="font-medium text-british-cream/80">
                            🇺🇸 {pair.american}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Fun Fact Footer */}
              {fact.funFact && (
                <div className="mt-5 pt-3 border-t border-british-blue-light/20 flex items-start gap-2 text-xs text-british-camel/90 italic">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5 text-british-camel" />
                  <span>Curiosidade: {fact.funFact}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-british-blue-dark border border-british-camel/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LondonUndergroundRoundel className="w-10 h-10 shrink-0" label="WAY OUT" />
            <div>
              <h4 className="font-serif font-bold text-base text-british-cream">
                Quer mergulhar ainda mais na cultura britânica?
              </h4>
              <p className="text-xs text-british-cream/70">
                Nas aulas com o Gui, cada lição traz contextos culturais, gírias e histórias reais.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="shrink-0 bg-british-camel hover:bg-british-camel-light text-british-blue font-bold text-xs uppercase font-mono px-5 py-2.5 rounded-full transition-colors"
          >
            Começar Agora →
          </a>
        </div>
      </div>
    </section>
  );
};
