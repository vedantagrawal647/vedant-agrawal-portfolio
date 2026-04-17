import React from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'Microservices Modernization',
    description: 'Decomposed a monolithic Java application into independently deployable Spring Boot microservices. Used Spring Cloud (Eureka, Config Server, Gateway) for service discovery, config management, and routing. Achieved fault tolerance with ELB and Auto Scaling on AWS.',
    highlights: [
      'Reduced monolith into 8+ independent microservices',
      'Kafka event streaming + RabbitMQ async queuing',
      'CI/CD with GitHub Actions & SonarQube quality gates',
      '~25% effort reduction via AI-assisted SOLID reviews',
    ],
    stack: ['Spring Boot', 'Spring Cloud', 'Kafka', 'RabbitMQ', 'AWS EC2/ECS', 'RDS (MySQL)', 'S3', 'SNS', 'CloudWatch', 'GitHub Actions', 'Docker'],
    color: '#e8d5a3',
  },
  {
    num: '02',
    title: 'Payment Processing & Auth System',
    description: 'Built a production-grade layered backend (Controller → Service → Repository) for a fintech payment platform. Integrated real-time transaction streaming via Kafka and async workflows via AWS SQS. Full security stack with JWT, RBAC, and audit logging.',
    highlights: [
      '85%+ SonarQube line & mutation coverage',
      'JWT + RBAC + audit logging for compliance',
      'Real-time Kafka streaming for transactions',
      'Edge-case test generation with Gemini + Claude',
    ],
    stack: ['Spring Boot', 'Kafka', 'Hibernate/JPA', 'JWT', 'OAuth 2.0', 'AWS SQS', 'SonarQube', 'JUnit', 'Mockito'],
    color: '#7eb8f7',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <hr className="divider" style={{ marginBottom: '6rem' }} />
      <div className="section-eyebrow">Work</div>
      <h2 className="section-title">Featured projects</h2>
      <div className="projects__list">
        {projects.map((p, i) => (
          <article key={i} className="project" style={{ '--proj-color': p.color }}>
            <div className="project__num">{p.num}</div>
            <div className="project__content">
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <ul className="project__highlights">
                {p.highlights.map((h, j) => (
                  <li key={j} className="project__highlight">
                    <span className="project__check">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="project__stack">
                {p.stack.map(t => (
                  <span key={t} className="project__tech">{t}</span>
                ))}
              </div>
            </div>
            <div className="project__accent" />
          </article>
        ))}
      </div>
    </section>
  );
}
