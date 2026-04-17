import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('vedantagrawal03012001@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <hr className="divider" style={{ marginBottom: '6rem' }} />
      <div className="section-eyebrow">Connect</div>

      <div className="contact__layout">
        <div className="contact__left">
          <h2 className="contact__heading">
            Let's build<br />
            <span className="contact__heading-outline">something</span><br />
            together.
          </h2>
          <p className="contact__sub">
            I'm actively seeking new opportunities as a Java Backend Developer.
            Open to full-time roles, contract work, or just a conversation.
          </p>
          <div className="contact__availability">
            <span className="contact__avail-dot" />
            <span>Available for immediate joining · Indore, India</span>
          </div>
        </div>

        <div className="contact__right">
          <div className="contact__card">
            <div className="contact__card-label">Primary contact</div>
            <button className="contact__email" onClick={copyEmail}>
              <span className="contact__email-text">vedantagrawal03012001@gmail.com</span>
              <span className="contact__email-action">{copied ? '✓ Copied!' : 'Copy'}</span>
            </button>

            <div className="contact__links">
              <a href="tel:+919630527202" className="contact__link">
                <div className="contact__link-icon">
                  <PhoneIcon />
                </div>
                <div className="contact__link-info">
                  <span className="contact__link-label">Phone</span>
                  <span className="contact__link-val">+91 96305 27202</span>
                </div>
                <ArrowIcon />
              </a>

              <a href="https://github.com/vedantagrawal647" target="_blank" rel="noreferrer" className="contact__link">
                <div className="contact__link-icon">
                  <GitHubIcon />
                </div>
                <div className="contact__link-info">
                  <span className="contact__link-label">GitHub</span>
                  <span className="contact__link-val">github.com/vedantagrawal647</span>
                </div>
                <ArrowIcon />
              </a>

              <a href="https://linkedin.com/in/vedantagrawal647" target="_blank" rel="noreferrer" className="contact__link">
                <div className="contact__link-icon">
                  <LinkedInIcon />
                </div>
                <div className="contact__link-info">
                  <span className="contact__link-label">LinkedIn</span>
                  <span className="contact__link-val">linkedin.com/in/vedantagrawal647</span>
                </div>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="contact__edu">
            <div className="contact__edu-label">Education</div>
            <div className="contact__edu-degree">B.Tech — Computer Science & Engineering</div>
            <div className="contact__edu-school">GLA University, Mathura · 2020–2024 · CPI 8.15/10</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.26 10.8 19.79 19.79 0 01.19 2.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.04 6.04l1.47-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>;
}

function GitHubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.23 3.44 9.67 8.21 11.23.6.11.82-.26.82-.57v-2c-3.34.71-4.04-1.58-4.04-1.58-.54-1.36-1.33-1.72-1.33-1.72-1.08-.73.08-.71.08-.71 1.2.08 1.83 1.22 1.83 1.22 1.06 1.8 2.78 1.28 3.46.98.11-.76.42-1.28.76-1.57-2.66-.3-5.46-1.31-5.46-5.84 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.5.12-3.12 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.29-1.54 3.3-1.22 3.3-1.22.65 1.62.24 2.82.12 3.12.77.83 1.23 1.88 1.23 3.17 0 4.54-2.8 5.54-5.47 5.83.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.57 21.96 24 17.52 24 12.29 24 5.78 18.63.5 12 .5z" /></svg>;
}

function LinkedInIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 .77 1.77 0v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>;
}

function ArrowIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M7 7h10v10" /></svg>;
}
