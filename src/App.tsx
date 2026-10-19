import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import { QUIZ_SCENES, ARCHETYPES } from './data/quizData';
import { ArchetypeProfile } from './types';
import { SceneIllustration } from './components/SceneIllustration';
import { RotateCcw, QrCode, X, Copy, Check, Share2, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<('A' | 'B' | 'C')[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const scene = QUIZ_SCENES[currentStep];

  const handleSelectChoice = (choiceId: 'A' | 'B' | 'C') => {
    const nextAnswers = [...answers, choiceId];
    setAnswers(nextAnswers);

    if (currentStep + 1 < QUIZ_SCENES.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  // Determine profile based on answers
  const getArchetype = (): ArchetypeProfile => {
    const aCount = answers.filter((a) => a === 'A').length;
    const bCount = answers.filter((a) => a === 'B').length;
    const cCount = answers.filter((a) => a === 'C').length;

    if (aCount >= 2) return ARCHETYPES.pragmatic;
    if (cCount >= 2) return ARCHETYPES.idealist;
    if (bCount >= 2) return ARCHETYPES.empathic;
    return ARCHETYPES.empathic;
  };

  const archetype = getArchetype();

  const handleCopy = () => {
    const text = `Meu resultado no Dilema do Soro: *${archetype.title}*\n"${archetype.quote}"\n\n${archetype.diagnosis}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-8 sm:py-12 selection:bg-amber-500 selection:text-slate-950 font-sans">
      
      {/* Discreet QR Code for audience/presentation */}
      <button
        id="qr-trigger-btn"
        onClick={() => setShowQrModal(true)}
        className="fixed top-4 right-4 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-amber-400 transition-all shadow-lg backdrop-blur-md cursor-pointer"
        title="QR Code para a turma"
      >
        <QrCode className="w-4 h-4" />
      </button>

      {/* Main Single-View Layout */}
      <div className="w-full max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex flex-col"
            >
              {/* Scene Illustration Banner */}
              <div className="relative w-full aspect-[2/1] sm:aspect-[2.4/1] rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-2xl bg-slate-900">
                <SceneIllustration sceneId={scene.id} />
                
                {/* Step counter */}
                <div className="absolute bottom-3 right-4 px-2.5 py-0.5 rounded-full bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-400">
                  {currentStep + 1} / {QUIZ_SCENES.length}
                </div>
              </div>

              {/* Case Title & Narrative */}
              <div className="mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                  {scene.title}
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {scene.narrative}
                </p>
              </div>

              {/* 3 Clickable Choices */}
              <div className="space-y-3">
                {scene.choices.map((choice) => (
                  <button
                    key={choice.id}
                    id={`choice-${choice.id}-btn`}
                    onClick={() => handleSelectChoice(choice.id)}
                    className="w-full text-left p-4 rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-850 hover:border-amber-500/50 transition-all duration-150 flex items-start gap-3.5 group cursor-pointer active:scale-[0.99]"
                  >
                    <div className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 transition-colors mt-0.5">
                      {choice.id}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                        {choice.text}
                      </div>
                      {choice.subtext && (
                        <div className="text-xs text-slate-400 group-hover:text-slate-300 mt-1 leading-normal">
                          {choice.subtext}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-col text-center"
            >
              {/* Badge & Title */}
              <div className="mb-2 flex justify-center">
                <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold tracking-wider">
                  {archetype.badge}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {archetype.title}
              </h1>

              <div className="text-xs text-slate-400 font-mono mb-4">
                {archetype.subtitle}
              </div>

              <div className="italic text-amber-200/90 text-sm sm:text-base font-serif mb-6 px-4">
                {archetype.quote}
              </div>

              {/* Diagnosis Box */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-left mb-6 shadow-xl">
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Seu Perfil Bioético:
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {archetype.diagnosis}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-3">
                <button
                  id="share-btn"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{copied ? 'Copiado!' : 'Compartilhar'}</span>
                </button>

                <button
                  id="restart-btn"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col items-center text-center shadow-2xl">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-1">
              Participar no Celular
            </div>
            <h2 className="text-lg font-bold text-white mb-4">
              Escaneie o QR Code
            </h2>

            <div className="p-3 bg-white rounded-2xl shadow-xl mb-4">
              <QRCodeSVG
                value={typeof window !== 'undefined' ? window.location.href : 'https://ai.studio'}
                size={180}
                level="M"
              />
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Abra a câmera do celular para responder diretamente no seu aparelho.
            </p>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
