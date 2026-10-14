import { serviziIntro, services } from '@/data/servizi';

export default function ServiziSection() {
  return (
    <section className="section section--dark" id="servizi">
      <div className="container">
        <div className="section-heading section-heading--light">
          <div className="section-kicker">{serviziIntro.kicker}</div>
          <div>
            <h2>
              {serviziIntro.heading[0]}<br /><span>{serviziIntro.heading[1]}</span>
            </h2>
          </div>
        </div>

        <div className="servizi-intro-panels">
          {serviziIntro.paragraphs.map((p, i) => (
            <div key={i} className="servizi-intro-panel">
              <p className="servizi-intro-panel__lead">{p.lead}</p>
              <ul className="servizi-intro-panel__items">
                {p.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="servizi-list">
          {services.map((service, i) => (
            <article className="servizi-item" key={service.title}>
              <span className="servizi-item__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="servizi-item__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
