import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer — Java Backend Developer',
    period: 'Jan 2025 – Present',
    location: 'Indore, India',
    type: 'Full-time',
    bullets: [
      'Built scalable microservices with Core Java, Spring Boot, and Hibernate/JPA; deployed on AWS EC2/ECS via Docker with ELB and Auto Scaling.',
      'Designed RESTful APIs through AWS API Gateway with Swagger/OpenAPI docs; integrated Apache Kafka and RabbitMQ for real-time event streaming.',
      'Secured services with JWT, OAuth 2.0, and RBAC; integrated AWS Lambda, SQS, S3, and Athena for event-driven workflows.',
      'Maintained 85%+ SonarQube line and mutation coverage with enforced CI/CD quality gates; reduced delivery time by ~30% with AI dev tools.',
      'Optimized Oracle/MySQL queries with indexing strategies; implemented audit logging and exception handling for compliance.',
    ],
    stack: ['Spring Boot', 'Kafka', 'RabbitMQ', 'AWS', 'Docker', 'SonarQube'],
  },
  {
    company: 'Spice Money (Fintech)',
    role: 'Software Developer',
    period: 'Feb 2024 – Aug 2024',
    location: 'Mohali, India',
    type: 'Full-time',
    bullets: [
      'Developed secure Spring Boot REST APIs with JWT, OAuth 2.0, and RBAC for fintech transaction flows.',
      'Integrated Apache Kafka for transaction streaming and RabbitMQ for notification queuing.',
      'Documented all APIs with Swagger/OpenAPI; optimized Oracle and MySQL queries for improved response times.',
      'Maintained SonarQube benchmarks with zero critical code smells throughout the engagement.',
    ],
    stack: ['Spring Boot', 'JWT', 'Kafka', 'RabbitMQ', 'Oracle', 'MySQL'],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="section">
      <hr className="divider" style={{ marginBottom: '6rem' }} />
      <div className="section-eyebrow">Career</div>
      <h2 className="section-title">Work experience</h2>

      <div className="exp__layout">
        <div className="exp__tabs">
          {experiences.map((e, i) => (
            <button
              key={i}
              className={`exp__tab ${active === i ? 'exp__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="exp__tab-company">{e.company}</span>
              <span className="exp__tab-period">{e.period}</span>
            </button>
          ))}
        </div>

        <div className="exp__detail">
          <div className="exp__header">
            <div>
              <h3 className="exp__role">{exp.role}</h3>
              <p className="exp__meta">
                <span className="exp__company">{exp.company}</span>
                <span className="exp__sep">·</span>
                <span>{exp.location}</span>
                <span className="exp__sep">·</span>
                <span className="exp__type">{exp.type}</span>
              </p>
            </div>
            <div className="exp__period-badge">{exp.period}</div>
          </div>

          <ul className="exp__bullets">
            {exp.bullets.map((b, i) => (
              <li key={i} className="exp__bullet">
                <span className="exp__bullet-icon" />
                {b}
              </li>
            ))}
          </ul>

          <div className="exp__stack">
            {exp.stack.map(t => (
              <span key={t} className="exp__tech">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
