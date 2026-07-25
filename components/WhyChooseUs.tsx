import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const features = [
  ["01", "Diagnose before designing", "We map role expectations, skill gaps and business outcomes before recommending content."],
  ["02", "Learn by doing", "Live practice, business simulations and workplace projects turn concepts into capability."],
  ["03", "Experts who have done the work", "Practitioners bring current frameworks, real decisions and credible industry context."],
  ["04", "Make impact visible", "Dashboards and assessment insights help stakeholders track adoption and capability growth."],
];

export default function WhyChooseUs() {
  return <section className="section why" id="why"><div className="shell why-grid">
    <div className="why-visual reveal">
      <div className="why-panel">
        <div className="panel-head"><span>Program overview</span><span className="status-dot">On track</span></div>
        <h3>Future Leaders Academy</h3><p>12-week blended learning journey</p>
        <div className="cohort-progress"><div className="ring"><span>78%</span></div><div><strong>Cohort progress</strong><small>9 of 12 modules completed</small></div></div>
        <div className="module-list"><div><span><Icon name="check" size={16} /></span><p><strong>Leading through change</strong><small>Completed · 94% score</small></p></div><div><span><Icon name="check" size={16} /></span><p><strong>Strategic decision making</strong><small>Completed · 89% score</small></p></div><div className="active-module"><span>09</span><p><strong>Coaching high-performing teams</strong><small>In progress · Live workshop</small></p></div></div>
      </div>
      <div className="why-badge"><Icon name="spark" /><div><strong>+31%</strong><small>confidence uplift</small></div></div>
    </div>
    <div className="why-copy reveal-on-scroll"><SectionHeading align="left" eyebrow="WHY ACCREDIAN" title="From training activity to business capability." description="A high-impact learning experience needs more than content. It needs the right diagnosis, expert delivery, application and measurement." />
      <div className="feature-list">{features.map(([n, t, d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
    </div>
  </div></section>;
}
