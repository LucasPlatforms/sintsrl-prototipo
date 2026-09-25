import PageMeta from '@/components/PageMeta';
import { serviziPage, serviziIntro, services } from '@/data/servizi';

export default function ServiziPage() {
  return (
    <>
      <PageMeta
        title="Servizi — SINT S.r.l."
        description="Risk management, building automation, cabling e networking, collaudi, supervisione, capitolati, progettazione impianti e centralizzazione."
      />
      <section className="page-hero page-hero--dark">
        <div className="container">
          <div className="section-kicker section-kicker--light">{serviziPage.kicker}</div>
          <h1>
            {serviziPage.heading[0]}<br /><span>{serviziPage.heading[1]}</span>
          </h1>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
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
    </>
  );
}
