import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
const steps = [
  ["01", "Discover", "Align stakeholders on business priorities, target roles and measurable outcomes."],
  ["02", "Design", "Create the right pathway, format, projects, assessments and success metrics."],
  ["03", "Deliver", "Engage learners through expert-led, cohort-based and self-paced experiences."],
  ["04", "Demonstrate", "Measure proficiency, application and impact—then refine the next learning cycle."],
];
export default function Process() { return <section className="section process" id="process"><div className="shell"><SectionHeading eyebrow="OUR APPROACH" title="A clear path from ambition to impact." description="We work as an extension of your L&D team—from capability diagnosis to evidence of progress." /><div className="process-line">{steps.map(([n, t, d], i) => <article key={n} className="reveal-on-scroll"><div className="step-number">{n}</div>{i < 3 && <span className="step-connector" />}<div className="step-icon"><Icon name={i === 0 ? "building" : i === 1 ? "digital" : i === 2 ? "leadership" : "data"} /></div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>; }
