import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QUIZ_SCENES } from './data/quizData';
import { SceneIllustration } from './components/SceneIllustration';
import { subscribeVotes, submitVote, isVotingConfigured } from './lib/voting';

type Choice = 'A' | 'B' | 'C';
type Totals = Record<number, Record<Choice, number>>;
const initial: Totals = { 1: { A: 0, B: 0, C: 0 }, 2: { A: 0, B: 0, C: 0 }, 3: { A: 0, B: 0, C: 0 }, 4: { A: 0, B: 0, C: 0 } };
const discussion = [
  { pro: 'Soros antiofídicos são recursos terapêuticos essenciais em envenenamentos graves; protocolos de bem-estar podem reduzir riscos.', contra: 'Imunização e coleta de plasma impõem encargos aos equinos; reduzir impactos e buscar alternativas continua sendo necessário.' },
  { pro: 'O soro salva vidas e sua produção pode ocorrer com protocolos de bem-estar e acompanhamento veterinário.', contra: 'A importância terapêutica não elimina o dever de reduzir os procedimentos e investir em métodos alternativos.' },
  { pro: 'Manter a produção evita o risco de desabastecimento de um tratamento essencial.', contra: 'Uma política de transição com metas pode incentivar alternativas sem suspender o acesso ao soro.' },
  { pro: 'A eCG pode facilitar protocolos de reprodução e manejo de rebanhos.', contra: 'O benefício é predominantemente produtivo, enquanto coletas em éguas prenhes podem impor riscos; há protocolos alternativos em alguns contextos.' }
];

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Choice>>({});
  const [totals, setTotals] = useState<Totals>(initial);
  const [qr, setQr] = useState(false);
  const [presenter, setPresenter] = useState(new URLSearchParams(window.location.search).get('mode') === 'presenter');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [showDiscussion, setShowDiscussion] = useState(false);
  const scene = QUIZ_SCENES[step];
  useEffect(() => {
    if (!isVotingConfigured) return;
    return subscribeVotes(setTotals, (message) => setStatus(message));
  }, []);
  const vote = async (choice: Choice) => {
    if (busy || answers[scene.id]) return;
    if (!isVotingConfigured) { setStatus('A votação coletiva ainda precisa ser configurada pelo apresentador.'); return; }
    setBusy(true);
    try {
      await submitVote(scene.id, choice);
      setAnswers(prev => ({ ...prev, [scene.id]: choice }));
      setStatus('');
      setShowDiscussion(true);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Não foi possível registrar o voto.');
    } finally { setBusy(false); }
  };
  const total = Object.values(totals[scene.id] ?? initial[1]).reduce((a,b) => a+b,0);
  const baseUrl = window.location.origin + window.location.pathname;
  return <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 font-sans">
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div><div className="text-xs uppercase tracking-widest text-amber-400">Ética e bem-estar animal</div><h1 className="text-xl font-bold">O dilema do soro</h1></div>
        <div className="flex gap-2">
          <button onClick={() => setQr(true)} className="rounded-lg bg-slate-800 px-3 py-2 text-sm">QR Code</button>
          <button onClick={() => setPresenter(!presenter)} className="rounded-lg border border-slate-700 px-3 py-2 text-xs">{presenter ? 'Modo aluno' : 'Apresentar'}</button>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden border border-slate-800 mb-5 h-40 sm:h-56"><SceneIllustration sceneId={scene.id}/></div>
      <div className="text-xs text-amber-400 mb-2">DECISÃO {step+1} DE {QUIZ_SCENES.length}</div>
      <h2 className="text-2xl font-bold mb-3">{scene.title}</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">{scene.narrative}</p>
      {!presenter && <div className="space-y-3 mb-6">{scene.choices.map(choice => <button key={choice.id} disabled={busy || !!answers[scene.id]} onClick={() => vote(choice.id)} className={`w-full text-left p-4 rounded-xl border transition ${answers[scene.id] === choice.id ? 'border-amber-400 bg-amber-500/15' : 'border-slate-700 bg-slate-900 hover:border-amber-500/50'} disabled:cursor-default`}>
        <div className="font-semibold">{choice.id}. {choice.text}</div><div className="text-xs text-slate-400 mt-1">{choice.subtext}</div>
      </button>)}</div>}
      {status && <p role="alert" className="text-amber-300 text-sm mb-4">{status}</p>}
      {(presenter || answers[scene.id]) && <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-5">
        <h3 className="font-bold mb-3">Votação da turma <span className="text-slate-400 text-sm font-normal">({total} {total === 1 ? 'voto' : 'votos'})</span></h3>
        {scene.choices.map(choice => { const count=totals[scene.id]?.[choice.id] ?? 0; const pct=total ? Math.round(count*100/total) : 0; return <div key={choice.id} className="mb-3"><div className="flex justify-between text-sm mb-1"><span>{choice.id}. {choice.text}</span><span>{pct}% · {count}</span></div><div className="bg-slate-800 rounded-full h-2 overflow-hidden"><div className="bg-amber-400 h-full transition-all" style={{width:`${pct}%`}}/></div></div>; })}
        <p className="text-xs text-slate-400">Resultados agregados em tempo real. Sem nomes ou e-mails.</p>
      </section>}
      {(presenter || answers[scene.id]) && <div className="mb-5">
        <button onClick={() => setShowDiscussion(!showDiscussion)} className="text-amber-300 text-sm font-semibold mb-3">{showDiscussion ? 'Ocultar' : 'Revelar'} argumentos para debate</button>
        {showDiscussion && <div className="grid gap-3 sm:grid-cols-2">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4"><h4 className="font-semibold mb-2">Por que a prática existe?</h4><p className="text-sm text-slate-300">{discussion[step].pro}</p></div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4"><h4 className="font-semibold mb-2">O que a questiona?</h4><p className="text-sm text-slate-300">{discussion[step].contra}</p></div>
        </div>}
      </div>}
      <div className="flex gap-3 items-center">
        {step > 0 && <button onClick={() => {setStep(step - 1);setShowDiscussion(false)}} className="px-4 py-3 rounded-xl bg-slate-800">Caso anterior</button>}
        {step < QUIZ_SCENES.length - 1 ? <button onClick={() => {setStep(step + 1);setShowDiscussion(false)}} className="px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold">Próximo dilema →</button> : <p className="text-sm text-slate-300 italic">A finalidade do uso animal muda a sua decisão?</p>}
      </div>
      {step === QUIZ_SCENES.length - 1 && (presenter || answers[4]) && <section className="mt-6 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5">
        <div className="text-xs uppercase tracking-widest text-amber-300 mb-2">Reflexão final</div>
        <h3 className="font-bold text-lg mb-3">O que mudou quando mudou a finalidade?</h3>
        {!presenter && answers[3] && answers[4] && <p className="text-sm text-slate-200 mb-3">Na decisão sobre a lei do soro, você escolheu <strong>{answers[3]}</strong>. No caso da eCG, escolheu <strong>{answers[4]}</strong>. {answers[3] === answers[4] ? 'Você manteve a mesma alternativa, mas isso não significa necessariamente que usou o mesmo critério.' : 'Você escolheu alternativas diferentes. Isso pode indicar que a finalidade do uso animal mudou o peso dos argumentos para você.'}</p>}
        <p className="text-sm text-slate-200 mb-3">Salvar uma vida e aumentar a eficiência produtiva oferecem justificativas diferentes para utilizar animais. Onde você colocaria o limite?</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-900 p-3"><div className="text-slate-400 text-xs mb-1">Lei sobre o soro</div><div className="font-semibold">{Object.values(totals[3] ?? initial[1]).reduce((a,b)=>a+b,0)} votos</div></div>
          <div className="rounded-xl bg-slate-900 p-3"><div className="text-slate-400 text-xs mb-1">Uso da eCG</div><div className="font-semibold">{Object.values(totals[4] ?? initial[1]).reduce((a,b)=>a+b,0)} votos</div></div>
        </div>
        <p className="text-xs text-slate-400 mt-3">As alternativas A, B e C não têm exatamente o mesmo significado nos dois casos. Os totais não permitem identificar quem mudou de posição; a comparação individual aparece somente no próprio aparelho.</p>
      </section>}
      {presenter && <p className="mt-5 text-xs text-slate-400">Modo apresentador: projete esta tela e abra o QR Code. Os alunos votam nos próprios celulares. O controle de telas é individual; avance verbalmente com a turma.</p>}
    </div>
    {qr && <div className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4" onClick={() => setQr(false)}><div className="bg-slate-900 rounded-2xl p-7 text-center border border-slate-700" onClick={e=>e.stopPropagation()}><h2 className="text-lg font-bold mb-4">Participe pelo celular</h2><div className="bg-white rounded-xl p-4 inline-block"><QRCodeSVG value={baseUrl} size={220}/></div><p className="text-sm text-slate-300 mt-4">Respostas sem nome ou e-mail</p><button className="mt-4 text-amber-300" onClick={() => setQr(false)}>Fechar</button></div></div>}
  </main>;
}
