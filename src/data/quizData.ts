import { QuestionScene, ArchetypeProfile } from '../types';

export const QUIZ_SCENES: QuestionScene[] = [
  { id: 1, timeTag: 'Caso 1', theme: 'amber', title: 'Soro antiofídico: você manteria o uso de equinos?',
    narrative: 'Soros antiofídicos salvam vidas e podem ser produzidos a partir de anticorpos obtidos de equinos imunizados. A coleta deve seguir protocolos sanitários e de bem-estar. Qual posição você defenderia?',
    choices: [
      { id: 'A', text: 'Manter com fiscalização rigorosa.', subtext: 'Salvar vidas justifica o uso quando os riscos são controlados.' },
      { id: 'B', text: 'Manter enquanto desenvolvemos alternativas.', subtext: 'A necessidade clínica exige também investimento na substituição.' },
      { id: 'C', text: 'Priorizar a substituição do uso de equinos.', subtext: 'Os interesses dos animais devem pesar mais na decisão.' }
    ] },
  { id: 2, timeTag: 'Caso 2', theme: 'indigo', title: 'eCG de éguas prenhes: o mesmo critério?',
    narrative: 'A gonadotrofina coriônica equina (eCG), obtida do sangue de éguas prenhes, é utilizada em protocolos de reprodução animal. A coleta pode levantar preocupações de bem-estar. Você apoiaria esse uso?',
    choices: [
      { id: 'A', text: 'Sim, sob fiscalização rigorosa.', subtext: 'O benefício produtivo pode justificar o uso em condições estritas.' },
      { id: 'B', text: 'Somente sem alternativa viável.', subtext: 'A finalidade produtiva exige uma justificativa mais forte.' },
      { id: 'C', text: 'Não, deve ser substituído.', subtext: 'Ganhos de eficiência não justificam os riscos para as éguas.' }
    ] }
];

export const ARCHETYPES: Record<string, ArchetypeProfile> = {
  pragmatic: { id: 'pragmatic', title: 'Ênfase nos benefícios', subtitle: 'Uma perspectiva possível', quote: 'Quando o benefício justifica o uso?', diagnosis: 'Você deu peso aos benefícios e à possibilidade de controlar os riscos. Quais evidências seriam necessárias para justificar a prática?', badge: 'Reflexão', theme: 'amber' },
  empathic: { id: 'empathic', title: 'Ênfase na transição', subtitle: 'Uma perspectiva possível', quote: 'O necessário hoje precisa ser permanente?', diagnosis: 'Você ponderou benefícios e custos para os animais. Como definir critérios e prazos para alternativas?', badge: 'Reflexão', theme: 'emerald' },
  idealist: { id: 'idealist', title: 'Ênfase nos limites éticos', subtitle: 'Uma perspectiva possível', quote: 'Há benefícios que não justificam impor riscos?', diagnosis: 'Você deu maior peso aos interesses dos animais. Como lidar com urgências humanas e alternativas ainda indisponíveis?', badge: 'Reflexão', theme: 'indigo' }
};
