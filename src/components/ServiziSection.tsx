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
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
