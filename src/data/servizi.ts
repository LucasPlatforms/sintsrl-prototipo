export interface Service {
  number: string;
  title: string;
  text: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Risk management',
    text: 'Studio delle strategie di sicurezza per identificare tutti i principali rischi, ricercando soluzioni integrate in grado di soddisfare le diverse esigenze evidenziate.',
  },
  {
    number: '02',
    title: 'Building automation',
    text: 'Studio di fattibilità degli interventi di automatizzazione, sulla base delle reali esigenze operative degli Utenti, per giungere al progetto esecutivo degli apprestamenti.',
  },
  {
    number: '03',
    title: 'Cabling & networking',
    text: 'In partnership con Leviton (produttore globale certificato) progettiamo e realizziamo soluzioni cabling e networking. Un servizio tecnico diretto alla progettazione impiantistica integrata.',
  },
  {
    number: '04',
    title: 'Collaudi',
    text: 'SINT fornisce la gestione dell\'insieme delle operazioni atte a sancire la consistenza ed il funzionamento di tutte le parti delle forniture, così come sono state commissionate dal Cliente con redazione, durante ogni fase, dei verbali previsti.',
  },
  {
    number: '05',
    title: 'Supervisione e Direzione lavori',
    text: 'SINT assume la piena responsabilità del controllo e del coordinamento dell\'attività realizzativa da parte delle Aziende incaricate dell\'esecuzione delle opere, sostituendo a tutti gli effetti la Committente nella gestione dei rapporti contrattuali.',
  },
  {
    number: '06',
    title: 'Capitolati d\'Appalto/confronto offerte',
    text: 'Si tratta della fase, (estremamente importante per una corretta scelta dei Fornitori) di stesura, in maniera precisa ed univoca, delle specifiche tecniche e funzionali degli apprestamenti da realizzare.',
  },
  {
    number: '07',
    title: 'Progetti Impianti',
    text: 'Progettazione civile, industriale degli impianti di sicurezza, elettrici e di controllo tecnologico, nel rispetto di consolidati standards aziendali e secondo le più avanzate e diffuse normative.',
  },
  {
    number: '08',
    title: 'Centralizzazione Impianti',
    text: 'Nei progetti di centralizzazione dei sistemi di sicurezza integrati SINT ha acquisito esperienze talmente numerose e qualificanti, da farne di fatto l\'unica Società di consulenza oggi operante su tale problematica in concreto in Italia.',
  },
];

export const serviziIntro = {
  kicker: '02 — Cosa facciamo',
  heading: ['La sicurezza,', 'progettata bene.'],
  paragraphs: [
    'I principali settori in cui opera SINT sono: difese di tipo strutturale sistemi antintrusione, antincendio, TVCC, controllo accessi integrazione tra le funzionalità ed i controlli degli impianti tecnologici e la sicurezza, progettazione antenne o stazioni radio base e centrali telefoniche, sistemi computerizzati di supervisione locale, regionale e nazionale, adeguamento alle normative vigenti.',
    'Inoltre, SINT provvede alla Progettazione e Direzione Lavori di opere architettoniche - opere residenziali, commerciali, produttive, opere strutturali e antisismiche, impianti elettrici e speciali, impianti meccanici di condizionamento, opere antincendio, impianti di aspirazione fumi, compreso il coordinamento della sicurezza in fase di progettazione ed esecuzione.',
  ],
};
