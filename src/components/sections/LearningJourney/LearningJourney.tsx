import React from 'react';
import { learningJourneySteps } from '../../../content/quiz';
import { Badge } from '../../ui/Badge';
import { Sparkles } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section
      className="py-24 sm:py-32 bg-british-cream text-british-blue relative overflow-hidden"
      aria-label="Jornada de aprendizado do Teacher Gui"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue">Your English Journey</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-blue tracking-tight">
            Small steps. <span className="italic font-serif text-british-red">Big conversations.</span>
          </h2>
          <p className="text-base sm:text-lg text-british-blue/80 leading-relaxed font-medium">
            Cada palavra nova é mais uma possibilidade de se expressar. Veja como a confiança se constrói passo a passo.
          </p>
        </div>

        {/* Vertical Stepper Timeline with London Station Aesthetic */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-british-red via-british-camel to-british-blue transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {learningJourneySteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Station Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-12 h-12 rounded-full bg-british-cream border-4 border-british-red flex items-center justify-center shadow-md font-mono font-black text-sm text-british-blue">
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card (Left or Right aligned on desktop) */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-12' : 'md:pr-12'
                    } w-full`}
                  >
                    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-british-blue/10 hover:shadow-editorial hover:border-british-red/30 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase tracking-vintage text-british-camel font-bold">
                          Estágio 0{index + 1}
                        </span>
                        <span className="text-[11px] font-mono bg-british-blue/5 text-british-blue px-2.5 py-0.5 rounded-full font-semibold">
                          Evolução Contínua
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-xl text-british-blue mb-2">
                        {step.title}
                      </h3>

                      {/* Quote highlight */}
                      <div className="bg-british-cream/80 border-l-4 border-british-red rounded-r-xl p-3 my-3">
                        <p className="font-serif italic font-bold text-base text-british-blue">
                          {step.quote}
                        </p>
                        <p className="text-xs font-mono text-british-grey mt-0.5">
                          {step.translation}
                        </p>
                      </div>

                      <p className="text-sm text-british-blue/80 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="pt-3 border-t border-british-blue/10 flex items-center gap-2 text-xs text-british-camel font-semibold">
                        <Sparkles className="w-4 h-4 text-british-red shrink-0" />
                        <span>Foco: {step.skillFocus}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Insight Note */}
        <div className="mt-16 max-w-2xl mx-auto text-center bg-white p-6 rounded-2xl border border-british-blue/10 shadow-xs">
          <p className="font-serif italic text-base sm:text-lg text-british-blue font-semibold mb-2">
            "O objetivo não é decorar todas as regras antes de abrir a boca. É ganhar as ferramentas e a confiança para continuar conversando."
          </p>
          <p className="text-xs text-british-grey">
            *A timeline representa uma evolução ilustrativa do processo pedagógico, respeitando sempre o ritmo individual de cada pessoa.
          </p>
        </div>
      </div>
    </section>
  );
};
