import { solutions } from "@/data/siteData";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Solutions() {
  return <section className="section solutions" id="solutions"><div className="shell">
    <SectionHeading eyebrow="CAPABILITY PORTFOLIO" title="Learning built around the capabilities that matter." description="Choose a proven pathway or combine domains into a customized academy aligned to your business priorities." />
    <div className="solution-grid">{solutions.map((s, i) => <article data-tilt className={`solution-card reveal-on-scroll ${i === 0 ? "featured" : ""}`} key={s.title}>
      <div className="solution-top"><span className="solution-icon"><Icon name={s.icon as "data"} /></span><span className="solution-tag">{s.tag}</span></div>
      <h3>{s.title}</h3><p>{s.description}</p>
      <div className="skill-chips">{s.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
      <a href="#contact">Explore pathway <Icon name="arrow" size={18} /></a>
    </article>)}</div>
  </div></section>;
}
