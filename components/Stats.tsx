"use client";

import { useEffect, useRef, useState } from "react";
import { outcomes } from "@/data/siteData";

function AnimatedValue({ value }: { value: string }) {
  const target = Number(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9.]+$/)?.[0] ?? "";
  const decimals = value.includes(".") ? 1 : 0;
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1500;
      const frame = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(target * eased);
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{display.toFixed(decimals)}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-noise" />
      <div className="shell stats-inner">
        <div className="stats-copy reveal-on-scroll">
          <span>OUTCOMES AT A GLANCE</span>
          <h2>Progress your learners can feel. Impact your leaders can see.</h2>
          <p>Clear reporting, role-based assessments and visible business outcomes keep every stakeholder aligned.</p>
        </div>
        <div className="stats-grid">
          {outcomes.map((x) => (
            <div key={x.label} className="reveal-on-scroll stat-card">
              <strong><AnimatedValue value={x.value} /></strong>
              <span>{x.label}</span>
              <i />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
