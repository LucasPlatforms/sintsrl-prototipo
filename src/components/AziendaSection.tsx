import { Check } from 'lucide-react';
import { azienda, team } from '@/data/azienda';

export default function AziendaSection() {
  return (
    <section className="section intro" id="azienda">
      <div className="container intro-grid">
        <div className="section-kicker">
          {azienda.kicker}
          <div className="team-kicker-side">Il team</div>
        </div>
        <div className="intro-main">
          <h2>
            {azienda.heading[0]}<br /><span>{azienda.heading[1]}</span>
          </h2>
          <div className="intro-text-grid">
            {azienda.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="partnership">
            <span><Check size={16} /> {azienda.partnership}</span>
          </div>
          <div className="team">
            <div className="team-grid">
              {team.map((member) => (
                <div className="team-member" key={member.name}>
                  <p className="team-member__name">{member.name}</p>
                  <p className="team-member__role">{member.role}</p>
                  {member.qualifications && (
                    <ul className="team-member__qualifications">
                      {member.qualifications.map((parts, i) => (
                        <li key={i}>
                          {parts.map((part, j) =>
                            part.bold ? (
                              <strong key={j}>{part.text}</strong>
                            ) : (
                              <span key={j}>{part.text}</span>
                            )
                          )}
                        </li>
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
