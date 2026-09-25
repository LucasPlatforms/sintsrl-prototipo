import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Pagina non trovata — SINT S.r.l."
        description="La pagina che cerchi non esiste o è stata spostata."
      />
      <section className="not-found">
        <div className="container">
          <div className="not-found__content">
            <h1>404</h1>
            <p className="not-found__message">La pagina che cerchi non esiste o è stata spostata.</p>
            <Link className="button button--primary" to="/">
              <Home size={18} /> Torna alla home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
