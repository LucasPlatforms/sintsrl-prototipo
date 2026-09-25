import { Check } from 'lucide-react';
import { azienda, team } from '@/data/azienda';

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
          <div className="partnership">
            <span><Check size={16} /> {azienda.partnership}</span>
          </div>
          <div className="team">
            <p className="team-title">Il team</p>
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
        </div>
      </div>
    </section>
  );
}
