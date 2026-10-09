import { LearningJourneyStep, QuizQuestion } from '../types';

export const learningJourneySteps: LearningJourneyStep[] = [
  {
    step: '01',
    title: 'Hello! Seu ponto de partida',
    quote: '"Hi! My name is..."',
    translation: '"Oi! Meu nome é..."',
    description: 'Aqui você quebra o gelo, perde a vergonha de falar as primeiras palavras e constrói a base de segurança para não travar.',
    skillFocus: 'Apresentações pessoais, saudações naturais e primeiras frases sem medo.',
  },
  {
    step: '02',
    title: 'Tell me more. Compartilhando interesses',
    quote: '"I really enjoy watching movies and travelling."',
    translation: '"Eu realmente curto assistir filmes e viajar."',
    description: 'Você começa a falar sobre o que gosta, sua rotina, sua família e seu trabalho, saindo das frases prontas e criando conexões reais.',
    skillFocus: 'Vocabulário pessoal, rotina, gostos e expressões do dia a dia.',
  },
  {
    step: '03',
    title: "Let's talk! Sustentando diálogos",
    quote: '"What do you think about that? In my opinion..."',
    translation: '"O que você acha disso? Na minha opinião..."',
    description: 'Você aprende a trocar ideias, fazer perguntas de volta, concordar, discordar com gentileza e manter a conversa fluindo naturalmente.',
    skillFocus: 'Conversação ativa, perguntas espontâneas e conexões de ideias.',
  },
  {
    step: '04',
    title: "That's what I meant! Nuance e confiança",
    quote: '"If I\'d known earlier, I would\'ve done it differently."',
    translation: '"Se eu soubesse antes, teria feito diferente."',
    description: 'Você ganha recursos para expressar ideias mais sutis, contar histórias passadas, usar humor e expressar exatamente quem você é em inglês.',
    skillFocus: 'Expressão autêntica, nuances de tom, humor e autonomia plena.',
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'coffee-order',
    scenario: 'Num café charmoso em Londres ☕',
    prompt: 'O barista sorri e pergunta: "Hiya! What can I get you?". Qual é a resposta mais natural e educada?',
    context: 'Você quer pedir um café tipo flat white.',
    options: [
      {
        id: 'opt-a',
        text: 'Could I have a flat white, please?',
        isCorrect: true,
        feedback: 'Brilliant! Perfeito!',
        toneExplanation: 'Essa é a maneira clássica, polida e extremamente natural que os britânicos usam para pedir qualquer coisa.',
      },
      {
        id: 'opt-b',
        text: 'I want that white coffee.',
        isCorrect: false,
        feedback: 'Quase lá!',
        toneExplanation: 'O atendente vai entender, mas usar "I want" soa um pouco brusco em inglês. A cortesia britânica prefere "Could I have..." ou "Can I get...".',
      },
      {
        id: 'opt-c',
        text: 'Give me a flat white.',
        isCorrect: false,
        feedback: 'Cuidado com o tom!',
        toneExplanation: 'No português dizemos "me dá um café" sem malícia, mas em inglês "Give me" soa como uma ordem bastante imperativa e ríspida.',
      },
    ],
    culturalInsight: 'No Reino Unido, a cortesia no pedido ("Could I have...", "please", "Cheers") faz parte do tecido social diário!',
  },
  {
    id: 'you-alright',
    scenario: 'Encontrando um colega britânico no corredor 🇬🇧',
    prompt: 'Seu colega passa por você apressado e diz: "You alright?". Qual interpretação e reação é a mais comum?',
    context: 'Avaliando contexto de saudações informais.',
    options: [
      {
        id: 'opt-a',
        text: 'Responder: "Yeah, good thanks! You?"',
        isCorrect: true,
        feedback: 'Spot on! Na mosca!',
        toneExplanation: '"You alright?" funciona como um "Tudo bem, e aí?". Responder com um "Yeah, good thanks! You?" mantém a conversa fluindo com naturalidade perfeita.',
      },
      {
        id: 'opt-b',
        text: 'Pensar assustado: "Por que ele perguntou isso? Eu estou com cara de doente?"',
        isCorrect: false,
        feedback: 'Pegadinha clássica!',
        toneExplanation: 'Muitos brasileiros acham que a pessoa notou algo de errado com a saúde ou aparência deles, mas é só um "E aí, beleza?".',
      },
      {
        id: 'opt-c',
        text: 'Parar e contar detalhadamente todos os seus problemas de saúde da semana.',
        isCorrect: false,
        feedback: 'Excesso de informação!',
        toneExplanation: 'A menos que seja um amigo íntimo com tempo para conversar, um cumprimento casual no corredor não espera um relatório médico completo.',
      },
    ],
    culturalInsight: '"You alright?" é o exemplo perfeito de que aprender inglês de verdade vai muito além da tradução literal do dicionário.',
  },
];
