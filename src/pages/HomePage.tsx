import PageMeta from '@/components/PageMeta';
import Hero from '@/components/Hero';
import AziendaSection from '@/components/AziendaSection';
import ServiziSection from '@/components/ServiziSection';
import ReferenzeSection from '@/components/ReferenzeSection';
import ContattiSection from '@/components/ContattiSection';

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="SINT S.r.l. — Sicurezza globale, impianti e progettazione"
        description="Progettiamo la sicurezza di luoghi, persone e sistemi con competenza tecnica e una visione sempre concreta. Dal 1990."
      />
      <Hero />
      <AziendaSection />
      <ServiziSection />
      <ReferenzeSection />
      <ContattiSection />
    </>
  );
}
