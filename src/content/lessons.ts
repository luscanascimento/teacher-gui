import { ClassFormat, ComparisonExample } from '../types';

export const classFormats: ClassFormat[] = [
  {
    id: 'online',
    title: 'Online Classes',
    subtitle: 'De onde você estiver',
    description: 'Aprenda no conforto da sua casa ou trabalho, com praticidade total e a mesma atenção de uma aula ao vivo.',
    tag: 'Flexível & Prático',
    icon: 'Laptop',
    features: [
      'Ambiente digital acolhedor e dinâmico',
      'Material personalizado em tempo real',
      'Ideal para quem tem rotina corrida',
      'Horários ajustáveis à sua agenda',
    ],
  },
  {
    id: 'in-person',
    title: 'In-Person Classes',
    subtitle: 'Conexão olho no olho',
    description: 'Prefere conversar frente a frente? Aulas presenciais para quem valoriza a proximidade física e a dinâmica pessoal.',
    tag: 'Presencial & Conectado',
    icon: 'Coffee',
    features: [
      'Conversa fluida no ritmo da vida real',
      'Ambiente tranquilo para prática oral',
      'Material impresso e digital integrado',
      'Consulte disponibilidade na sua região',
    ],
  },
  {
    id: 'one-to-one',
    title: 'One-to-One',
    subtitle: '100% focado em você',
    description: 'Um espaço só seu para perguntar, praticar, errar à vontade e focar exclusivamente nos seus objetivos pessoais.',
    tag: 'Exclusivo & Sob Medida',
    icon: 'UserCheck',
    features: [
      'Ritmo e temas totalmente adaptados',
      'Atenção individualizada a cada detalhe',
      'Correções em tempo real sem constrangimento',
      'Foco direto na sua meta (viagem, trabalho, rotina)',
    ],
  },
  {
    id: 'learn-together',
    title: 'Learn Together',
    subtitle: 'Aulas em dupla',
    description: 'Aprender em dupla também pode ser uma ótima aventura. Convide um amigo, parceiro ou colega para praticar junto.',
    tag: 'Dinâmico & Compartilhado',
    icon: 'Users',
    features: [
      'Dinâmica interativa com troca constante',
      'Mais leveza e apoio mútuo no aprendizado',
      'Simulações reais de conversas a três',
      'Excelente custo-benefício',
    ],
  },
];

export const comparisonExamples: ComparisonExample[] = [
  {
    id: 'coffee',
    context: 'Num café em Londres',
    scenario: 'Pedindo um café no balcão',
    formal: {
      phrase: 'I would like to order a coffee.',
      label: 'Formal / Livro',
    },
    natural: {
      phrase: 'Could I have a coffee, please?',
      label: 'Natural & Muito Educado 🇬🇧',
      note: 'A fórmula mais simpática e natural para fazer pedidos no Reino Unido.',
    },
    alternatives: [
      {
        phrase: 'Can I get a coffee, please?',
        label: 'Alternativa Comum',
        note: 'Super comum no dia a dia, tanto no Reino Unido quanto nos EUA.',
      },
    ],
    culturalNote: 'Todas são perfeitamente compreensíveis! O segredo não é dizer que uma está errada, mas saber qual soa mais natural e acolhedora na situação.',
  },
  {
    id: 'greeting',
    context: 'Encontrando um conhecido na rua',
    scenario: 'Perguntando como a pessoa está',
    formal: {
      phrase: 'How do you do? / How are you?',
      label: 'Padrão tradicional',
    },
    natural: {
      phrase: 'You alright?',
      label: 'Informal Britânico 🇬🇧',
      note: 'O cumprimento mais britânico que existe! Soa como pergunta, mas funciona quase como um "E aí, tudo bem?".',
    },
    alternatives: [
      {
        phrase: 'Alright, mate?',
        label: 'Muito coloquial',
        note: 'Usado entre amigos e pessoas próximas em ambientes descontraídos.',
      },
    ],
    culturalNote: 'No Reino Unido, "You alright?" nem sempre exige que você conte a história da sua vida! Uma resposta simples como "Yeah, good thanks! You?" é perfeita.',
  },
  {
    id: 'tired',
    context: 'Depois de um dia puxado de trabalho',
    scenario: 'Dizendo que está muito cansado',
    formal: {
      phrase: 'I am extremely exhausted.',
      label: 'Livro didático',
    },
    natural: {
      phrase: "I'm knackered!",
      label: 'Gíria Britânica Autêntica 🇬🇧',
      note: 'Expressão clássica do dia a dia no Reino Unido para dizer que você está acabado de cansaço.',
    },
    alternatives: [
      {
        phrase: "I'm shattered!",
        label: 'Outra expressão britânica',
        note: 'Também muito usada com o mesmo sentido de exaustão completa.',
      },
      {
        phrase: "I'm wiped out.",
        label: 'Geral',
        note: 'Comum em várias regiões para dizer que a bateria acabou.',
      },
    ],
    culturalNote: '"Knackered" é informal, perfeita para usar com colegas de trabalho, amigos ou no pub. Não é palavrão, apenas linguagem coloquial vívida!',
  },
  {
    id: 'thanks',
    context: 'Agradecendo alguém que te ajudou',
    scenario: 'Dizendo obrigado no dia a dia',
    formal: {
      phrase: 'Thank you very much indeed.',
      label: 'Muito Formal',
    },
    natural: {
      phrase: 'Cheers!',
      label: 'Cotidiano Britânico 🇬🇧',
      note: 'No Reino Unido, "Cheers" vai muito além do brinde: é o "valeu/obrigado" mais ouvido nas ruas!',
    },
    alternatives: [
      {
        phrase: 'Thanks a lot!',
        label: 'Padrão cordial',
        note: 'Simples, seguro e caloroso.',
      },
      {
        phrase: 'Ta! / Ta very much!',
        label: 'Norte da Inglaterra / Coloquial',
        note: 'Uma forma curtinha e afetuosa de agradecer.',
      },
    ],
    culturalNote: 'Ao descer do ônibus ou receber o troco, dizer "Cheers!" é quase um reflexo automático no Reino Unido.',
  },
];
