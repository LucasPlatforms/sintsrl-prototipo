import { Link } from 'react-router-dom';
import { MoveRight, ArrowUpRight } from 'lucide-react';
import { hero } from '@/data/azienda';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="eyebrow">
          <span className="eyebrow-line" /> {hero.eyebrow}
        </div>
        <h1>
          {hero.title[0]}<br /><em>{hero.title[1]}</em>
        </h1>
        <p className="hero-copy">{hero.copy}</p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/servizi">
            {hero.ctaPrimary} <MoveRight size={18} />
          </Link>
          <Link className="text-link" to="/clienti">
            {hero.ctaSecondary} <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="hero-meta">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-aside">
        <span>{hero.aside}</span>
        <div />
      </div>
    </section>
  );
}
