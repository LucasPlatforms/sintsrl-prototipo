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
            <div className="intro-text-grid">
              {serviziIntro.paragraphs.map((p, i) => (
                <div key={i} className="structured-paragraph">
                  <p className="structured-paragraph__lead">{p.lead}</p>
                  <ul className="structured-paragraph__items">
                    {p.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
