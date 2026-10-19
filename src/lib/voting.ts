import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { collection, doc, getFirestore, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
export const isVotingConfigured = Boolean(apiKey && projectId);
const app = isVotingConfigured ? initializeApp({ apiKey, projectId, authDomain: `${projectId}.firebaseapp.com`, projectId }) : null;
const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;
const pollId = import.meta.env.VITE_POLL_ID || 'seminario-2026';
let authPromise: Promise<string> | null = null;
async function anonymousUid(): Promise<string> {
  if (!auth) throw new Error('Firebase não configurado.');
  if (!authPromise) authPromise = (async () => {
    const result = auth.currentUser || (await signInAnonymously(auth)).user;
    return result.uid;
  })().catch(error => { authPromise = null; throw error; });
  return authPromise;
}
export async function submitVote(question: number, choice: 'A' | 'B' | 'C') {
  if (!db || ![1,2].includes(question)) throw new Error('Votação indisponível.');
  const uid = await anonymousUid();
  // One immutable document per anonymous user and question.
  await setDoc(doc(db, 'polls', pollId, 'votes', `${uid}_${question}`), {
    question, choice, createdAt: serverTimestamp()
  });
}
export function subscribeVotes(onChange: (totals: Record<number, Record<'A'|'B'|'C', number>>) => void, onError: (message: string) => void) {
  if (!db) return () => {};
  let unsubscribe = () => {};
  let cancelled = false;
  anonymousUid().then(() => {
    if (cancelled || !db) return;
    unsubscribe = onSnapshot(collection(db, 'polls', pollId, 'votes'), snapshot => {
      const counts: Record<number, Record<'A'|'B'|'C',number>> = { 1:{A:0,B:0,C:0}, 2:{A:0,B:0,C:0} };
      snapshot.forEach(item => { const vote=item.data(); if ((vote.question===1 || vote.question===2) && ['A','B','C'].includes(vote.choice)) counts[vote.question][vote.choice as 'A'|'B'|'C']++; });
      onChange(counts);
    }, () => onError('Não foi possível carregar os resultados. Verifique as regras do Firestore.'));
  }).catch(() => onError('Falha na autenticação anônima. Ative Anonymous no Firebase Authentication.'));
  return () => { cancelled=true;unsubscribe(); };
}
