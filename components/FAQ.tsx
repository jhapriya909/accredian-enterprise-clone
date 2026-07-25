"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Can learning programs be customized for our roles and business goals?",
    answer: "Yes. The proposed journey can be tailored by role, proficiency level, delivery format, projects, assessment approach and success metrics."
  },
  {
    question: "Which delivery formats are supported?",
    answer: "Programs can combine expert-led live sessions, cohort learning, self-paced modules, workshops, simulations and workplace projects."
  },
  {
    question: "How do you measure learning impact?",
    answer: "The experience can track engagement, completion, assessment performance, skill progression and evidence of workplace application."
  },
  {
    question: "Can this work for distributed or global teams?",
    answer: "Yes. Flexible scheduling and digital delivery make it suitable for distributed teams, while cohorts can be organized by role, region or proficiency."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="shell faq-grid">
        <div className="faq-intro reveal-on-scroll">
          <SectionHeading
            align="left"
            eyebrow="COMMON QUESTIONS"
            title="Everything you need to plan the next learning initiative."
            description="A few quick answers about customization, delivery and impact measurement."
          />
          <a href="#contact" className="text-link">Discuss your requirement <span>→</span></a>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <article className={`faq-item reveal-on-scroll ${expanded ? "is-open" : ""}`} key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? -1 : index)}
                  aria-expanded={expanded}
                >
                  <span>{item.question}</span>
                  <i>{expanded ? "−" : "+"}</i>
                </button>
                <div className="faq-answer"><p>{item.answer}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
