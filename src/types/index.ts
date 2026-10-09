export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ClassFormat {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  features: string[];
  icon: string;
  accentColor?: string;
}

export interface ComparisonExample {
  id: string;
  context: string;
  scenario: string;
  formal: {
    phrase: string;
    label: string;
  };
  natural: {
    phrase: string;
    label: string;
    note: string;
  };
  alternatives?: {
    phrase: string;
    label: string;
    note: string;
  }[];
  culturalNote: string;
}

export interface CommonMistake {
  id: string;
  category: string;
  incorrect: string;
  correct: string;
  translationOrContext: string;
  explanation: string;
  tip?: string;
}

export interface BritishCuriosity {
  id: string;
  title: string;
  category: 'Everyday Expressions' | 'British Culture' | 'British vs. American' | 'Useful Travel English';
  description: string;
  examplePhrase?: string;
  exampleTranslation?: string;
  comparisonPairs?: {
    british: string;
    american: string;
    meaning: string;
  }[];
  funFact?: string;
}

export interface PronunciationWord {
  id: string;
  word: string;
  meaning: string;
  britishIPA: string;
  americanIPA?: string;
  britishNote: string;
  americanNote?: string;
  hasSignificantDifference: boolean;
  sampleSentence: string;
  sentenceTranslation: string;
}

export interface LearningJourneyStep {
  step: string;
  title: string;
  quote: string;
  translation: string;
  description: string;
  skillFocus: string;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
  toneExplanation: string;
}

export interface QuizQuestion {
  id: string;
  scenario: string;
  prompt: string;
  context: string;
  options: QuizOption[];
  culturalInsight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface ContactFormData {
  name: string;
  whatsapp: string;
  modality: 'online' | 'presencial';
  format: 'particular' | 'dupla';
  level: 'iniciante' | 'basico' | 'intermediario' | 'avancado' | 'nao_sei';
  goal: 'conversacao' | 'trabalho' | 'viagens' | 'estudos' | 'outro';
  notes?: string;
}
