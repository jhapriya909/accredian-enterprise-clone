"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const total = testimonials.length;

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % total), 5500);
    return () => window.clearInterval(timer);
  }, [total]);

  const move = (direction: number) => setActive((value) => (value + direction + total) % total);

  return (
    <section className="section stories" id="stories">
      <div className="shell">
        <div className="stories-heading-row">
          <SectionHeading
            eyebrow="CLIENT PERSPECTIVES"
            title="Designed with L&D. Valued by learners."
            description="What enterprise stakeholders appreciate about an outcome-led learning partnership."
          />
          <div className="story-controls" aria-label="Testimonial controls">
            <button onClick={() => move(-1)} aria-label="Previous testimonial">←</button>
            <button onClick={() => move(1)} aria-label="Next testimonial">→</button>
          </div>
        </div>
        <div className="story-grid">
          {testimonials.map((t, index) => {
            const featured = index === active;
            return (
              <article
                key={t.name}
                className={`reveal-on-scroll ${featured ? "story-featured" : ""}`}
                onMouseEnter={() => setActive(index)}
              >
                <div className="quote-mark">“</div>
                <p>{t.quote}</p>
                <div className="story-person">
                  <span>{t.initials}</span>
                  <div><strong>{t.name}</strong><small>{t.role}</small><em>{t.company}</em></div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="story-dots" aria-label="Select testimonial">
          {testimonials.map((item, index) => (
            <button key={item.name} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
