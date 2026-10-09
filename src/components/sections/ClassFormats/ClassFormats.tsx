import React, { useState } from 'react';
import { classFormats } from '../../../content/lessons';
import { siteConfig } from '../../../content/site';
import { Laptop, Coffee, UserCheck, Users, Check, ArrowRight, MapPin } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';

const iconMap = {
  Laptop,
  Coffee,
  UserCheck,
  Users,
};

export const ClassFormats: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('online');

  return (
    <section
      id="modalidades"
      className="py-24 sm:py-32 bg-british-cream-light text-british-blue relative border-y border-british-blue/10 overflow-hidden"
      aria-label="Formatos e modalidades de aula"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue">Your Class, Your Way</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-blue tracking-tight">
            Your pace. <span className="italic font-serif text-british-red">Your place.</span>
          </h2>
          <p className="text-base sm:text-lg text-british-blue/80 leading-relaxed max-w-2xl mx-auto font-medium">
            Um jeito de aprender que cabe na sua rotina e respeita o que você precisa.
          </p>
        </div>

        {/* 4 Class Formats Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classFormats.map((format, index) => {
            const IconComponent = iconMap[format.icon as keyof typeof iconMap] || Laptop;
            const isActive = activeCardId === format.id;

            return (
              <div
                key={format.id}
                onClick={() => setActiveCardId(format.id)}
                className={`group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isActive
                    ? 'bg-white shadow-editorial border-british-red ring-2 ring-british-red/20 -translate-y-1'
                    : 'bg-white/80 hover:bg-white shadow-card border-british-blue/10 hover:shadow-card-hover'
                }`}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCardId(format.id);
                  }
                }}
              >
                <div>
                  {/* Top card bar with number and tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-british-camel">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-mono uppercase bg-british-blue/5 text-british-blue px-2.5 py-1 rounded-full font-semibold">
                      {format.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                        isActive
                          ? 'bg-british-red text-british-cream'
                          : 'bg-british-blue/5 text-british-blue group-hover:bg-british-red/10 group-hover:text-british-red'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-british-blue mb-1">
                      {format.title}
                    </h3>
                    <p className="text-xs font-mono text-british-camel font-semibold">
                      {format.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-british-blue/80 leading-relaxed mb-6">
                    {format.description}
                  </p>

                  {/* Bullet Benefits List */}
                  <ul className="space-y-2.5 pt-4 border-t border-british-blue/10 text-xs text-british-blue/75">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-british-red shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* In-Person location note if applicable */}
                  {format.id === 'in-person' && (
                    <div className="mt-4 pt-3 border-t border-dashed border-british-blue/10 flex items-start gap-2 text-[11px] text-british-grey">
                      <MapPin className="w-3.5 h-3.5 text-british-camel shrink-0 mt-0.5" />
                      <span>{siteConfig.contacts.locationPresencial}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-4">
                  <a
                    href="#contato"
                    className={`inline-flex items-center justify-between w-full text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-british-red text-british-cream'
                        : 'bg-british-cream text-british-blue hover:bg-british-red/10'
                    }`}
                  >
                    <span>Quero este formato</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-british-blue/10 shadow-sm max-w-xl mx-auto">
            <span className="text-sm font-semibold text-british-blue">
              Ainda em dúvida sobre qual formato combina com você?
            </span>
            <a href="#contato">
              <Button variant="primary" size="sm">
                Encontre seu jeito de aprender
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
