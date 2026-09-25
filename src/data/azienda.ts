export interface HeroStat {
  value: string;
  label: string;
}

export const hero = {
  eyebrow: 'Sicurezza, metodo, visione',
  title: ['Proteggiamo ciò', 'che conta.'],
  copy: 'Progettiamo la sicurezza di luoghi, persone e sistemi con competenza tecnica e una visione sempre concreta.',
  ctaPrimary: 'Scopri cosa facciamo',
  ctaSecondary: 'I nostri clienti',
  aside: 'SCORRI PER CONOSCERE SINT',
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
    'SINT, oggi, si propone come Azienda leader del mercato italiano nello studio, la progettazione, la realizzazione e l\'implementazione di interventi speciali di Sicurezza globale, impianti elettrici e di climatizzazione volti alla riduzione del rischio ed al contenimento dei costi.',
  ],
  principles: ['Competenza', 'Responsabilità', 'Affidabilità'],
};

export const contattiSection = {
  kicker: '04 — Dove siamo',
  heading: ['Vicini alle', 'tue esigenze.'],
  copy: 'La nostra sede operativa è a Meda, nel cuore della Brianza. Lavoriamo in tutta Italia.',
  mapsLabel: 'Apri su Google Maps',
  panelKicker: 'Parliamo del tuo progetto',
  panelHeading: ['Ogni progetto sicuro', 'inizia da una conversazione.'],
};
