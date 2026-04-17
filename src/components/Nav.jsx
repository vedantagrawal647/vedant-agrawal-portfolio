import React, { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <div className="nav__logo" onClick={() => scrollTo('hero')}>
          <span className="nav__logo-text">VA</span>
          <span className="nav__logo-dot" />
        </div>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {['skills', 'experience', 'projects', 'contact'].map(id => (
            <li key={id}>
              <button onClick={() => scrollTo(id)} className="nav__link">
                {id}
              </button>
            </li>
          ))}
          <li>
            <a href="mailto:vedantagrawal03012001@gmail.com" className="nav__cta">
              Hire me
            </a>
          </li>
        </ul>

        <button
          className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
