import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import { navItems, navCta } from '@/data/contatti';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const closeMenu = () => setMenuOpen(false);

  const handleClick = (href: string) => {
    closeMenu();
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />
        <nav
          className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}
          aria-label="Navigazione principale"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className={`nav-link ${activeSection === item.href ? 'nav-link--active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={navCta.href}
            onClick={(e) => {
              e.preventDefault();
              handleClick(navCta.href);
            }}
          >
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
