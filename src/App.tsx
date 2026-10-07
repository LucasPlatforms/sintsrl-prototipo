import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AziendaSection from '@/components/AziendaSection';
import ServiziSection from '@/components/ServiziSection';
import ReferenzeSection from '@/components/ReferenzeSection';
import ContattiSection from '@/components/ContattiSection';

function App() {
  return (
    <div className="site-shell" id="top">
      <Header />
      <main>
        <Hero />
        <AziendaSection />
        <ServiziSection />
        <ReferenzeSection />
        <ContattiSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
