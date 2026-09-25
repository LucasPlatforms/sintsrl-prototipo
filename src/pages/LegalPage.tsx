import PageMeta from '@/components/PageMeta';

interface LegalPageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
}

export default function LegalPage({ title, metaTitle, metaDescription }: LegalPageProps) {
  return (
    <>
      <PageMeta title={metaTitle} description={metaDescription} />
      <section className="page-hero">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>
      <section className="section intro">
        <div className="container">
          <p className="legal-placeholder">Contenuto in preparazione.</p>
        </div>
      </section>
    </>
  );
}
