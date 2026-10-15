"use client";

import { MoveRight, ArrowUpRight } from "lucide-react";
import { hero } from "@/data/azienda";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="container hero-content">
        <h1>
          {hero.title[0]}<br /><em>{hero.title[1]}</em>
        </h1>
        <p className="hero-copy">{hero.copy}</p>
        <div className="hero-actions">
          <a
            className="button button--primary"
            href="#servizi"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servizi")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {hero.ctaPrimary} <MoveRight size={18} />
          </a>
          <a
            className="text-link"
            href="#clienti"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#clienti")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {hero.ctaSecondary} <ArrowUpRight size={17} />
          </a>
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
    </section>
  );
}
