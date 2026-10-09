import React from 'react';
import { lifeBenefits } from '../../../content/benefits';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { Compass, CalendarClock, Smile, HeartHandshake, ArrowRight } from 'lucide-react';

const iconMap = {
  Compass,
  CalendarClock,
  Smile,
  HeartHandshake,
};

export const Benefits: React.FC = () => {
  return (
    <section
      className="py-24 sm:py-32 bg-british-cream-light text-british-blue relative border-t border-british-blue/10 overflow-hidden"
      aria-label="Benefícios das aulas com Teacher Gui"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue">Lessons That Fit Your Life</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-blue tracking-tight">
            Make English <br />
            <span className="italic font-serif text-british-red">part of your life.</span>
          </h2>
          <p className="text-base sm:text-lg text-british-blue/80 leading-relaxed font-medium">
            Não importa se você está começando agora, retomando os estudos ou querendo conversar com mais confiança.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifeBenefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap] || Compass;

            return (
              <div
                key={benefit.id}
                className="bg-white rounded-2xl p-7 border border-british-blue/10 shadow-card hover:shadow-editorial hover:border-british-red/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-british-camel">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-british-camel/15 text-british-camel-dark px-2.5 py-0.5 rounded-full font-bold">
                      {benefit.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-british-red/10 text-british-red flex items-center justify-center mb-4 group-hover:bg-british-red group-hover:text-british-cream transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-british-blue mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-british-blue/80 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-british-blue/10 text-xs font-medium text-british-camel-dark">
                  ✓ {benefit.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#contato">
            <Button variant="primary" size="lg" className="shadow-editorial-red gap-2">
              <span>Vamos conversar sobre suas aulas?</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
