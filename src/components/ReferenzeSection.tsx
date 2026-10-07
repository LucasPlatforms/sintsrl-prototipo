import { referenzeIntro, caseStudies, clientNames } from '@/data/referenze';

export default function ReferenzeSection() {
  return (
    <section className="section clients" id="clienti">
      <div className="container">
        <div className="clients-header">
          <div>
            <div className="section-kicker">{referenzeIntro.kicker}</div>
            <h2>
              {referenzeIntro.heading[0]}<br /><span>{referenzeIntro.heading[1]}</span>
            </h2>
          </div>
        </div>
        <div className="case-study-grid">
          {caseStudies.map((cs) => (
            <article className="case-study-card" key={cs.client}>
              <div className="case-study-card__media">
                <img src={cs.image} alt={cs.alt} loading="lazy" />
              </div>
              <div className="case-study-card__body">
                <span className="case-study-card__client">{cs.client}</span>
                <p>{cs.description}</p>
              </div>
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
  );
}
