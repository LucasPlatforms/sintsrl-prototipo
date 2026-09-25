import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import { navItems, navCta } from '@/data/contatti';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />
        <nav
          className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}
          aria-label="Navigazione principale"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={navCta.href} onClick={closeMenu}>
            {navCta.label} <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
