import React from 'react';

interface SceneIllustrationProps {
  sceneId: number;
}

export const SceneIllustration: React.FC<SceneIllustrationProps> = ({ sceneId }) => {
  if (sceneId === 1) {
    // Scene 1: Emergency, Antivenom Vial & Snake
    return (
      <svg viewBox="0 0 600 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="amberGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <radialGradient id="aura1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="600" height="240" rx="16" fill="url(#bgGrad1)" />
        <circle cx="300" cy="120" r="100" fill="url(#aura1)" />

        {/* Minimalist Grid / Soundwave lines */}
        <path d="M50 180 Q 150 170 300 180 T 550 180" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Stylized Snake Sinusoid Curve (Left to Center) */}
        <path
          d="M 120 160 C 140 100, 180 80, 210 130 C 240 180, 270 140, 290 120"
          stroke="#f43f5e"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="120" cy="160" r="4" fill="#fb7185" />
        <circle cx="210" cy="130" r="3" fill="#fda4af" />

        {/* Medical Antivenom Vial in Center */}
        <g transform="translate(280, 50)">
          {/* Outer Glass Vial */}
          <rect x="0" y="25" width="40" height="90" rx="6" stroke="#94a3b8" strokeWidth="2" fill="#0f172a" fillOpacity="0.6" />
          {/* Vial Cap & Neck */}
          <rect x="12" y="10" width="16" height="15" rx="2" fill="#64748b" />
          <rect x="8" y="5" width="24" height="6" rx="2" fill="#f59e0b" />
          {/* Amber Serum Liquid */}
          <rect x="4" y="55" width="32" height="55" rx="4" fill="url(#liquidGrad)" />
          {/* Label */}
          <rect x="4" y="45" width="32" height="25" rx="1" fill="#f8fafc" fillOpacity="0.9" />
          <line x1="8" y1="52" x2="32" y2="52" stroke="#d97706" strokeWidth="2" />
          <line x1="8" y1="58" x2="26" y2="58" stroke="#64748b" strokeWidth="1.5" />
          <line x1="8" y1="63" x2="22" y2="63" stroke="#94a3b8" strokeWidth="1" />
          {/* Glow reflection */}
          <line x1="6" y1="30" x2="6" y2="105" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </g>

        {/* Medical Cross Minimalist Accent */}
        <g transform="translate(420, 100)" opacity="0.7">
          <circle cx="20" cy="20" r="28" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x="16" y="8" width="8" height="24" rx="2" fill="#38bdf8" />
          <rect x="8" y="16" width="24" height="8" rx="2" fill="#38bdf8" />
        </g>

        {/* Subtle 3h countdown badge */}
        <g transform="translate(30, 25)">
          <rect width="110" height="26" rx="13" fill="#881337" fillOpacity="0.6" stroke="#f43f5e" strokeWidth="1" />
          <circle cx="16" cy="13" r="4" fill="#fb7185" />
          <text x="28" y="17" fill="#ffe4e6" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">
            03:00 RESTANTES
          </text>
        </g>
      </svg>
    );
  }

  if (sceneId === 2) {
    // Scene 2: The Farm, Horses & Antibody Science
    return (
      <svg viewBox="0 0 600 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="emeraldAura" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="600" height="240" rx="16" fill="url(#bgGrad2)" />
        <circle cx="240" cy="120" r="110" fill="url(#emeraldAura)" />

        {/* Pasture Horizon line */}
        <path d="M 0 190 Q 200 175 400 190 T 600 185" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Minimalist Vector Silhouette of a Noble Horse */}
        <g transform="translate(140, 60)" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Horse Head & Mane Profile */}
          <path d="M 90 120 C 85 90, 75 75, 60 55 C 55 48, 48 40, 38 42 C 32 43, 26 48, 20 54 C 14 60, 5 62, 5 66 C 5 70, 15 72, 22 70 C 26 77, 34 95, 45 120" />
          {/* Horse Ears */}
          <path d="M 58 54 L 64 36 L 70 50" fill="#334155" />
          <path d="M 68 50 L 76 34 L 80 48" fill="#334155" />
          {/* Eye */}
          <circle cx="42" cy="58" r="2.5" fill="#f8fafc" stroke="none" />
          {/* Muzzle / Breath */}
          <path d="M 6 66 Q 0 68 2 74 Q 10 76 18 72" />
        </g>

        {/* Molecular / Antibody Y-Shape Minimalist Graph on the Right */}
        <g transform="translate(380, 55)">
          {/* Antibody (IgG) Graphic Symbol */}
          <path d="M 60 120 L 60 70 M 60 70 L 30 30 M 60 70 L 90 30" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
          <circle cx="30" cy="30" r="8" fill="#059669" stroke="#6ee7b7" strokeWidth="2" />
          <circle cx="90" cy="30" r="8" fill="#059669" stroke="#6ee7b7" strokeWidth="2" />
          <circle cx="60" cy="120" r="6" fill="#10b981" />

          {/* Connected bio-network dots */}
          <line x1="30" y1="30" x2="0" y2="10" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="0" cy="10" r="4" fill="#38bdf8" />
          <line x1="90" y1="30" x2="120" y2="15" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="120" cy="15" r="4" fill="#38bdf8" />
        </g>

        {/* Badge */}
        <g transform="translate(30, 25)">
          <rect width="115" height="26" rx="13" fill="#064e3b" fillOpacity="0.8" stroke="#10b981" strokeWidth="1" />
          <circle cx="16" cy="13" r="4" fill="#34d399" />
          <text x="28" y="17" fill="#d1fae5" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">
            MESES DEPOIS
          </text>
        </g>
      </svg>
    );
  }

  // Scene 3: The Vote, Scale of Justice & Future Law
  return (
    <svg viewBox="0 0 600 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#311042" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <radialGradient id="indigoAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="600" height="240" rx="16" fill="url(#bgGrad3)" />
      <circle cx="300" cy="120" r="100" fill="url(#indigoAura)" />

      {/* Minimalist Balance Scale of Justice (Bioethics vs Survival) */}
      <g transform="translate(230, 45)">
        {/* Base and Central Pillar */}
        <line x1="70" y1="30" x2="70" y2="140" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40 140 L 100 140" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="30" r="6" fill="#f59e0b" />

        {/* Balance Beam (Slight tilt for tension) */}
        <line x1="10" y1="45" x2="130" y2="35" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" />

        {/* Left Pan (Human Health / Serum) */}
        <line x1="15" y1="46" x2="0" y2="85" stroke="#64748b" strokeWidth="1.5" />
        <line x1="15" y1="46" x2="30" y2="85" stroke="#64748b" strokeWidth="1.5" />
        <path d="M -5 85 Q 15 100 35 85 Z" fill="#ef4444" fillOpacity="0.4" stroke="#f87171" strokeWidth="1.5" />

        {/* Right Pan (Animal Welfare & Monoclonals) */}
        <line x1="125" y1="36" x2="110" y2="75" stroke="#64748b" strokeWidth="1.5" />
        <line x1="125" y1="36" x2="140" y2="75" stroke="#64748b" strokeWidth="1.5" />
        <path d="M 105 75 Q 125 90 145 75 Z" fill="#8b5cf6" fillOpacity="0.4" stroke="#c084fc" strokeWidth="1.5" />
      </g>

      {/* Modern Decision Checkmark and Ballot Box Silhouette on Left */}
      <g transform="translate(70, 75)" opacity="0.8">
        <rect x="0" y="0" width="60" height="75" rx="8" stroke="#a855f7" strokeWidth="2" fill="#1e1b4b" />
        <line x1="12" y1="18" x2="48" y2="18" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="30" x2="40" y2="30" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="50" r="7" stroke="#34d399" strokeWidth="2" />
        <path d="M 15 50 L 17 53 L 23 46" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* DNA Helix / Synthetic Future Technology on Right */}
      <g transform="translate(450, 70)" opacity="0.85">
        <path d="M 20 0 Q 50 25 20 50 T 20 100" stroke="#38bdf8" strokeWidth="2" fill="none" />
        <path d="M 50 0 Q 20 25 50 50 T 50 100" stroke="#a855f7" strokeWidth="2" fill="none" />
        <line x1="28" y1="15" x2="42" y2="15" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="20" y1="50" x2="50" y2="50" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="28" y1="85" x2="42" y2="85" stroke="#e2e8f0" strokeWidth="1.5" />
      </g>

      {/* Badge */}
      <g transform="translate(30, 25)">
        <rect width="130" height="26" rx="13" fill="#4c1d95" fillOpacity="0.8" stroke="#a855f7" strokeWidth="1" />
        <circle cx="16" cy="13" r="4" fill="#c084fc" />
        <text x="28" y="17" fill="#f3e8ff" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">
          DECISÃO POLÍTICA
        </text>
      </g>
    </svg>
  );
};
