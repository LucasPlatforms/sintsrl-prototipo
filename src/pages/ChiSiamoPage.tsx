import { Check } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { azienda, team, chiSiamoPage } from '@/data/azienda';

export default function ChiSiamoPage() {
  return (
    <>
      <PageMeta
        title="Chi siamo — SINT S.r.l."
        description="Storia, valori, partnership e team di SINT S.r.l. Dal 1990 nello studio e nella progettazione di sistemi di sicurezza globale."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">{chiSiamoPage.kicker}</div>
          <h1>
            {chiSiamoPage.heading[0]}<br /><span>{chiSiamoPage.heading[1]}</span>
          </h1>
          <p className="page-hero__subheading">{chiSiamoPage.subheading}</p>
        </div>
      </section>

      <section className="section intro">
        <div className="container intro-grid">
          <div className="section-kicker">Storia</div>
          <div className="intro-main">
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

      <section className="section section--dark">
        <div className="container">
          <div className="section-heading section-heading--light">
            <div className="section-kicker">Partnership</div>
            <div>
              <h2>
                Partnership<br /><span>Leviton</span>
              </h2>
              <div className="intro-text-grid">
                <p>{azienda.partnership}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container">
          <div className="section-kicker">Il team</div>
          <h2 className="page-section-title">
            Persone<br /><span>che fanno la differenza.</span>
          </h2>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-member" key={member.name}>
                <p className="team-member__name">{member.name}</p>
                <p className="team-member__role">{member.role}</p>
                {member.qualifications && (
                  <ul className="team-member__qualifications">
                    {member.qualifications.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
