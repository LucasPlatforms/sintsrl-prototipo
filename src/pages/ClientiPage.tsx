import { useState } from 'react';
import PageMeta from '@/components/PageMeta';
import { clientiPage, caseStudies, clientNames, settori } from '@/data/referenze';

export default function ClientiPage() {
  const [filtro, setFiltro] = useState('Tutte');

  const caseStudiesFiltrati = filtro === 'Tutte'
    ? caseStudies
    : caseStudies.filter((cs) => cs.settore === filtro);

  return (
    <>
      <PageMeta
        title="Clienti — SINT S.r.l."
        description="I progetti e i clienti che hanno scelto SINT per la propria sicurezza. Case study per settore e elenco completo delle referenze."
      />
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">{clientiPage.kicker}</div>
          <h1>
            {clientiPage.heading[0]}<br /><span>{clientiPage.heading[1]}</span>
          </h1>
          <p className="page-hero__description">{clientiPage.description}</p>
        </div>
      </section>

      <section className="section clients">
        <div className="container">
          <div className="filter-bar">
            {settori.map((settore) => (
              <button
                key={settore}
                className={`filter-btn ${filtro === settore ? 'filter-btn--active' : ''}`}
                onClick={() => setFiltro(settore)}
              >
                {settore}
              </button>
            ))}
          </div>
          <div className="case-study-list">
            {caseStudiesFiltrati.map((cs) => (
              <article className="case-study" key={cs.client}>
                <div className="case-study__media">
                  <img src={cs.image} alt={cs.alt} loading="lazy" />
                </div>
                <div className="case-study__body">
                  <span className="case-study__client">{cs.client}</span>
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
    </>
  );
}
