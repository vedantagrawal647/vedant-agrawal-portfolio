import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__logo">VA</span>
          <span className="footer__copy">© 2025 Vedant Agrawal. All rights reserved.</span>
        </div>
        <div className="footer__right">
          <a href="https://github.com/vedantagrawal647" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
          <a href="https://linkedin.com/in/vedantagrawal647" target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
          <a href="mailto:vedantagrawal03012001@gmail.com" className="footer__link">Email</a>
        </div>
      </div>
    </footer>
  );
}
