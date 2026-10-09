import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ContactFormData } from '../types';
import { siteConfig } from '../content/site';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a properly URL-encoded WhatsApp link with prefilled message
 */
export function buildWhatsAppLink(data?: Partial<ContactFormData>): string {
  const phone = siteConfig.contacts.whatsappNumber.replace(/\D/g, '');

  if (!data || !data.name) {
    const defaultText = `Oi, Gui! Tudo bem? Encontrei seu site e queria saber mais sobre as aulas de inglês.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
  }

  const modalityMap = {
    online: 'Online',
    presencial: 'Presencial',
  };

  const formatMap = {
    particular: 'Individual (One-to-One)',
    dupla: 'Em dupla (Learn Together)',
  };

  const levelMap = {
    iniciante: 'Iniciante do zero',
    basico: 'Básico',
    intermediario: 'Intermediário',
    avancado: 'Avançado',
    nao_sei: 'Ainda não tenho certeza',
  };

  const goalMap = {
    conversacao: 'Conversação do dia a dia',
    trabalho: 'Carreira e Trabalho',
    viagens: 'Viagens e Férias',
    estudos: 'Estudos e Certificações',
    outro: 'Outro objetivo',
  };

  const lines = [
    `Oi, Gui! Tudo bem? Meu nome é ${data.name}.`,
    `Encontrei seu site e gostaria de saber mais sobre as aulas de inglês!`,
    ``,
    `📋 Minhas preferências:`,
    `• Modalidade: ${data.modality ? modalityMap[data.modality] : 'A definir'}`,
    `• Formato: ${data.format ? formatMap[data.format] : 'A definir'}`,
    `• Meu nível atual: ${data.level ? levelMap[data.level] : 'A definir'}`,
    `• Meu objetivo principal: ${data.goal ? goalMap[data.goal] : 'A definir'}`,
  ];

  if (data.notes && data.notes.trim()) {
    lines.push(`• Observações: ${data.notes.trim()}`);
  }

  lines.push(``);
  lines.push(`Como podemos combinar para conversar?`);

  const message = lines.join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Safely plays pronunciation using Web Speech API with language tag fallbacks
 */
export function playPronunciation(
  text: string,
  variant: 'en-GB' | 'en-US' = 'en-GB',
  onEnd?: () => void,
  onError?: (err: string) => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onError?.('Seu navegador não suporta síntese de áudio.');
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any pending speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = variant;
    utterance.rate = 0.88; // Slightly slower for crisp didactic clarity
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find((v) =>
      variant === 'en-GB'
        ? v.lang.toLowerCase().includes('gb') || v.lang.toLowerCase().includes('en-uk') || v.name.toLowerCase().includes('british')
        : v.lang.toLowerCase().includes('us') || v.name.toLowerCase().includes('united states')
    );

    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onend = () => {
      onEnd?.();
    };

    utterance.onerror = (e) => {
      onError?.(e.error || 'Erro ao reproduzir');
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (error) {
    onError?.('Não foi possível inicializar o áudio');
    return false;
  }
}
