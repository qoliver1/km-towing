import { useState, useEffect } from 'react';
import { Phone, Menu, X, Truck } from 'lucide-react';
import { siteConfig } from '../config/site';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'About', href: '#why-choose-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">
          <Truck className="navbar__logo-icon" />
          <span className="navbar__logo-text">{siteConfig.business.name}</span>
        </a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        <a href={`tel:${siteConfig.business.phone}`} className="btn btn--call navbar__call">
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="btn btn--call navbar__mobile-call"
          >
            <Phone size={18} />
            <span>Call {siteConfig.business.phoneDisplay}</span>
          </a>
        </div>
      )}
    </nav>
  );
}
