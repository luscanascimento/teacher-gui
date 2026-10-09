import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContactFormData } from '../../../types';
import { siteConfig } from '../../../content/site';
import { buildWhatsAppLink } from '../../../lib/utils';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { BritishFlagIcon, TeaCupIcon } from '../../ui/Icons';
import { MessageCircle, CheckCircle, Shield, ArrowRight, Sparkles } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Por favor, digite seu nome (mínimo 2 letras)'),
  whatsapp: z
    .string()
    .min(10, 'Digite um número de WhatsApp válido com DDD (ex: 12997880714)')
    .regex(/^[0-9\s()+-]+$/, 'Apenas números e caracteres de telefone'),
  modality: z.enum(['online', 'presencial'], {
    errorMap: () => ({ message: 'Escolha a modalidade desejada' }),
  }),
  format: z.enum(['particular', 'dupla'], {
    errorMap: () => ({ message: 'Escolha o formato de aula' }),
  }),
  level: z.enum(['iniciante', 'basico', 'intermediario', 'avancado', 'nao_sei'], {
    errorMap: () => ({ message: 'Indique seu nível percebido' }),
  }),
  goal: z.enum(['conversacao', 'trabalho', 'viagens', 'estudos', 'outro'], {
    errorMap: () => ({ message: 'Selecione seu principal objetivo' }),
  }),
  notes: z.string().optional(),
});

type ContactSchemaType = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      modality: 'online',
      format: 'particular',
      level: 'iniciante',
      goal: 'conversacao',
    },
  });

  const onSubmit = (data: ContactSchemaType) => {
    const link = buildWhatsAppLink(data as ContactFormData);
    setSubmittedLink(link);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-24 sm:py-32 bg-british-red text-british-cream relative overflow-hidden"
      aria-label="Formulário de contato e agendamento de aulas"
    >
      {/* Decorative Union Jack watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-red-pattern" />
      <div
        className="absolute -left-24 bottom-10 w-96 h-96 rounded-full border border-british-cream/20 pointer-events-none opacity-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Warm Narrative & Confidence Builders */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-2">
              <Badge variant="cream">Let's Talk!</Badge>
              <span className="text-xs font-mono text-british-cream/60">•</span>
              <span className="text-xs font-mono text-british-camel uppercase tracking-vintage">
                Conversa Sem Pressão
              </span>
            </div>

            <h2 className="font-serif font-black text-4xl sm:text-6xl text-british-cream tracking-tight leading-tight">
              Your next <br />
              <span className="italic font-serif text-british-camel">conversation</span> <br />
              starts here.
            </h2>

            <p className="text-lg text-british-cream/90 leading-relaxed font-medium">
              Talvez você ainda não saiba tudo o que quer dizer em inglês. Mas a gente pode começar com um simples <strong className="text-white font-bold">"Hello"</strong>.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-british-cream/10 p-4 rounded-xl border border-british-cream/15">
                <CheckCircle className="w-5 h-5 text-british-camel shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-british-cream/90">
                  <strong className="block font-semibold text-white">Atendimento pessoal com o Gui</strong>
                  Você fala diretamente com quem vai te dar aula, alinhando expectativas e rotina.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-british-cream/10 p-4 rounded-xl border border-british-cream/15">
                <TeaCupIcon className="w-5 h-5 text-british-camel shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-british-cream/90">
                  <strong className="block font-semibold text-white">Sem compromisso</strong>
                  Tire dúvidas, conheça o método e decida com total tranquilidade.
                </div>
              </div>
            </div>

            {/* Direct Channel Badges */}
            <div className="pt-4 border-t border-british-cream/20 flex flex-col gap-2 text-xs font-mono text-british-cream/80">
              <div className="flex items-center gap-2">
                <BritishFlagIcon className="w-4 h-2.5" />
                <span>WhatsApp Direto: {siteConfig.contacts.whatsappDisplay}</span>
              </div>
              <div>
                <a
                  href={siteConfig.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-british-camel transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram:</span>
                  <span className="text-white underline underline-offset-2">{siteConfig.contacts.instagramHandle}</span>
                </a>
              </div>
              <div>Presencial: {siteConfig.contacts.locationPresencial}</div>
            </div>
          </div>

          {/* Right Column: High-Conversion Validated Form */}
          <div className="lg:col-span-7">
            <div className="bg-british-cream text-british-blue rounded-3xl p-7 sm:p-10 shadow-2xl border-4 border-british-cream/90 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-british-blue/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-british-red" />
                  <h3 className="font-serif font-bold text-xl text-british-blue">
                    Conte um pouco sobre você
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-british-grey">
                  Preenchimento em 1 minuto
                </span>
              </div>

              {submittedLink && (
                <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-300 text-green-900 text-sm animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <Sparkles className="w-4 h-4 text-green-700" />
                    <span>Perfeito! Redirecionando para o WhatsApp...</span>
                  </div>
                  <p className="text-xs text-green-800 mb-2">
                    Caso a janela do WhatsApp não tenha aberto automaticamente, clique no botão abaixo:
                  </p>
                  <a
                    href={submittedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-xs bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir conversa no WhatsApp</span>
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name & WhatsApp Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-mono uppercase tracking-vintage text-british-blue font-bold mb-1.5"
                    >
                      Seu Nome *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      placeholder="Como você quer ser chamado?"
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white text-british-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-british-blue/15'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="form-whatsapp"
                      className="block text-xs font-mono uppercase tracking-vintage text-british-blue font-bold mb-1.5"
                    >
                      WhatsApp com DDD *
                    </label>
                    <input
                      id="form-whatsapp"
                      type="tel"
                      placeholder="(12) 99788-0714"
                      {...register('whatsapp')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white text-british-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red ${
                        errors.whatsapp ? 'border-red-500 bg-red-50/30' : 'border-british-blue/15'
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">
                        {errors.whatsapp.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Modality & Format Selection Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-modality"
                      className="block text-xs font-mono uppercase tracking-vintage text-british-blue font-bold mb-1.5"
                    >
                      Modalidade Preferida
                    </label>
                    <select
                      id="form-modality"
                      {...register('modality')}
                      className="w-full px-4 py-3 rounded-xl border border-british-blue/15 text-sm font-medium bg-white text-british-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red cursor-pointer"
                    >
                      <option value="online">Online (De onde estiver)</option>
                      <option value="presencial">Presencial (Sob consulta)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="form-format"
                      className="block text-xs font-mono uppercase tracking-vintage text-british-blue font-bold mb-1.5"
                    >
                      Formato de Aula
                    </label>
                    <select
                      id="form-format"
                      {...register('format')}
                      className="w-full px-4 py-3 rounded-xl border border-british-blue/15 text-sm font-medium bg-white text-british-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red cursor-pointer"
                    >
                      <option value="particular">Individual (One-to-One)</option>
                      <option value="dupla">Em dupla (Learn Together)</option>
                    </select>
                  </div>
                </div>

                {/* Level & Goal Selection Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-level"
                      className="block text-xs font-mono uppercase tracking-vintage text-british-blue font-bold mb-1.5"
                    >
                      Como você avalia seu nível?
                    </label>
                    <select
                      id="form-level"
                      {...register('level')}
                      className="w-full px-4 py-3 rounded-xl border border-british-blue/15 text-sm font-medium bg-white text-british-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red cursor-pointer"
                    >
                      <option value="iniciante">Iniciante do zero (Nunca estudei)</option>
                      <option value="basico">Básico (Entendo um pouco, travo na fala)</option>
                      <option value="intermediario">Intermediário (Me viro, quero fluência)</option>
                      <option value="avancado">Avançado (Quero refinar pronúncia/nuances)</option>
                      <option value="nao_sei">Não sei ao certo (Ainda sem certeza)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="form-goal"
                      className="block text-xs font-mono uppercase tracking-vintage text-british-blue font-bold mb-1.5"
                    >
                      Principal Objetivo
                    </label>
                    <select
                      id="form-goal"
                      {...register('goal')}
                      className="w-full px-4 py-3 rounded-xl border border-british-blue/15 text-sm font-medium bg-white text-british-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red cursor-pointer"
                    >
                      <option value="conversacao">Conversação &amp; Perder a vergonha</option>
                      <option value="trabalho">Carreira, entrevistas &amp; Trabalho</option>
                      <option value="viagens">Viagens &amp; Férias no exterior</option>
                      <option value="estudos">Estudos &amp; Certificações</option>
                      <option value="outro">Outro objetivo pessoal</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="form-notes"
                    className="block text-xs font-mono uppercase tracking-vintage text-british-blue font-bold mb-1.5"
                  >
                    Observações ou Mensagem (Opcional)
                  </label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    placeholder="Conte sobre sua rotina, horários preferidos ou alguma dúvida..."
                    {...register('notes')}
                    className="w-full px-4 py-3 rounded-xl border border-british-blue/15 text-sm font-medium bg-white text-british-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center gap-2.5 text-base shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Let's talk, Gui! 🇬🇧</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                {/* LGPD & Transparency Disclaimer */}
                <div className="pt-3 flex items-start gap-2 text-[11px] text-british-grey leading-relaxed">
                  <Shield className="w-3.5 h-3.5 text-british-camel shrink-0 mt-0.5" />
                  <span>
                    <strong>Privacidade &amp; LGPD:</strong> Seus dados são utilizados exclusivamente para gerar a mensagem de contato direto com o Teacher Gui no WhatsApp. Não compartilhamos nem armazenamos suas informações para publicidade.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
