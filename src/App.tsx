import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react';

const services = [
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

const featuredClients = [
  { name: 'Petronas', category: 'Energia & industria' },
  { name: 'Salvatore Ferragamo', category: 'Moda & retail' },
  { name: 'Milanosport', category: 'Sport & cultura' },
  { name: 'Sogemi', category: 'Agroalimentare' },
  { name: 'IKEA', category: 'Retail' },
  { name: 'Comune di Milano', category: 'Pubblica amministrazione' },
  { name: 'Bosch', category: 'Tecnologia' },
  { name: 'Terna', category: 'Infrastrutture' },
];

const clientNames = [
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

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`brand-mark ${inverse ? 'brand-mark--inverse' : ''}`}
      href="#top"
      aria-label="Sint Srl home"
    >
      <span className="brand-mark__symbol">
        <span>S</span>
        <span className="brand-mark__dot" />
      </span>
      <span className="brand-mark__name">INT</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav
            className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}
            aria-label="Navigazione principale"
          >
            <a href="#azienda" onClick={closeMenu}>Azienda</a>
            <a href="#servizi" onClick={closeMenu}>Cosa facciamo</a>
            <a href="#clienti" onClick={closeMenu}>Clienti</a>
            <a href="#contatti" onClick={closeMenu}>Dove siamo</a>
            <a className="nav-cta" href="#contatti" onClick={closeMenu}>
              Parliamone <ArrowUpRight size={16} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Sicurezza, metodo, visione
            </div>
            <h1>
              Proteggiamo ciò<br /><em>che conta.</em>
            </h1>
            <p className="hero-copy">
              Progettiamo la sicurezza di luoghi, persone e sistemi con competenza
              tecnica e una visione sempre concreta.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#servizi">
                Scopri cosa facciamo <MoveRight size={18} />
              </a>
              <a className="text-link" href="#clienti">
                I nostri clienti <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>1990</strong>
                <span>anno di fondazione</span>
              </div>
              <div>
                <strong>+30</strong>
                <span>anni di esperienza</span>
              </div>
              <div>
                <strong>360°</strong>
                <span>visione del progetto</span>
              </div>
            </div>
          </div>
          <div className="hero-aside">
            <span>SCORRI PER CONOSCERE SINT</span>
            <div />
          </div>
        </section>

        {/* AZIENDA */}
        <section className="section intro" id="azienda">
          <div className="container intro-grid">
            <div className="section-kicker">01 — L'azienda</div>
            <div className="intro-main">
              <h2>
                La conoscenza è la<br /><span>chiave del successo.</span>
              </h2>
              <div className="intro-text-grid">
                <p>
                  SINT nasce nel gennaio 1990 per rispondere alle problematiche della
                  sicurezza, grazie alle conoscenze accumulate dal suo
                  fondatore, MARIO VAGO, che negli anni precedenti aveva ricoperto incarichi di Responsabile in importanti industrie del settore.
                </p>
                <p>
                  SINT, oggi, si propone come Azienda leader del mercato italiano nello studio, la progettazione, la realizzazione e l'implementazione di interventi speciali di Sicurezza globale, impianti elettrici e di climatizzazione volti alla riduzione del rischio ed al contenimento dei costi.

                </p>
              </div>
              <div className="principles">
                <span><Check size={16} /> Competenza</span>
                <span><Check size={16} /> Responsabilità</span>
                <span><Check size={16} /> Affidabilità</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIZI */}
        <section className="section section--dark" id="servizi">
          <div className="container">
            <div className="section-heading section-heading--light">
              <div className="section-kicker">02 — Cosa facciamo</div>
              <div>
                <h2>
                  La sicurezza,<br /><span>progettata bene.</span>
                </h2>
                <div className="intro-text-grid">
                <p>
                  I principali settori in cui opera SINT sono:
difese di tipo strutturale sistemi antintrusione, antincendio, TVCC, controllo accessi
integrazione tra le funzionalità ed i controlli degli impianti tecnologici e la sicurezza,
progettazione antenne o stazioni radio base e centrali telefoniche, sistemi
computerizzati di supervisione locale, regionale e nazionale, adeguamento alle
normative vigenti.

                </p>
                  <p>Inoltre, SINT provvede alla Progettazione e Direzione Lavori di opere architettoniche -
opere residenziali, commerciali, produttive, opere strutturali e antisismiche, impianti
elettrici e speciali, impianti meccanici di condizionamento, opere antincendio,
impianti di aspirazione fumi, compreso il coordinamento della sicurezza in fase di
progettazione ed esecuzione.</p>
                </div>
              </div>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span>{service.number}</span>
                    <ArrowUpRight size={19} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTI */}
        <section className="section clients" id="clienti">
          <div className="container">
            <div className="clients-header">
              <div>
                <div className="section-kicker">03 — Clienti</div>
                <h2>
                  Scelti da chi<br /><span>non può rischiare.</span>
                </h2>
              </div>
              <p>
                Negli anni abbiamo affiancato aziende, enti e organizzazioni in
                progetti complessi. La fiducia dei nostri clienti è il risultato
                più importante.
              </p>
            </div>
            <div className="featured-client-grid">
              {featuredClients.map((client, index) => (
                <article
                  className={`client-card ${index === 0 ? 'client-card--accent' : ''}`}
                  key={client.name}
                >
                  <span className="client-index">0{index + 1}</span>
                  <h3>{client.name}</h3>
                  <p>{client.category}</p>
                  <ArrowUpRight size={20} />
                </article>
              ))}
            </div>
            <div className="client-list-wrap">
              <p className="client-list-label">Tra le altre realtà che ci hanno scelto</p>
              <div className="client-list">
                {clientNames.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTATTI / DOVE SIAMO */}
        <section className="section location" id="contatti">
          <div className="container location-grid">
            <div className="location-card">
              <div className="location-pin">
                <MapPin size={22} />
              </div>
              <p className="section-kicker">04 — Dove siamo</p>
              <h2>
                Vicini alle<br /><span>tue esigenze.</span>
              </h2>
              <p className="location-copy">
                La nostra sede operativa è a Meda, nel cuore della Brianza.
                Lavoriamo in tutta Italia.
              </p>
              <a
                className="text-link text-link--light"
                href="https://maps.google.com/?q=Via+Solferino+81+Meda"
                target="_blank"
                rel="noreferrer"
              >
                Apri su Google Maps <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-panel">
              <p className="section-kicker">Parliamo del tuo progetto</p>
              <h3>
                Ogni progetto sicuro<br />inizia da una <em>conversazione.</em>
              </h3>
              <div className="contact-links">
                <a href="mailto:info@sintsrl.it">
                  <Mail size={18} /> info@sintsrl.it
                </a>
                <a href="tel:+390362154593">
                  <Phone size={18} /> 0362 154593
                </a>
              </div>
              <div className="address">
                <MapPin size={17} />
                <span>
                  SINT S.r.l.<br />Via Solferino, 81 — 20821 Meda (MB)
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <BrandMark inverse />
          <div className="footer-note">
            <span><ShieldCheck size={16} /> Sicurezza con metodo</span>
            <span>© {new Date().getFullYear()} Sint S.r.l.</span>
          </div>
          <a href="#top" className="back-top">
            Torna su <ChevronDown size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
