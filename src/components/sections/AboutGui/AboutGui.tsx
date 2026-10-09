import React from 'react';
import { siteConfig } from '../../../content/site';
import { Heart, Coffee, Sparkles, MessageCircle, Quote, BookOpen, Brain, Globe, GraduationCap, Clock } from 'lucide-react';
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
        {/* Top Part: Portrait & Welcome Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
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
                  <Badge variant="stamp">8 Anos de Experiência</Badge>
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
                      <p className="text-xs font-mono uppercase tracking-vintage text-british-camel font-semibold">
                        Guilherme • English Tutor
                      </p>

                      <div className="mt-5 pt-4 border-t border-british-cream/20 text-xs text-british-cream/80 max-w-[240px] italic font-serif">
                        "Ensinar é construir uma ponte de confiança entre duas pessoas."
                      </div>
                    </>
                  )}

                  {/* Corner Ribbon */}
                  <div className="absolute top-4 right-4 bg-british-red text-british-cream text-[10px] font-mono uppercase tracking-vintage px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <TeaCupIcon className="w-3 h-3 text-british-camel" />
                    <span>Warm &amp; Human</span>
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
                  Paciência e atenção ao seu ritmo, sem qualquer julgamento de sotaque.
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
              <a href="#trajetoria">
                <Button variant="ghost" size="md" className="w-full sm:w-auto">
                  Conhecer a trajetória do Gui ↓
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Second Part: Rich Biographical Story & The 8 Years of Teaching */}
        <div id="trajetoria" className="pt-12 border-t-2 border-british-blue/10">
          {/* Header of Story */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="font-mono text-xs uppercase tracking-vintage text-british-camel font-bold bg-british-camel/15 px-3 py-1 rounded-full border border-british-camel/30">
              A Trajetória do Professor
            </span>
            <h3 className="font-serif font-black text-3xl sm:text-4xl text-british-blue tracking-tight">
              A paixão por idiomas começou cedo. <br />
              <span className="italic font-serif text-british-red">E ensinar virou vocação de vida.</span>
            </h3>
            <p className="text-base text-british-blue/80 leading-relaxed max-w-2xl mx-auto">
              Muito antes de se tornar professor profissional, o Gui já vivia cercado por livros, dicionários e letras de músicas britânicas.
            </p>
          </div>

          {/* Narrative Editorial Card with The Adolescent Origin & 8 Years */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-editorial border border-british-blue/10 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-british-blue/85 text-base sm:text-lg leading-relaxed">
                <h4 className="font-serif font-bold text-2xl text-british-blue">
                  Das primeiras aulas na adolescência a 8 anos dedicados à educação
                </h4>
                <p>
                  O fascínio pelos idiomas não surgiu num cursinho tradicional: <strong className="text-british-blue font-semibold">nasceu na adolescência</strong>, quando o Gui descobriu que cada língua carrega uma forma única de sentir o mundo, fazer piadas e expressar sentimentos.
                </p>
                <p>
                  Ainda muito jovem, começou a dar suas primeiras aulas para amigos e colegas que tinham dificuldade. Percebeu ali algo que carrega até hoje: <span className="italic font-serif text-british-red font-medium">quando você ensina sem soberba e com paciência genuína, o medo do outro desaparece.</span>
                </p>
                <p className="text-base text-british-blue/80 bg-british-cream/70 p-4 rounded-xl border-l-4 border-british-camel">
                  Hoje, com <strong>8 anos de atuação como professor de Inglês, Português, Filosofia e Sociologia</strong>, o Guilherme combina o rigor linguístico com uma sensibilidade humana rara na educação de idiomas.
                </p>
              </div>

              {/* Stats & Pillars Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-british-blue via-british-blue to-british-blue-dark text-british-cream p-7 sm:p-8 rounded-2xl shadow-xl border border-british-camel/30">
                <span className="text-xs font-mono uppercase tracking-vintage text-british-camel font-bold block mb-4">
                  Repertório &amp; Bagagem Docente
                </span>

                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-british-cream/15">
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-british-camel" />
                      <span className="font-serif font-black text-3xl text-british-cream">8+</span>
                    </div>
                    <span className="text-xs text-british-cream/70 font-mono mt-0.5 block">
                      Anos Lecionando
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-british-camel" />
                      <span className="font-serif font-black text-3xl text-british-cream">4</span>
                    </div>
                    <span className="text-xs text-british-cream/70 font-mono mt-0.5 block">
                      Disciplinas Conectadas
                    </span>
                  </div>
                </div>

                <div className="pt-5 space-y-3">
                  <span className="text-xs font-mono uppercase text-british-camel block">
                    Por que isso muda a sua aula de inglês?
                  </span>
                  <p className="text-xs text-british-cream/80 leading-relaxed">
                    Você nunca fica preso a diálogos artificiais sobre "comprar pão". As conversas têm conteúdo real, reflexão sobre a vida, cinema, música, sociedade e cultura britânica viva.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Interdisciplinary Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: English */}
            <div className="bg-white p-6 rounded-2xl border border-british-blue/10 shadow-xs hover:shadow-card hover:border-british-red/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-british-red/10 text-british-red flex items-center justify-center mb-4">
                <BritishFlagIcon className="w-5 h-3" />
              </div>
              <h4 className="font-serif font-bold text-lg text-british-blue mb-2">
                Inglês Britânico
              </h4>
              <p className="text-xs text-british-grey leading-relaxed">
                Foco no ritmo, pronúncia nítida, expressões coloquiais do Reino Unido e elegância sem formalismos exagerados.
              </p>
            </div>

            {/* Pillar 2: Portuguese */}
            <div className="bg-white p-6 rounded-2xl border border-british-blue/10 shadow-xs hover:shadow-card hover:border-british-camel/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-british-camel/15 text-british-camel-dark flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-british-blue mb-2">
                Língua Portuguesa
              </h4>
              <p className="text-xs text-british-grey leading-relaxed">
                Por dominar nossa língua materna, ele sabe com precisão cirúrgica onde a mente brasileira costuma travar ao formular frases em inglês.
              </p>
            </div>

            {/* Pillar 3: Philosophy */}
            <div className="bg-white p-6 rounded-2xl border border-british-blue/10 shadow-xs hover:shadow-card hover:border-british-blue/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-british-blue/10 text-british-blue flex items-center justify-center mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-british-blue mb-2">
                Filosofia &amp; Ideias
              </h4>
              <p className="text-xs text-british-grey leading-relaxed">
                Pensamento crítico, argumentação e questionamentos instigantes. Suas conversas em aula ganham profundidade e repertório real.
              </p>
            </div>

            {/* Pillar 4: Sociology */}
            <div className="bg-white p-6 rounded-2xl border border-british-blue/10 shadow-xs hover:shadow-card hover:border-british-red/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-british-red/10 text-british-red flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-british-blue mb-2">
                Sociologia &amp; Cultura
              </h4>
              <p className="text-xs text-british-grey leading-relaxed">
                Compreensão dos costumes, do humor e das relações sociais britânicas. O idioma ganha contexto vivo e significado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
