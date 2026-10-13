export interface CaseStudy {
  client: string;
  description: string;
  image: string;
  alt: string;
  settore: string;
}

export const caseStudies: CaseStudy[] = [
  {
    client: 'Petronas',
    description:
      'Sicurezza integrata per un sito energetico: antintrusione, TVCC, controllo accessi e centralizzazione impianti.',
    image: '/Petronas_logo.svg',
    alt: 'Logo Petronas',
    settore: 'Energia',
  },
  {
    client: 'Salvatore Ferragamo',
    description:
      'Building automation per la sede e i punti vendita: gestione accessi, videosorveglianza e supervisione centralizzata.',
    image:
      '',
    alt: 'Logo Ferragamo',
    settore: 'Retail',
  },
  {
    client: 'Terna',
    description:
      'Supervisione regionale e nazionale dei sistemi di sicurezza su siti distribuiti, con reporting centralizzato e adeguamento normativo.',
    image:
      '',
    alt: 'Logo Terna',
    settore: 'Energia',
  },
];

export const clientNames: string[] = [
  'Poste Italiane',
  'Siemens',
  'Wind',
  'Enel',
  'Barilla',
  'Nordiconad',
  'SEA Milano Malpensa',
  'AXA ART',
  'RAS',
  'Helvetia',
  'Comune di Jesolo',
  'Comune di Vidigulfo',
  'Comune di Arosio',
  'Comune di Inverigo',
  'Italfarmaco',
  'N.G.S.',
  'Sanofi Aventis',
];

export const settori: string[] = ['Tutte', 'Energia', 'Retail', 'Trasporti', 'Pubblica amministrazione'];

export const clientiPage = {
  kicker: 'Clienti',
  heading: ['Scelti da chi', 'non può rischiare.'],
};

export const referenzeIntro = {
  kicker: 'Clienti',
  heading: ['Titolo', 'titolo.'],
};
