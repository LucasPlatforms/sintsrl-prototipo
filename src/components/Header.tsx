import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import { navItems, navCta } from '@/data/contatti';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
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
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            className="nav-cta"
            to={navCta.href}
            onClick={closeMenu}
          >
            {navCta.label} <ArrowUpRight size={16} />
          </Link>
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
