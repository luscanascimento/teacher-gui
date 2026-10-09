export interface LifeBenefit {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export const lifeBenefits: LifeBenefit[] = [
  {
    id: 'ritmo',
    badge: 'Personalização',
    title: 'No seu ritmo',
    description: 'Sem pressa artificial e sem ficar para trás. Cada aula acompanha sua velocidade de assimilação, tirando dúvidas sem constrangimento.',
    highlight: 'Atenção dedicada à sua evolução contínua.',
    icon: 'Compass',
  },
  {
    id: 'rotina',
    badge: 'Flexibilidade',
    title: 'Na sua rotina',
    description: 'Aulas online práticas ou encontros presenciais adaptados à sua semana, facilitando a constância que o aprendizado de um idioma exige.',
    highlight: 'Inglês que se encaixa na sua vida real.',
    icon: 'CalendarClock',
  },
  {
    id: 'jeito',
    badge: 'Formato',
    title: 'Do seu jeito',
    description: 'Foco exclusivo nas suas metas pessoais nas aulas particulares (One-to-One) ou troca divertida em dupla (Learn Together).',
    highlight: 'Escolha a dinâmica que mais combina com você.',
    icon: 'Smile',
  },
  {
    id: 'confianca',
    badge: 'Ambiente Seguro',
    title: 'Com mais confiança',
    description: 'Um espaço carinhoso e descontraído onde errar é bem-vindo, porque é exatamente assim que você ganha segurança para falar em público.',
    highlight: 'Perca o medo de falar desde o primeiro encontro.',
    icon: 'HeartHandshake',
  },
];
