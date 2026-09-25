import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { contattiSection } from '@/data/azienda';
import { contatti, mapsLink } from '@/data/contatti';

export default function ContattiSection() {
  return (
    <section className="section location" id="contatti">
      <div className="container location-grid">
        <div className="location-card">
          <div className="location-pin">
            <MapPin size={22} />
          </div>
          <p className="section-kicker">{contattiSection.kicker}</p>
          <h2>
            {contattiSection.heading[0]}<br /><span>{contattiSection.heading[1]}</span>
          </h2>
          <p className="location-copy">{contattiSection.copy}</p>
          <a
            className="text-link text-link--light"
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
          >
            {contattiSection.mapsLabel} <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="contact-panel">
          <p className="section-kicker">{contattiSection.panelKicker}</p>
          <h3>
            {contattiSection.panelHeading[0]}<br /><em>{contattiSection.panelHeading[1]}</em>
          </h3>
          <div className="contact-links">
            <a href={`mailto:${contatti.email}`}>
              <Mail size={18} /> {contatti.email}
            </a>
            <a href={contatti.telefonoLink}>
              <Phone size={18} /> {contatti.telefono}
            </a>
          </div>
          <div className="address">
            <MapPin size={17} />
            <span>
              {contatti.ragioneSociale}<br />
              {contatti.indirizzo} — {contatti.cap} {contatti.citta} ({contatti.provincia})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
