import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
      <div className="shell hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow-pill"><Icon name="spark" size={17} /> Learning that moves business forward</div>
          <h1>Build a workforce ready for <span>what’s next.</span></h1>
          <p>Enterprise learning programs designed around your people, priorities and performance goals—not generic course catalogs.</p>
          <div className="hero-actions">
            <a className="button magnetic" href="#contact">Design your program <Icon name="arrow" size={19} /></a>
            <a className="button button-ghost magnetic" href="#solutions"><span className="play-icon"><Icon name="play" size={17} /></span> Explore solutions</a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>AK</span><span>RM</span><span>NS</span><span>+</span></div>
            <div><strong>4.8/5 learner rating</strong><small>Trusted by high-growth enterprise teams</small></div>
          </div>
        </div>
        <div className="hero-visual reveal delay-1" aria-label="Enterprise learning dashboard illustration">
          <div className="dashboard-glow" />
          <div className="dashboard-card" data-tilt>
            <div className="dash-top"><div><span className="dash-label">LEARNING IMPACT</span><h3>Capability dashboard</h3></div><span className="live-pill"><i /> Live</span></div>
            <div className="dash-stats">
              <div><small>Active learners</small><strong>1,248</strong><span>↑ 18.4%</span></div>
              <div><small>Completion rate</small><strong>94%</strong><span>↑ 7.2%</span></div>
            </div>
            <div className="chart-wrap">
              <div className="chart-head"><strong>Skill growth</strong><small>Last 6 months</small></div>
              <svg viewBox="0 0 460 155" role="img" aria-label="Rising skills chart">
                <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#5b7cff" stopOpacity=".32" /><stop offset="1" stopColor="#5b7cff" stopOpacity="0" /></linearGradient></defs>
                <path className="chart-grid" d="M10 25H450M10 65H450M10 105H450M10 145H450" />
                <path className="chart-area" d="M10 132 C70 121,82 105,130 110 S205 78,250 84 S328 55,365 61 S415 34,450 25 L450 145 L10 145Z" />
                <path className="chart-line" d="M10 132 C70 121,82 105,130 110 S205 78,250 84 S328 55,365 61 S415 34,450 25" />
                <circle cx="450" cy="25" r="6" className="chart-dot" />
              </svg>
            </div>
            <div className="skill-row"><div className="skill-icon"><Icon name="data" /></div><div><strong>Data storytelling</strong><small>Advanced cohort</small></div><span>86%</span></div>
          </div>
          <div className="float-card float-card-one"><span className="float-icon"><Icon name="check" size={18} /></span><div><strong>Program milestone</strong><small>Leadership cohort completed</small></div></div>
          <div className="float-card float-card-two"><div className="mini-ring"><span>92%</span></div><div><strong>Engagement</strong><small>+12% this month</small></div></div>
        </div>
      </div>
      <div className="shell hero-bottom"><span>Customized pathways</span><i /><span>Industry practitioners</span><i /><span>Measurable outcomes</span><i /><span>Flexible delivery</span></div>
    </section>
  );
}
