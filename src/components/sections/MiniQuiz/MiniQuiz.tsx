import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../../../content/quiz';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { TeaCupIcon } from '../../ui/Icons';
import { CheckCircle2, AlertCircle, Sparkles, MessageCircle, ArrowRight, RotateCcw } from 'lucide-react';

export const MiniQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const question = quizQuestions[currentQuestionIndex];
  const selectedOption = question.options.find((opt) => opt.id === selectedOptionId);

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
    setHasSubmitted(true);

    const option = question.options.find((opt) => opt.id === optionId);
    if (option?.isCorrect) {
      try {
        confetti({
          particleCount: 55,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#9E2A2B', '#DDA15E', '#1C2A39', '#F4F1EA'],
        });
      } catch {
        // Safe fallback if canvas not available
      }
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  const handleNextQuestion = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  return (
    <section
      id="quiz"
      className="py-24 sm:py-32 bg-british-red text-british-cream relative overflow-hidden"
      aria-label="Mini-Quiz interativo de inglês britânico"
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-red-pattern" />
      <div
        className="absolute -right-20 bottom-10 w-80 h-80 rounded-full border border-british-cream/20 pointer-events-none opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <Badge variant="cream">Interactive Challenge</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-cream tracking-tight">
            Fancy a little <span className="italic font-serif text-british-camel">challenge?</span>
          </h2>
          <p className="text-base sm:text-lg text-british-cream/90 leading-relaxed font-medium">
            Descubra como você se sairia em uma situação real nas ruas de Londres. Sem cadastro e sem pegadinhas!
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-british-cream text-british-blue rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-british-cream/90">
          {/* Question Meta Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-british-blue/10">
            <div className="flex items-center gap-2">
              <TeaCupIcon className="w-5 h-5 text-british-red" />
              <span className="font-mono text-xs uppercase tracking-vintage font-bold text-british-camel">
                Cenário 0{currentQuestionIndex + 1} de {quizQuestions.length}
              </span>
            </div>
            <span className="text-[11px] font-mono bg-british-red/10 text-british-red px-2.5 py-1 rounded-full font-semibold">
              Cotidiano Real
            </span>
          </div>

          {/* Scenario & Prompt */}
          <div className="mb-8">
            <span className="text-xs font-mono uppercase text-british-grey block mb-1">
              {question.scenario}
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-british-blue leading-snug">
              {question.prompt}
            </h3>
            <p className="text-xs text-british-grey mt-2 italic">
              Contexto: {question.context}
            </p>
          </div>

          {/* Options Grid */}
          <div className="space-y-3 mb-8" role="radiogroup" aria-label="Opções de resposta">
            {question.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedOptionId === opt.id;

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={hasSubmitted}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? opt.isCorrect
                        ? 'bg-green-50 border-green-600 text-green-950 shadow-md'
                        : 'bg-red-50 border-british-red text-british-blue shadow-md'
                      : 'bg-white hover:bg-british-cream/80 border-british-blue/15 text-british-blue'
                  } ${hasSubmitted && !isSelected ? 'opacity-60' : ''}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-green-600 text-white'
                            : 'bg-british-red text-white'
                          : 'bg-british-blue/10 text-british-blue'
                      }`}
                    >
                      {letter}
                    </span>
                    <span className="font-serif font-semibold text-base sm:text-lg">
                      "{opt.text}"
                    </span>
                  </div>

                  {hasSubmitted && isSelected && (
                    <span className="shrink-0 ml-2">
                      {opt.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-british-red" />
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback Card after choice */}
          {hasSubmitted && selectedOption && (
            <div
              className={`rounded-2xl p-5 mb-8 animate-fadeIn border ${
                selectedOption.isCorrect
                  ? 'bg-green-50/90 border-green-300 text-green-950'
                  : 'bg-amber-50/90 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-british-red" />
                <span>{selectedOption.feedback}</span>
              </div>
              <p className="text-sm leading-relaxed mb-3">
                {selectedOption.toneExplanation}
              </p>
              <div className="pt-2 border-t border-black/10 text-xs italic text-british-grey">
                💡 {question.culturalInsight}
              </div>
            </div>
          )}

          {/* Quiz Footer Controls & Conversion Link */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-british-blue/10">
            {hasSubmitted ? (
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-mono text-british-grey hover:text-british-blue transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Tentar de novo</span>
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 bg-british-blue text-british-cream rounded-full text-xs font-semibold hover:bg-british-blue-dark transition-colors flex items-center gap-1.5"
                >
                  <span>Próximo desafio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <span className="text-xs text-british-grey italic">
                Escolha a opção que você falaria na hora!
              </span>
            )}

            {/* In-quiz Conversion CTA */}
            <div className="text-right w-full sm:w-auto">
              <a href="#contato">
                <Button variant="primary" size="sm" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Quero conversar com o Teacher Gui</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Motivational closure */}
        <div className="mt-8 text-center text-xs text-british-cream/80">
          <span>See? You're already learning! 🇬🇧 A cada aula, essas situações viram reflexo natural.</span>
        </div>
      </div>
    </section>
  );
};
