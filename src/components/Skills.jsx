import React, { useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Core Java & Frameworks',
    color: '#e8d5a3',
    icon: '☕',
    tags: ['Java 8/11/17', 'OOP', 'Collections', 'Multithreading', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Cloud', 'Hibernate/JPA', 'Lombok', 'MapStruct', 'Design Patterns'],
  },
  {
    category: 'Messaging & Events',
    color: '#6fcf97',
    icon: '⚡',
    tags: ['Apache Kafka', 'RabbitMQ', 'Kafka Streams', 'AWS SQS', 'AWS SNS', 'Event-Driven Architecture'],
  },
  {
    category: 'AWS Cloud',
    color: '#7eb8f7',
    icon: '☁',
    tags: ['EC2', 'ECS', 'Lambda', 'API Gateway', 'S3', 'RDS', 'DynamoDB', 'CloudWatch', 'IAM', 'Route 53', 'ELB', 'Auto Scaling', 'CloudFormation'],
  },
  {
    category: 'API & Security',
    color: '#c084fc',
    icon: '🔐',
    tags: ['REST APIs', 'Swagger/OpenAPI', 'JWT', 'OAuth 2.0', 'RBAC', 'OWASP', 'AWS API Gateway'],
  },
  {
    category: 'Databases',
    color: '#fb923c',
    icon: '🗄',
    tags: ['Oracle DB', 'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'ORM', 'Indexing', 'Query Optimization'],
  },
  {
    category: 'DevOps & CI/CD',
    color: '#f87171',
    icon: '🔧',
    tags: ['GitHub Actions', 'Docker', 'Kubernetes', 'Jenkins', 'SonarQube', 'Maven', 'Git', 'Splunk', 'CloudFormation'],
  },
  {
    category: 'Testing & Quality',
    color: '#34d399',
    icon: '✓',
    tags: ['JUnit', 'Mockito', 'TDD', 'SonarQube', 'Mutation Testing', 'Line Coverage', 'Quality Gates'],
  },
  {
    category: 'AI Dev Tools',
    color: '#e8d5a3',
    icon: '✦',
    tags: ['ChatGPT (GPT-4/5)', 'Claude Sonnet', 'Google Gemini', 'Code Review', 'Refactoring', 'TDD'],
  },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="section">
      <div className="section-eyebrow">Expertise</div>
      <h2 className="section-title">Technical skills</h2>
      <div className="skills__grid">
        {skillGroups.map((g, i) => (
          <div
            key={i}
            className={`skill-card ${active === i ? 'skill-card--active' : ''}`}
            style={{ '--card-color': g.color }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="skill-card__header">
              <span className="skill-card__icon">{g.icon}</span>
              <span className="skill-card__title">{g.category}</span>
            </div>
            <div className="skill-card__tags">
              {g.tags.map(t => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
            <div className="skill-card__accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
