import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
  { num: 2, suffix: '+', label: 'Years Experience' },
  { num: 85, suffix: '%+', label: 'SonarQube Coverage' },
  { num: 30, suffix: '%', label: 'Delivery Time Reduced' },
  { num: 500, suffix: '+', label: 'LeetCode Problems' },
];

function useCountUp(target, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, active]);
  return count;
}

function StatItem({ num, suffix, label, active }) {
  const count = useCountUp(num, active);
  return (
    <div className="stat">
      <div className="stat__num">{count}<span className="stat__suffix">{suffix}</span></div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef();
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {stats.map((s, i) => <StatItem key={i} {...s} active={active} />)}
      </div>
    </section>
  );
}
