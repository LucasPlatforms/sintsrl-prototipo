export interface HeroStat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualifications?: string[];
}

export const hero = {
  eyebrow: 'Sicurezza, metodo, visione',
  title: ['Proteggiamo ciò', 'che conta.'],
  copy: 'Progettiamo la sicurezza di luoghi, persone e sistemi con competenza tecnica e una visione sempre concreta.',
  ctaPrimary: 'Scopri cosa facciamo',
  ctaSecondary: 'I nostri clienti',
  aside: 'Scorri per conoscere SINT',
  stats: [
    { value: '1990', label: 'anno di fondazione' },
    { value: '+30', label: 'anni di esperienza' },
    { value: '360°', label: 'visione del progetto' },
  ] as HeroStat[],
};

export const azienda = {
  kicker: '01 — L\'azienda',
  heading: ['La conoscenza è la', 'chiave del successo.'],
  paragraphs: [
    'SINT nasce nel gennaio 1990 per rispondere alle problematiche della sicurezza, grazie alle conoscenze accumulate dal suo fondatore, MARIO VAGO, che negli anni precedenti aveva ricoperto incarichi di Responsabile in importanti industrie del settore.',
    'SINT, oggi, opera nello studio, la progettazione, la realizzazione e l\'implementazione di interventi speciali di Sicurezza globale, impianti elettrici e di climatizzazione volti alla riduzione del rischio ed al contenimento dei costi.',
  ],
  principles: ['Competenza', 'Responsabilità', 'Affidabilità'],
  partnership: 'In partnership con Leviton, produttore globale certificato, per soluzioni di cabling e networking.',
};

export const team: TeamMember[] = [
  { name: 'Laura Bramanti', role: 'Amministratore unico' },
  {
    name: 'Ing. Daniele Asnaghi',
    role: 'Direttore tecnico',
    qualifications: [
      "Membro dell'elenco Nazionale italiano degli esperti di Prevenzione incendi",
      "Membro dell'elenco della regione Lombardia degli esperti per la Verifica degli impianti elettrici e meccanici",
      "Membro dell'elenco dei Collaudatori della Regione Lombardia",
      "Membro dell'elenco Nazionale degli esperti per la stesura dei piani per la sicurezza nei cantieri",
      "Membro dell'elenco della regione Lombardia degli esperti Certificatori in materia Energetica",
    ],
  },
  { name: 'Ing. Stefano Galli', role: 'Progettazione strutturale, direzione lavori e coordinamento della sicurezza' },
  { name: 'Ing. Dario Sormani', role: 'Progettazione hardware di ponti radio e componenti per satelliti' },
  { name: 'Arch. Giusi Valente', role: 'Pratiche di prevenzione incendi e permessi' },
  { name: 'Arch. Katia Palena', role: 'Computi metrici, disciplinari di gara e disegno CAD' },
  { name: 'Ing. Arch. Annamaria Seveso', role: 'Progettazione architettonica, strutturale e di restauro' },
  { name: 'Arch. Pierluca Arosio', role: 'Progettazione architettonica e pianificazione urbana' },
];

export const contattiSection = {
  kicker: '04 — Dove siamo',
  heading: ['Vicini alle', 'tue esigenze.'],
  copy: 'La nostra sede operativa è a Meda, nel cuore della Brianza. Lavoriamo in tutta Italia.',
  mapsLabel: 'Apri su Google Maps',
  panelKicker: 'Parliamo del tuo progetto',
  panelHeading: ['Ogni progetto sicuro', 'inizia da una conversazione.'],
};
