export interface Choice {
  id: 'A' | 'B' | 'C';
  text: string;
  subtext?: string;
}

export interface QuestionScene {
  id: number;
  timeTag: string;
  title: string;
  narrative: string;
  theme: 'amber' | 'emerald' | 'indigo';
  choices: Choice[];
}

export interface ArchetypeProfile {
  id: string;
  title: string;
  subtitle: string;
  diagnosis: string;
  quote: string;
  badge: string;
  theme: string;
}
