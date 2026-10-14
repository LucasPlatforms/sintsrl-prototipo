export interface HeroStat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  qualifications?: { text: string; bold?: string }[];
}

export const hero = {
  eyebrow: '',
  title: ['Titolo', 'titolo.'],//'Proteggiamo ciò', 'che conta.'
  copy: 'Progettiamo la sicurezza di luoghi, persone e sistemi con competenza tecnica.', //Progettiamo la sicurezza di luoghi, persone e sistemi con competenza tecnica e una visione sempre concreta.
  ctaPrimary: 'I nostri servizi',
  ctaSecondary: 'I nostri clienti',

  stats: [
    { value: '1990', label: 'anno di fondazione' },
  ] as HeroStat[],
};

export const azienda = {
  kicker: 'L\'azienda',
  heading: ['La conoscenza è la', 'chiave del successo.'],
  paragraphs: [
    { text: "SINT nasce nel gennaio 1990 per rispondere alle problematiche della sicurezza, grazie alle conoscenze accumulate dal suo fondatore, MARIO VAGO, che negli anni precedenti aveva ricoperto incarichi di Responsabile in importanti industrie del settore.", bold: "MARIO VAGO"},
    { text: "SINT, oggi, opera nello studio, la progettazione, la realizzazione e l'implementazione di interventi speciali di Sicurezza globale, impianti elettrici e di climatizzazione volti alla riduzione del rischio ed al contenimento dei costi."},
  ],
  partnership: 'In partnership con Leviton, produttore globale certificato, per soluzioni di cabling e networking.',
};

export const team: TeamMember[] = [
  { name: 'Laura Bramanti', role: 'Amministratore unico' },
  {
    name: 'Ing. Daniele Asnaghi',
    role: 'Direttore tecnico',
    qualifications: [
      { text: "Membro dell'elenco Nazionale italiano degli esperti di Prevenzione incendi", bold: "Prevenzione incendi" },
      { text: "Membro dell'elenco della regione Lombardia degli esperti per la Verifica degli impianti elettrici e meccanici", bold: "Verifica degli impianti elettrici e meccanici" },
      { text: "Membro dell'elenco dei Collaudatori della Regione Lombardia", bold: "Collaudatori della Regione Lombardia" },
      { text: "Membro dell'elenco Nazionale degli esperti per la stesura dei piani per la sicurezza nei cantieri", bold: "sicurezza nei cantieri" },
      { text: "Membro dell'elenco della regione Lombardia degli esperti Certificatori in materia Energetica", bold: "Certificatori in materia Energetica" },
    ],
  },
  { name: 'Ing. Stefano Galli', role: 'Progettista strutturale, direzione lavori e coordinamento della sicurezza' },
  { name: 'Ing. Dario Sormani', role: 'Progettista hardware ponti radio e componenti per satelliti' },
  { name: 'Arch. Giusi Valente', role: 'Pratiche di prevenzione incendi: CPI, permessistica' },
  { name: 'Arch. Katia Palena', role: 'Stesura computi metrici, disciplinari di gara, disegnatore CAD' },
  { name: 'Ing. Arch. Annamaria Seveso', role: 'Progettista architettonico, strutturale e di restauro' },
  { name: 'Arch. Pierluca Arosio', role: 'Progettista architettonico e pianificatore urbano' },
];

export const chiSiamoPage = {
  kicker: 'Chi siamo',
  heading: ['Persone, metodo', 'e competenza tecnica.'],
  subheading: 'SINT S.r.l. — sicurezza globale dal 1990',
};

export const contattiSection = {
  kicker: 'Contatti',
  heading: ['Titolo', 'titolo.'],
  copy: 'La nostra sede operativa è a Meda. Lavoriamo in tutta Italia.',
  mapsLabel: 'Apri su Google Maps',
  panelKicker: 'Parliamo del tuo progetto',
  panelHeading: ['Titolo', 'titolo.'],
};
