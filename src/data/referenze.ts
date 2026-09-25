export interface CaseStudy {
  number: string;
  client: string;
  description: string;
  image: string;
  alt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    number: '01',
    client: 'Petronas LUBRIFICANTI ITALIA',
    description:
      'Realizzazione del sistema di videosorveglianza e di protezione perimetrale per i siti di Villastellone e Santena (TO)',
    image:
      'https://images.pexels.com/photos/38217230/pexels-photo-38217230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sala di controllo industriale con pannelli elettrici',
  },
  {
    number: '02',
    client: 'Salvatore Ferragamo',
    description:
      'Building automation per la sede e i punti vendita: gestione accessi, videosorveglianza e supervisione centralizzata.',
    image:
      'https://images.pexels.com/photos/558630/pexels-photo-558630.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Edificio moderno con telecamera di sorveglianza',
  },
  {
    number: '03',
    client: 'Terna',
    description:
      'Supervisione regionale e nazionale dei sistemi di sicurezza su siti distribuiti, con reporting centralizzato e adeguamento normativo.',
    image:
      'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Server rack con illuminazione blu in data center',
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

export const referenzeIntro = {
  kicker: '03 — Case study',
  heading: ['Scelti da chi', 'non può rischiare.'],
  description:
    'Non un elenco di loghi, ma storie concrete. Ogni progetto racconta come abbiamo trasformato un\'esigenza di sicurezza in un sistema funzionante e verificato.',
};
