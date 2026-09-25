import { Check } from 'lucide-react';
import { azienda } from '@/data/azienda';

export default function AziendaSection() {
  return (
    <section className="section intro" id="azienda">
      <div className="container intro-grid">
        <div className="section-kicker">{azienda.kicker}</div>
        <div className="intro-main">
          <h2>
            {azienda.heading[0]}<br /><span>{azienda.heading[1]}</span>
          </h2>
          <div className="intro-text-grid">
            {azienda.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="principles">
            {azienda.principles.map((principle) => (
              <span key={principle}><Check size={16} /> {principle}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
