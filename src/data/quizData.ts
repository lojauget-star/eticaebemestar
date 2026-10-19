import { QuestionScene, ArchetypeProfile } from '../types';

export const QUIZ_SCENES: QuestionScene[] = [
  {
    id: 1, timeTag: 'A emergência', theme: 'amber',
    title: '1. O diagnóstico no hospital',
    narrative: 'Você chega ao hospital após uma picada de jararaca. O médico indica soro antiofídico, produzido com anticorpos obtidos de equinos imunizados. Você descobre que esses animais passam por procedimentos de imunização e coleta de plasma. O que você faz?',
    choices: [
      { id: 'A', text: 'Aceito o soro imediatamente.', subtext: 'Diante do risco à vida, o tratamento disponível é minha prioridade.' },
      { id: 'B', text: 'Aceito, mas questiono como os cavalos são tratados.', subtext: 'Salvar vidas não elimina a responsabilidade de reduzir o impacto nos animais.' },
      { id: 'C', text: 'Peço informações sobre alternativas antes de decidir.', subtext: 'Quero entender se há alguma opção adequada sem uso animal, considerando a urgência.' }
    ]
  },
  {
    id: 2, timeTag: 'Depois da recuperação', theme: 'emerald',
    title: '2. A sobrevivência e o dia seguinte',
    narrative: 'Meses depois, recuperado, você conhece mais sobre a produção do soro. Os cavalos podem ser submetidos a procedimentos repetidos, que exigem acompanhamento veterinário e medidas de bem-estar. Você pode apoiar mudanças nessa cadeia. Qual seria sua posição?',
    choices: [
      { id: 'A', text: 'Apoio a continuidade com fiscalização rigorosa.', subtext: 'A importância médica justifica o uso quando os riscos são controlados.' },
      { id: 'B', text: 'Defendo redução do uso e investimento em alternativas.', subtext: 'Reconheço o benefício, mas considero necessário transformar o modelo.' },
      { id: 'C', text: 'Defendo a substituição completa como objetivo.', subtext: 'A proteção dos animais deve orientar a pesquisa e as políticas futuras.' }
    ]
  },
  {
    id: 3, timeTag: 'A decisão coletiva', theme: 'indigo',
    title: '3. A votação da lei',
    narrative: 'Imagine uma proposta de lei que proibisse imediatamente o uso de equinos na produção de soros, antes de existir substituto capaz de garantir o abastecimento. A medida reduziria o uso animal, mas poderia comprometer o acesso ao tratamento. Como você votaria?',
    choices: [
      { id: 'A', text: 'Contra a proibição imediata.', subtext: 'A continuidade do tratamento deve ser preservada com fiscalização.' },
      { id: 'B', text: 'A favor de uma transição com metas e prazos.', subtext: 'A substituição deve avançar sem interromper o acesso ao soro.' },
      { id: 'C', text: 'A favor da proibição imediata.', subtext: 'Entendo que o uso animal deve cessar mesmo diante dos riscos de desabastecimento.' }
    ]
  },
  {
    id: 4, timeTag: 'Um segundo dilema', theme: 'indigo',
    title: '4. Você manteria o mesmo princípio?',
    narrative: 'A gonadotrofina coriônica equina (eCG), extraída do sangue de éguas prenhes, é utilizada em protocolos de reprodução de animais de produção. A coleta pode envolver riscos de bem-estar. Você acaba de decidir sobre o uso de cavalos para salvar vidas. Agora o benefício é predominantemente produtivo, não uma emergência médica. Se fosse responsável por autorizar essa prática, qual decisão tomaria?',
    choices: [
      { id: 'A', text: 'Aceito a prática sob fiscalização rigorosa.', subtext: 'O benefício produtivo pode justificar seu uso com proteção efetiva às éguas.' },
      { id: 'B', text: 'Aceito apenas quando não houver alternativa viável.', subtext: 'Para esse benefício, a exigência de justificativa deve ser maior.' },
      { id: 'C', text: 'Defendo substituir essa prática.', subtext: 'Ganhos de eficiência não justificam impor riscos às éguas.' }
    ]
  }
];

export const ARCHETYPES: Record<string, ArchetypeProfile> = {
  pragmatic: { id: 'pragmatic', title: 'Ênfase nos benefícios', subtitle: 'Uma perspectiva possível', quote: 'Quando o benefício justifica o uso?', diagnosis: 'Você deu peso aos benefícios e à possibilidade de controlar riscos. Quais evidências seriam necessárias para justificar a prática?', badge: 'Reflexão', theme: 'amber' },
  empathic: { id: 'empathic', title: 'Ênfase na transição', subtitle: 'Uma perspectiva possível', quote: 'O necessário hoje precisa ser permanente?', diagnosis: 'Você ponderou benefícios e custos para os animais. Como definir critérios e prazos para alternativas?', badge: 'Reflexão', theme: 'emerald' },
  idealist: { id: 'idealist', title: 'Ênfase nos limites éticos', subtitle: 'Uma perspectiva possível', quote: 'Há benefícios que não justificam impor riscos?', diagnosis: 'Você deu maior peso aos interesses dos animais. Como lidar com urgências humanas e alternativas ainda indisponíveis?', badge: 'Reflexão', theme: 'indigo' }
};
