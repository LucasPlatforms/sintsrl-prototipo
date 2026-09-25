import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import BrandMark from './BrandMark';
import { contatti } from '@/data/contatti';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <BrandMark inverse />
        <div className="footer-info">
          <span className="footer-company">{contatti.ragioneSociale}</span>
          <span className="footer-address">
            {contatti.indirizzo} — {contatti.cap} {contatti.citta} ({contatti.provincia})
          </span>
          <span className="footer-piva">P.IVA e C.F. {contatti.piva}</span>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/cookie-policy">Cookie policy</Link>
        </div>
        <Link to="/" className="back-top">
          Torna su <ChevronDown size={16} />
        </Link>
      </div>
    </footer>
  );
}
