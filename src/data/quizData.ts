import { QuestionScene, ArchetypeProfile } from '../types';

export const QUIZ_SCENES: QuestionScene[] = [
  {
    id: 1,
    timeTag: "03h 00m restantes",
    theme: "amber",
    title: "1. O Diagnóstico no Hospital",
    narrative: "Você chega ao hospital trêmulo, sentindo a perna dormente e com dificuldade para respirar após uma picada de jararaca. O médico traz uma ampola: 'Este é o único remédio para neutralizar o veneno agora.' No rótulo, você lê que para aquela dose existir, um cavalo foi inoculado com veneno e submetido a sangrias. O que você faz?",
    choices: [
      {
        id: 'A',
        text: '"Aplique imediatamente!"',
        subtext: 'Minha vida vale mais do que a de qualquer animal. Não há tempo para hesitar.'
      },
      {
        id: 'B',
        text: 'Hesito, sinto culpa, mas mando aplicar.',
        subtext: 'Fico mal em saber do sofrimento do cavalo, mas o instinto de sobrevivência fala mais alto.'
      },
      {
        id: 'C',
        text: 'Pergunto se existe qualquer alternativa sintética.',
        subtext: 'Exijo opções sem exploração animal, mesmo correndo o risco real de perder minutos vitais.'
      }
    ]
  },
  {
    id: 2,
    timeTag: "Meses Depois",
    theme: "emerald",
    title: "2. A Sobrevivência e o Dia Seguinte",
    narrative: "O soro funcionou e você está vivo. Meses depois, recuperado, você passa em frente ao laboratório que produz o antídoto e observa os cavalos confinados, visivelmente debilitados pelas injeções frequentes de toxinas. Como você se sente olhando para eles?",
    choices: [
      {
        id: 'A',
        text: 'Sinto gratidão utilitária pela medicina.',
        subtext: 'Encaro como um recurso natural legítimo. Os animais servem para garantir a nossa sobrevivência.'
      },
      {
        id: 'B',
        text: 'Sinto um aperto no peito e uma dívida ética.',
        subtext: 'Sei que estou vivo graças ao sofrimento deles e sinto que a humanidade precisa superar esse modelo.'
      },
      {
        id: 'C',
        text: 'Sinto revolta contra esse sistema.',
        subtext: 'Se a ciência não consegue nos salvar sem torturar outro ser vivo, nossa civilização falhou moralmente.'
      }
    ]
  },
  {
    id: 3,
    timeTag: "O Voto no Congresso",
    theme: "indigo",
    title: "3. A Votação da Lei",
    narrative: "Uma nova lei entra em votação no país para proibir imediatamente a exploração de cavalos na produção de soros. Isso significa que, se alguém for picado amanhã, não haverá antídoto até que uma tecnologia 100% artificial seja desenvolvida em alguns anos. Como você vota?",
    choices: [
      {
        id: 'A',
        text: 'Voto CONTRA a proibição.',
        subtext: 'Proteger vidas humanas presentes de picadas fatais é prioridade máxima e indiscutível.'
      },
      {
        id: 'B',
        text: 'Voto a favor APENAS SE a alternativa sair em poucos meses.',
        subtext: 'Se for demorar anos e deixar pessoas desprotegidas, prefiro manter o uso dos cavalos temporariamente.'
      },
      {
        id: 'C',
        text: 'Voto A FAVOR da proibição imediata.',
        subtext: 'O sofrimento institucionalizado dos animais precisa acabar agora, mesmo aumentando o risco para nós.'
      }
    ]
  }
];

export const ARCHETYPES: Record<string, ArchetypeProfile> = {
  pragmatic: {
    id: 'pragmatic',
    title: 'O Sobrevivente Pragmático',
    subtitle: 'Maioria Opção A • Utilitarismo & Sobrevivência',
    quote: '"Na emergência, a vida humana vem sempre em primeiro lugar."',
    diagnosis: 'Em uma situação de vida ou morte, você não hesita. Para você, a hierarquia da natureza é clara: a sobrevivência humana justifica o uso e o sacrifício de outras espécies. É a lógica utilitarista clássica que sustenta a medicina atual.',
    badge: '⚡ Foco Pragmático',
    theme: 'amber'
  },
  empathic: {
    id: 'empathic',
    title: 'O Empático Conivente',
    subtitle: 'Maioria Opção B • Consciência & Dívida Moral',
    quote: '"Estou vivo graças a eles, e a humanidade tem uma dívida a pagar."',
    diagnosis: 'Você quer salvar sua pele, mas não consegue fazer isso de cabeça leve. Você carrega o peso ético do impacto que suas escolhas causam. Você consome o que a ciência oferece para viver, mas torce e exige desesperadamente por alternativas livres de crueldade.',
    badge: '🌿 Consciência Moral',
    theme: 'emerald'
  },
  idealist: {
    id: 'idealist',
    title: 'O Idealista Sacrificial',
    subtitle: 'Maioria Opção C • Abolicionismo Biocêntrico',
    quote: '"Nenhuma vida deve ser torturada para sustentar a nossa conveniência."',
    diagnosis: 'Você mantém seus princípios éticos mesmo quando a corda aperta no seu próprio pescoço. Você questiona o direito da humanidade de se colocar acima de todas as outras vidas, preferindo arcar com os riscos da natureza a compactuar com a exploração animal.',
    badge: '🔮 Princípio Inegociável',
    theme: 'indigo'
  }
};
