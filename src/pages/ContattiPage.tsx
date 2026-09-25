import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import ContactForm from '@/components/ContactForm';
import { contattiSection } from '@/data/azienda';
import { contatti, mapsLink } from '@/data/contatti';

export default function ContattiPage() {
  return (
    <>
      <PageMeta
        title="Contatti — SINT S.r.l."
        description="Contatta SINT S.r.l. a Meda (MB). Telefono, email e modulo di contatto per parlare del tuo progetto."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">{contattiSection.kicker}</div>
          <h1>
            {contattiSection.heading[0]}<br /><span>{contattiSection.heading[1]}</span>
          </h1>
          <p className="page-hero__description">{contattiSection.copy}</p>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <div className="location-card">
            <div className="location-pin">
              <MapPin size={22} />
            </div>
            <h2 className="contact-heading">
              {contatti.ragioneSociale}
            </h2>
            <div className="contact-links contact-links--light">
              <a href={`mailto:${contatti.email}`}>
                <Mail size={18} /> {contatti.email}
              </a>
              <a href={contatti.telefonoLink}>
                <Phone size={18} /> {contatti.telefono}
              </a>
            </div>
            <div className="address address--light">
              <MapPin size={17} />
              <span>
                {contatti.indirizzo}<br />
                {contatti.cap} {contatti.citta} ({contatti.provincia})
              </span>
            </div>
            <a
              className="text-link text-link--light"
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
            >
              {contattiSection.mapsLabel} <ArrowUpRight size={17} />
            </a>
            <p className="piva-line">P.IVA e C.F. {contatti.piva}</p>
          </div>
          <div className="contact-panel">
            <p className="section-kicker">{contattiSection.panelKicker}</p>
            <h3>
              {contattiSection.panelHeading[0]}<br /><em>{contattiSection.panelHeading[1]}</em>
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
