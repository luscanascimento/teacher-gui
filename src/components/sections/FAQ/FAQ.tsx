import React, { useState } from 'react';
import { faqItems } from '../../../content/faq';
import { Badge } from '../../ui/Badge';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../../lib/utils';
import { Button } from '../../ui/Button';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'zero-english': true, // First question open by default
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-british-cream text-british-blue relative overflow-hidden"
      aria-label="Perguntas frequentes"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="red">Frequently Asked Questions</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-blue tracking-tight">
            Got questions? <br />
            <span className="italic font-serif text-british-red">No worries.</span>
          </h2>
          <p className="text-base sm:text-lg text-british-blue/80 leading-relaxed font-medium">
            Respostas diretas e honestas sobre como funcionam os encontros com o Teacher Gui.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" role="region" aria-label="Lista de dúvidas frequentes">
          {faqItems.map((item, index) => {
            const isOpen = !!openIds[item.id];

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-british-blue/10 shadow-xs transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-british-camel shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-serif font-bold text-lg sm:text-xl text-british-blue">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-british-grey shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-british-red' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 animate-fadeIn"
                  >
                    <div className="pt-2 border-t border-british-blue/5">
                      <p className="text-sm sm:text-base text-british-blue/80 leading-relaxed mb-3">
                        {item.answer}
                      </p>
                      {item.highlight && (
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-british-camel-dark bg-british-camel/15 px-3 py-1 rounded-full font-medium">
                          <span>💡 {item.highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-14 bg-white/70 border border-british-blue/10 rounded-2xl p-6 sm:p-8 text-center max-w-xl mx-auto shadow-xs">
          <HelpCircle className="w-8 h-8 text-british-camel mx-auto mb-3" />
          <h3 className="font-serif font-bold text-lg text-british-blue mb-1">
            Ficou com alguma dúvida que não está aqui?
          </h3>
          <p className="text-xs sm:text-sm text-british-grey mb-5">
            Sem problemas! O Teacher Gui responde suas dúvidas com o maior carinho.
          </p>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="text-british-blue border-british-blue/30 hover:bg-british-blue hover:text-british-cream gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Tirar dúvida no WhatsApp</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
