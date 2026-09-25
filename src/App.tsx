import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ChiSiamoPage from '@/pages/ChiSiamoPage';
import ServiziPage from '@/pages/ServiziPage';
import ClientiPage from '@/pages/ClientiPage';
import ContattiPage from '@/pages/ContattiPage';
import LegalPage from '@/pages/LegalPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-shell" id="top">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<ChiSiamoPage />} />
            <Route path="/servizi" element={<ServiziPage />} />
            <Route path="/clienti" element={<ClientiPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
            <Route
              path="/privacy"
              element={
                <LegalPage
                  title="Privacy policy"
                  metaTitle="Privacy policy — SINT S.r.l."
                  metaDescription="Privacy policy di SINT S.r.l."
                />
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <LegalPage
                  title="Cookie policy"
                  metaTitle="Cookie policy — SINT S.r.l."
                  metaDescription="Cookie policy di SINT S.r.l."
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
