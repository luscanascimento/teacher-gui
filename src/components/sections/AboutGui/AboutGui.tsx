import React from 'react';
import { siteConfig } from '../../../content/site';
import { Heart, Coffee, Sparkles, MessageCircle, Quote } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { BritishFlagIcon, TeaCupIcon } from '../../ui/Icons';
import { buildWhatsAppLink } from '../../../lib/utils';

export const AboutGui: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-24 sm:py-32 bg-british-cream text-british-blue relative overflow-hidden"
      aria-label="Sobre o Teacher Gui"
    >
      {/* Decorative background lines & stamp */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-parchment-pattern" />
      <div
        className="absolute top-12 right-12 w-64 h-64 rounded-full border border-british-camel/30 pointer-events-none opacity-30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Scrapbook & Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing Card with British Red Border */}
              <div className="absolute -inset-3 sm:-inset-4 bg-british-red/10 rounded-3xl transform -rotate-2 border-2 border-dashed border-british-red/30 pointer-events-none" />

              {/* Main Portrait Frame Card */}
              <div className="relative bg-white rounded-2xl shadow-editorial p-6 sm:p-8 border border-british-blue/10">
                {/* Stamp & Badge on top */}
                <div className="flex items-center justify-between pb-4 border-b border-british-blue/10 mb-6">
                  <span className="text-xs font-mono uppercase tracking-vintage text-british-camel font-bold flex items-center gap-1.5">
                    <BritishFlagIcon className="w-4 h-2.5" />
                    <span>Teacher Profile</span>
                  </span>
                  <Badge variant="stamp">British Accent &amp; Culture</Badge>
                </div>

                {/* Teacher Photo / Stylized Editorial Portrait Placeholder */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-british-blue via-british-blue-dark to-british-red flex flex-col items-center justify-center p-6 text-center text-british-cream shadow-inner group">
                  {siteConfig.teacher.photoUrl ? (
                    <img
                      src={siteConfig.teacher.photoUrl}
                      alt="Fotografia do Teacher Gui"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <>
                      {/* Stylized Silhouette & British Monogram */}
                      <div className="w-24 h-24 rounded-full bg-british-cream/15 border-2 border-british-cream/30 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
                        <span className="font-serif font-black text-4xl text-british-cream tracking-tighter">
                          TG
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-2xl text-british-cream mb-1">
                        {siteConfig.teacher.nickname}
                      </h4>
                      <p className="text-xs font-mono uppercase tracking-vintage text-british-camel">
                        Guilherme • English Tutor
                      </p>

                      <div className="mt-5 pt-4 border-t border-british-cream/20 text-xs text-british-cream/80 max-w-[240px] italic font-serif">
                        "Ensinar inglês é construir uma ponte de confiança entre duas pessoas."
                      </div>
                    </>
                  )}

                  {/* Corner Ribbon */}
                  <div className="absolute top-4 right-4 bg-british-red text-british-cream text-[10px] font-mono uppercase tracking-vintage px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <TeaCupIcon className="w-3 h-3 text-british-camel" />
                    <span>Friendly &amp; Warm</span>
                  </div>
                </div>

                {/* Floating Note Card under photo */}
                <div className="mt-6 bg-british-cream p-4 rounded-xl border border-british-camel/40 relative">
                  <Quote className="w-5 h-5 text-british-camel/60 absolute -top-2.5 left-4 fill-current" />
                  <p className="font-serif italic text-sm text-british-blue font-medium pt-1">
                    "{siteConfig.teacher.quote}"
                  </p>
                  <p className="text-right text-[11px] font-mono text-british-grey mt-1">
                    — {siteConfig.teacher.signature}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="red">Meet Teacher Gui</Badge>
              <span className="text-xs font-mono text-british-grey">•</span>
              <span className="text-xs font-mono text-british-grey uppercase tracking-vintage">
                More than a teacher
              </span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-blue tracking-tight leading-tight">
              Meet Gui. <br />
              <span className="italic font-serif text-british-red">Your English mate.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-british-blue/85 leading-relaxed font-sans">
              <p>
                Aprender um idioma fica muito mais leve quando você se sente à vontade para <strong className="text-british-blue font-semibold">perguntar, tentar, errar e tentar de novo</strong>.
              </p>
              <p>
                Com o Teacher Gui, as aulas são um espaço para construir confiança, desenvolver habilidades e descobrir que o inglês pode fazer parte da sua rotina de verdade.
              </p>
              <p className="text-base text-british-blue/80 bg-white/70 p-4 rounded-xl border-l-4 border-british-red shadow-xs">
                Sem pressão para parecer perfeito. Com atenção ao seu desenvolvimento e espaço para comemorar cada pequena conquista.
              </p>
            </div>

            {/* Core Values Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-british-blue/10 shadow-xs">
                <Heart className="w-5 h-5 text-british-red mb-2" />
                <h3 className="font-bold text-sm text-british-blue mb-1">Acolhimento</h3>
                <p className="text-xs text-british-grey leading-relaxed">
                  Paciência e atenção ao seu ritmo, sem julgamentos de sotaque.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-british-blue/10 shadow-xs">
                <Coffee className="w-5 h-5 text-british-camel mb-2" />
                <h3 className="font-bold text-sm text-british-blue mb-1">Inglês da Vida Real</h3>
                <p className="text-xs text-british-grey leading-relaxed">
                  Expressões que os britânicos realmente usam nas ruas e no trabalho.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-british-blue/10 shadow-xs">
                <Sparkles className="w-5 h-5 text-british-blue mb-2" />
                <h3 className="font-bold text-sm text-british-blue mb-1">Confiança Total</h3>
                <p className="text-xs text-british-grey leading-relaxed">
                  A meta é conversar, se fazer entender e perder o medo de falar.
                </p>
              </div>
            </div>

            {/* CTA action to connect */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="md" className="w-full sm:w-auto gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Mandar um "Hello" para o Gui</span>
                </Button>
              </a>
              <a href="#modalidades">
                <Button variant="ghost" size="md" className="w-full sm:w-auto">
                  Ver como funcionam as aulas →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
