import React, { useState } from 'react';
import { comparisonExamples } from '../../../content/lessons';
import { Badge } from '../../ui/Badge';
import { Sparkles, Lightbulb } from 'lucide-react';
import { TeaCupIcon } from '../../ui/Icons';

export const RealEnglish: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentExample = comparisonExamples[selectedIndex];

  return (
    <section
      id="ingles-real"
      className="py-24 sm:py-32 bg-british-red text-british-cream relative overflow-hidden"
      aria-label="Inglês Real vs Inglês do Livro"
    >
      {/* Subtle British decorative watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-red-pattern" />
      <div
        className="absolute -right-32 top-1/4 w-96 h-96 rounded-full border-2 border-british-cream/20 pointer-events-none opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="cream">Real English vs. Textbook English</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-cream tracking-tight text-balance">
            English beyond <br />
            <span className="italic font-serif text-british-camel">the textbook.</span>
          </h2>
          <p className="text-base sm:text-lg text-british-cream/90 leading-relaxed font-medium">
            O livro ensina muita coisa. A conversa mostra como as pessoas realmente usam no dia a dia.
          </p>
        </div>

        {/* Interactive Scenario Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {comparisonExamples.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${item.id}`}
                onClick={() => setSelectedIndex(index)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-british-cream text-british-blue shadow-lg scale-105'
                    : 'bg-british-cream/15 text-british-cream hover:bg-british-cream/25 border border-british-cream/20'
                }`}
              >
                <span className="font-mono text-xs opacity-70">0{index + 1}</span>
                <span>{item.scenario}</span>
              </button>
            );
          })}
        </div>

        {/* Main Comparison Canvas */}
        <div
          id={`panel-${currentExample.id}`}
          role="tabpanel"
          className="bg-british-cream text-british-blue rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-british-cream/90 relative"
        >
          {/* Top Context Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-british-blue/10 pb-5 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-british-red text-british-cream flex items-center justify-center font-mono font-bold text-xs">
                0{selectedIndex + 1}
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-vintage text-british-grey block">
                  Cenário de Conversa
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-british-blue">
                  {currentExample.context}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono bg-british-blue/5 text-british-blue px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-british-red" />
              <span>Scroll &amp; Context Morphing</span>
            </div>
          </div>

          {/* Side-by-side or stacked Morphing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Card: Formal / Textbook */}
            <div className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-british-blue/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase bg-british-grey/15 text-british-grey px-2.5 py-1 rounded-full font-semibold">
                    {currentExample.formal.label}
                  </span>
                  <span className="text-xs text-british-grey">Correto, mas rígido</span>
                </div>

                <div className="my-6">
                  <p className="font-serif text-2xl sm:text-3xl text-british-grey/90 font-medium leading-snug line-through decoration-british-red/40 decoration-2">
                    "{currentExample.formal.phrase}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-british-blue/10 text-xs text-british-grey leading-relaxed">
                <span className="font-semibold block text-british-blue mb-1">Como você aprende no método clássico:</span>
                Frase gramaticalmente aceita, mas que quase ninguém usa em uma conversa descontraída na rua.
              </div>
            </div>

            {/* Right Card: Real Natural British English */}
            <div className="bg-gradient-to-br from-british-blue via-british-blue to-british-blue-dark text-british-cream rounded-2xl p-6 sm:p-8 border-2 border-british-camel/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-british-red/20 blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase bg-british-camel/20 text-british-camel px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5">
                    <TeaCupIcon className="w-3.5 h-3.5" />
                    <span>{currentExample.natural.label}</span>
                  </span>
                  <span className="text-xs text-british-camel font-medium">Como as pessoas realmente falam</span>
                </div>

                <div className="my-6">
                  <p className="font-serif font-black text-3xl sm:text-4xl text-british-cream leading-tight tracking-tight">
                    "{currentExample.natural.phrase}"
                  </p>
                  <p className="text-xs text-british-camel font-mono mt-3">
                    {currentExample.natural.note}
                  </p>
                </div>
              </div>

              {/* Natural Alternatives if any */}
              {currentExample.alternatives && currentExample.alternatives.length > 0 && (
                <div className="pt-4 border-t border-british-cream/15 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-vintage text-british-cream/70 block">
                    Outras formas que você vai ouvir muito:
                  </span>
                  {currentExample.alternatives.map((alt, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs bg-british-cream/10 p-2.5 rounded-lg">
                      <span className="font-bold text-british-cream">"{alt.phrase}"</span>
                      <span className="text-[11px] text-british-camel font-mono">{alt.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Cultural & Pedagogical Note */}
          <div className="mt-8 bg-british-camel/15 border border-british-camel/40 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
            <Lightbulb className="w-5 h-5 text-british-red shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-british-blue leading-relaxed">
              <span className="font-bold text-british-red block mb-0.5">
                O olhar do Teacher Gui:
              </span>
              {currentExample.culturalNote}
            </div>
          </div>

          {/* Quick navigation arrows */}
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-british-blue/10 text-xs font-medium text-british-grey">
            <button
              onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : comparisonExamples.length - 1))}
              className="hover:text-british-red transition-colors flex items-center gap-1"
            >
              ← Cenário anterior
            </button>
            <span className="font-mono">
              {selectedIndex + 1} de {comparisonExamples.length}
            </span>
            <button
              onClick={() => setSelectedIndex((prev) => (prev < comparisonExamples.length - 1 ? prev + 1 : 0))}
              className="hover:text-british-red transition-colors flex items-center gap-1"
            >
              Próximo cenário →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
