export interface Service {
  title: string;
  text: string;
}

export interface StructuredParagraph {
  lead: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Risk management',
    text: 'Studio delle strategie di sicurezza per identificare tutti i principali rischi, ricercando soluzioni integrate in grado di soddisfare le diverse esigenze evidenziate.',
  },
  {
    title: 'Building automation',
    text: 'Studio di fattibilità degli interventi di automatizzazione, sulla base delle reali esigenze operative degli Utenti, per giungere al progetto esecutivo degli apprestamenti.',
  },
  {
    title: 'Cabling & networking',
    text: 'In partnership con Leviton (produttore globale certificato) progettiamo e realizziamo soluzioni cabling e networking. Un servizio tecnico diretto alla progettazione impiantistica integrata.',
  },
  {
    title: 'Collaudi',
    text: 'SINT fornisce la gestione dell\'insieme delle operazioni atte a sancire la consistenza ed il funzionamento di tutte le parti delle forniture, così come sono state commissionate dal Cliente con redazione, durante ogni fase, dei verbali previsti.',
  },
  {
    title: 'Supervisione e Direzione lavori',
    text: 'SINT assume la piena responsabilità del controllo e del coordinamento dell\'attività realizzativa da parte delle Aziende incaricate dell\'esecuzione delle opere, sostituendo a tutti gli effetti la Committente nella gestione dei rapporti contrattuali.',
  },
  {
    title: 'Capitolati d\'Appalto/confronto offerte',
    text: 'Si tratta della fase, (estremamente importante per una corretta scelta dei Fornitori) di stesura, in maniera precisa ed univoca, delle specifiche tecniche e funzionali degli apprestamenti da realizzare.',
  },
  {
    title: 'Progetti Impianti',
    text: 'Progettazione civile, industriale degli impianti di sicurezza, elettrici e di controllo tecnologico, nel rispetto di consolidati standards aziendali e secondo le più avanzate e diffuse normative.',
  },
  {
    title: 'Centralizzazione Impianti',
    text: 'Nei progetti di centralizzazione dei sistemi di sicurezza integrati SINT ha acquisito esperienze numerose e qualificanti, che la rendono un punto di riferimento per questa problematica in Italia.',
  },
];

export const serviziIntro = {
  kicker: '02 — Cosa facciamo',
  heading: ['La sicurezza,', 'progettata bene.'],
  paragraphs: [
    {
      lead: 'I principali settori di SINT:',
      items: [
        'Sicurezza strutturale: Antintrusione, antincendio, TVCC e controllo accessi.',
        'Integrazione tra le funzionalità ed i controlli degli impianti tecnologici e la sicurezza.',
        'Telecomunicazioni: Progettazione antenne, stazioni radio base e centrali telefoniche.',
        'Supervisione e compliance: Sistemi di supervisione locale, regionale e nazionale, adeguamento alle normative vigenti.',
      ],
    },
    {
      lead: 'SINT cura anche progettazione e direzione lavori per:',
      items: [
        'Edilizia e Strutture: Opere residenziali, commerciali, produttive e interventi antisismici.',
        'Impiantistica: Elettrica e speciale, meccanica di condizionamento, antincendio e aspirazione fumi.',
        'Sicurezza: Coordinamento in fase di progettazione ed esecuzione.',
      ],
    },
  ] as StructuredParagraph[],
};
