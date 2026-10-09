import { NavItem } from '../types';

export const siteConfig = {
  teacher: {
    name: 'Guilherme',
    nickname: 'Teacher Gui',
    title: 'Professor de Inglês Britânico',
    tagline: 'Real English. Real Connection.',
    bioShort: 'Aprenda inglês com alguém que se importa de verdade com a sua evolução. Sem pressão para ser perfeito, com conversas reais desde o primeiro dia.',
    bioLong: `Aprender um idioma fica muito mais leve quando você se sente à vontade para perguntar, tentar, errar e tentar de novo.
Com o Teacher Gui, as aulas são um espaço para construir confiança, desenvolver habilidades e descobrir que o inglês pode fazer parte da sua rotina de verdade.
Sem pressão para parecer perfeito. Com atenção ao seu desenvolvimento e espaço para cada pequena conquista.`,
    quote: 'English is better when we talk.',
    signature: 'Teacher Gui 🇬🇧',
    // Configurable photo placeholder - ready for real photo of Guilherme
    photoUrl: null, // set to string when photo is provided
  },
  contacts: {
    // Configurable contact details
    whatsappNumber: '5511999999999', // Editable WhatsApp number
    whatsappDisplay: '+55 (11) 99999-9999',
    instagramHandle: '@teacher.gui',
    instagramUrl: 'https://instagram.com/teacher.gui',
    email: 'contato@teachergui.com.br',
    locationPresencial: 'São Paulo - SP (Consulte bairros e disponibilidade)',
  },
  navigation: [
    { label: 'Sobre o Gui', href: '#sobre' },
    { label: 'Aulas', href: '#modalidades' },
    { label: 'Inglês Real', href: '#ingles-real' },
    { label: 'Cultura Britânica', href: '#cultura' },
    { label: 'Pronúncia', href: '#pronuncia' },
    { label: 'Desafio', href: '#quiz', badge: 'Mini-Quiz' },
    { label: 'Dúvidas', href: '#faq' },
  ] as NavItem[],
  features: {
    enableSpeechSynthesis: true,
  },
};
