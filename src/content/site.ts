import { NavItem } from '../types';

export const siteConfig = {
  teacher: {
    name: 'Guilherme',
    nickname: 'Teacher Gui',
    title: 'Professor de Inglês Britânico',
    tagline: 'Real English. Real Connection.',
    bioShort: 'Professor há 8 anos de Inglês, Português, Filosofia e Sociologia. A paixão por ensinar e por idiomas nasceu ainda na adolescência — e hoje transforma conversas em experiências com profundidade, leveza e conexão real.',
    bioLong: `Aprender um idioma fica muito mais leve quando você se sente à vontade para perguntar, tentar, errar e tentar de novo.
Com o Teacher Gui, as aulas são um espaço para construir confiança, desenvolver habilidades e descobrir que o inglês pode fazer parte da sua rotina de verdade.
Sua trajetória na educação começou cedo: leciona desde a adolescência, quando descobriu o fascínio pelos idiomas e pela troca com as pessoas. Com 8 anos de experiência docente em Português, Inglês, Filosofia e Sociologia, o Gui une o domínio da estrutura linguística com a profundidade das ideias humanas — transformando cada encontro em conversas ricas sobre cultura, sociedade e vida real.`,
    quote: 'English is better when we talk.',
    signature: 'Teacher Gui 🇬🇧',
    // Configurable photo placeholder - ready for real photo of Guilherme
    photoUrl: null, // set to string when photo is provided
  },
  contacts: {
    // Official contacts for Teacher Gui
    whatsappNumber: '5512997880714',
    whatsappDisplay: '+55 (12) 99788-0714',
    instagramHandle: '@teacher.gui',
    instagramUrl: 'https://instagram.com/teacher.gui',
    email: 'guimaxpa@gmail.com',
    locationPresencial: 'Aulas online de qualquer lugar ou presenciais sob consulta',
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
