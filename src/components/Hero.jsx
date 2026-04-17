import React, { useEffect, useState } from 'react';
import './Hero.css';

const roles = ['Java Backend Developer', 'Microservices Architect', 'AWS Cloud Engineer', 'Spring Boot Expert'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for immediate joining
        </div>

        <h1 className="hero__name">
          Vedant<br />
          <span className="hero__name-outline">Agrawal</span>
        </h1>

        <div className="hero__role">
          <span className={`hero__role-text ${visible ? 'hero__role-text--in' : 'hero__role-text--out'}`}>
            {roles[roleIdx]}
          </span>
        </div>

        <p className="hero__bio">
          2+ years building production-grade microservices with Spring Boot,
          Kafka, and AWS. Oracle Certified Java SE&nbsp;17 Developer.
          Based in Indore, India.
        </p>

        <div className="hero__certs">
          {['Oracle Java SE 17', 'AWS Cloud Practitioner', 'LeetCode 500+'].map(c => (
            <span key={c} className="hero__cert">{c}</span>
          ))}
        </div>

        <div className="hero__actions">
          <a href="#contact" className="hero__btn hero__btn--primary"
            onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="#projects" className="hero__btn hero__btn--ghost"
            onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>
            View projects
          </a>
        </div>

        <div className="hero__social">
          <a href="https://github.com/vedantagrawal647" target="_blank" rel="noreferrer" className="hero__social-link">
            <GitHubIcon /> github
          </a>
          <span className="hero__social-sep" />
          <a href="https://linkedin.com/in/vedantagrawal647" target="_blank" rel="noreferrer" className="hero__social-link">
            <LinkedInIcon /> linkedin
          </a>
          <span className="hero__social-sep" />
          <a href="mailto:vedantagrawal03012001@gmail.com" className="hero__social-link">
            <MailIcon /> email
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

function GitHubIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.23 3.44 9.67 8.21 11.23.6.11.82-.26.82-.57v-2c-3.34.71-4.04-1.58-4.04-1.58-.54-1.36-1.33-1.72-1.33-1.72-1.08-.73.08-.71.08-.71 1.2.08 1.83 1.22 1.83 1.22 1.06 1.8 2.78 1.28 3.46.98.11-.76.42-1.28.76-1.57-2.66-.3-5.46-1.31-5.46-5.84 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.5.12-3.12 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.29-1.54 3.3-1.22 3.3-1.22.65 1.62.24 2.82.12 3.12.77.83 1.23 1.88 1.23 3.17 0 4.54-2.8 5.54-5.47 5.83.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.57 21.96 24 17.52 24 12.29 24 5.78 18.63.5 12 .5z" /></svg>;
}

function LinkedInIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>;
}

function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>;
}
