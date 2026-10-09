import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, MessageSquare, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { BritishFlagIcon, TeaCupIcon } from '../../ui/Icons';

const naturalResponses = [
  {
    text: "Not bad!",
    translation: "Nada mal!",
    note: "Muito comum quando o dia está correndo tranquilo.",
    guiReaction: "Clássica! Mostra naturalidade sem formalidade exagerada.",
  },
  {
    text: "Pretty good, thanks!",
    translation: "Muito bem, valeu!",
    note: "Positiva e acolhedora, ótima para começar uma conversa.",
    guiReaction: "Excelente! Soa amigável e abre espaço para continuar.",
  },
  {
    text: "Can't complain!",
    translation: "Não posso reclamar!",
    note: "Super britânica, expressa bom humor sutil.",
    guiReaction: "Adoro essa! Os britânicos usam no dia a dia com um sorrisinho.",
  },
  {
    text: "A bit tired, but alright!",
    translation: "Um pouco cansado, mas tudo bem!",
    note: "Honesta e humana, ótima para colegas e amigos.",
    guiReaction: "Perfeita! Inglês real é falar a verdade com confiança.",
  },
];

export const Hero: React.FC = () => {
  const [selectedResponseIndex, setSelectedResponseIndex] = useState(0);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dialogueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP cinematic intro for Hero
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });

      gsap.from('.hero-fade-in', {
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.2,
      });

      gsap.from(dialogueRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.4)',
        delay: 0.4,
      });
    }, heroRef);

    // Progressive simulated conversation cycle
    const timer1 = setTimeout(() => setStep(2), 1200);
    const timer2 = setTimeout(() => setStep(3), 2400);

    return () => {
      ctx.revert();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleSelectAlternative = (index: number) => {
    setSelectedResponseIndex(index);
  };

  return (
    <section
      ref={heroRef}
      className="relative bg-british-red text-british-cream overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32"
      aria-label="Introdução do Teacher Gui"
    >
      {/* Decorative Geometric Elements & Union Jack Silhouette */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-red-pattern" />
      <div
        className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-4 border-british-cream/20 pointer-events-none opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 bottom-10 w-72 h-72 rounded-full border border-british-camel/30 pointer-events-none opacity-20"
        aria-hidden="true"
      />

      {/* Floating editorial badges */}
      <div className="hidden lg:block absolute top-20 right-16 rotate-6 z-10 pointer-events-none">
        <div className="bg-british-cream/15 backdrop-blur-md border border-british-cream/25 rounded-2xl p-3 shadow-lg flex items-center gap-2.5 text-xs font-mono">
          <TeaCupIcon className="w-4 h-4 text-british-camel" />
          <span>Fancy a cuppa? 🫖</span>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-24 left-10 -rotate-3 z-10 pointer-events-none">
        <div className="bg-british-blue/70 backdrop-blur-md border border-british-camel/40 rounded-2xl p-3 shadow-lg flex items-center gap-2 text-xs font-mono text-british-cream">
          <Sparkles className="w-4 h-4 text-british-camel" />
          <span>Real English. Real Connection.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-7">
            {/* Stamp Tag */}
            <div className="hero-fade-in flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 bg-british-cream/15 border border-british-cream/30 text-british-cream text-xs font-mono font-bold tracking-vintage uppercase px-3 py-1.5 rounded-full">
                <BritishFlagIcon className="w-4 h-2.5 rounded-xs" />
                <span>British English • Sem Pressão</span>
              </span>
              <Badge variant="stamp">Aulas Online &amp; Presenciais</Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1
                ref={titleRef}
                className="font-serif font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.08] text-british-cream text-balance"
              >
                Your English <br />
                <span className="italic font-serif text-british-camel">starts here.</span>
              </h1>
              <p className="hero-fade-in text-lg sm:text-xl text-british-cream/90 font-medium leading-relaxed max-w-xl">
                Você não precisa saber todas as palavras para começar a conversar. Precisa de confiança, prática e alguém que te ajude pelo caminho.
              </p>
            </div>

            {/* Complementary explanation */}
            <p className="hero-fade-in text-sm sm:text-base text-british-cream/80 leading-relaxed max-w-lg border-l-2 border-british-camel/60 pl-4 py-1">
              Aulas de inglês com o <strong className="text-british-cream font-bold">Teacher Gui</strong>. Online ou presenciais. Individuais ou em dupla. No seu ritmo, do seu jeito.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-fade-in flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#contato">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-xl group">
                  <span>Quero começar minhas aulas</span>
                  <span className="group-hover:translate-x-1 transition-transform ml-1">→</span>
                </Button>
              </a>
              <a href="#sobre">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Conhecer o Teacher Gui
                </Button>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="hero-fade-in pt-4 flex flex-wrap items-center gap-6 text-xs text-british-cream/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-british-camel" />
                <span>Zero julgamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-british-camel" />
                <span>Foco em conversa real</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-british-camel" />
                <span>Acompanhamento próximo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real-Life Dialogue Experience */}
          <div className="lg:col-span-5" ref={dialogueRef}>
            <div className="bg-british-cream text-british-blue rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-british-cream/90 relative">
              {/* Dialogue Header */}
              <div className="flex items-center justify-between border-b border-british-blue/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-british-red text-british-cream font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                    TG
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-british-blue">Teacher Gui</h3>
                    <div className="flex items-center gap-1.5 text-xs text-british-grey">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span>Online • Praticando agora</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono uppercase bg-british-blue/5 text-british-blue px-2 py-1 rounded">
                  <MessageSquare className="w-3 h-3 text-british-red" />
                  <span>Diálogo Didático</span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-4 mb-6" aria-live="polite">
                {/* Bubble 1: Teacher Gui asks */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-british-red text-british-cream font-serif text-xs flex items-center justify-center shrink-0 mt-1">
                    TG
                  </div>
                  <div className="bg-british-blue text-british-cream p-3.5 rounded-2xl rounded-tl-xs shadow-xs max-w-[85%]">
                    <p className="text-xs font-mono text-british-camel mb-0.5">Gui:</p>
                    <p className="text-sm font-semibold">"How are you today?"</p>
                    <p className="text-[11px] text-british-cream/70 mt-1">
                      (Como você está hoje?)
                    </p>
                  </div>
                </div>

                {/* Bubble 2: Standard response */}
                {step >= 2 && (
                  <div className="flex items-start justify-end gap-2.5 animate-fadeIn">
                    <div className="bg-british-red/10 border border-british-red/20 text-british-blue p-3.5 rounded-2xl rounded-tr-xs max-w-[85%] text-right">
                      <p className="text-xs font-mono text-british-red mb-0.5">Resposta do livro:</p>
                      <p className="text-sm font-semibold">"I'm fine, thanks. And you?"</p>
                      <p className="text-[11px] text-british-grey mt-0.5">
                        (Funciona, mas quase todo mundo repete no piloto automático!)
                      </p>
                    </div>
                  </div>
                )}

                {/* Bubble 3: Gui prompts natural choices */}
                {step >= 3 && (
                  <div className="flex items-start gap-2.5 animate-fadeIn">
                    <div className="w-7 h-7 rounded-full bg-british-red text-british-cream font-serif text-xs flex items-center justify-center shrink-0 mt-1">
                      TG
                    </div>
                    <div className="bg-british-cream-light border border-british-blue/15 text-british-blue p-3.5 rounded-2xl rounded-tl-xs shadow-xs max-w-[90%]">
                      <p className="text-xs font-bold text-british-red mb-1">
                        Olha como soa mais natural no dia a dia:
                      </p>
                      <p className="text-xs text-british-blue/80 mb-3">
                        Clique em uma das opções abaixo para testar:
                      </p>

                      {/* Interactive Choices */}
                      <div className="grid grid-cols-1 gap-2">
                        {naturalResponses.map((res, idx) => (
                          <button
                            key={res.text}
                            onClick={() => handleSelectAlternative(idx)}
                            className={`text-left p-2.5 rounded-xl border text-xs font-medium transition-all ${
                              selectedResponseIndex === idx
                                ? 'bg-british-red text-british-cream border-british-red shadow-sm'
                                : 'bg-white hover:bg-british-cream border-british-blue/15 text-british-blue'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm">"{res.text}"</span>
                              <span
                                className={`text-[10px] font-mono ${
                                  selectedResponseIndex === idx
                                    ? 'text-british-camel'
                                    : 'text-british-grey'
                                }`}
                              >
                                {res.translation}
                              </span>
                            </div>
                            <p
                              className={`text-[11px] mt-1 ${
                                selectedResponseIndex === idx
                                  ? 'text-british-cream/90'
                                  : 'text-british-grey'
                              }`}
                            >
                              {res.note}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic feedback from Gui */}
              <div className="bg-british-blue/5 border border-british-blue/10 rounded-xl p-3.5 flex items-start gap-2.5">
                <RefreshCw className="w-4 h-4 text-british-camel shrink-0 mt-0.5" />
                <div className="text-xs text-british-blue leading-relaxed">
                  <span className="font-bold text-british-red block mb-0.5">
                    Dica do Teacher Gui:
                  </span>
                  {naturalResponses[selectedResponseIndex].guiReaction}
                  <span className="block text-[11px] text-british-grey italic mt-1">
                    Não existe uma única resposta certa. Existe a resposta que combina com você e com a conversa.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 text-center">
          <a
            href="#sobre"
            className="inline-flex flex-col items-center gap-1.5 text-xs text-british-cream/70 hover:text-british-cream transition-colors group focus-visible:outline-none"
            aria-label="Rolar para a seção Conhecer o Teacher Gui"
          >
            <span className="font-mono uppercase tracking-vintage text-[10px]">
              Descobrir mais
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-british-camel group-hover:text-british-cream" />
          </a>
        </div>
      </div>
    </section>
  );
};
