"use client";
import { FormEvent, useState } from "react";
import Icon from "./Icon";

type Status = { type: "" | "success" | "error"; message: string };

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "", message: "" });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setStatus({ type: "", message: "" });
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to submit your request.");
      setStatus({ type: "success", message: data.message });
      e.currentTarget.reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    } finally { setLoading(false); }
  }

  return <section className="contact" id="contact"><div className="contact-glow" /><div className="shell contact-grid">
    <div className="contact-copy reveal-on-scroll"><span className="contact-kicker">LET’S BUILD YOUR LEARNING ROADMAP</span><h2>Ready to turn capability into competitive advantage?</h2><p>Tell us what your teams need to achieve. We’ll help you shape a practical, measurable learning journey.</p>
      <div className="contact-points"><div><span><Icon name="check" size={17} /></span><p><strong>30-minute discovery call</strong><small>No generic sales pitch—just your priorities and options.</small></p></div><div><span><Icon name="check" size={17} /></span><p><strong>Customized recommendation</strong><small>A learning approach aligned to roles, timelines and outcomes.</small></p></div></div>
      <div className="contact-note"><div className="note-avatars"><span>AM</span><span>RK</span><span>NS</span></div><p><strong>Enterprise learning advisors</strong><small>Typically respond within one business day</small></p></div>
    </div>
    <form className="contact-form reveal-on-scroll" onSubmit={submit}><div className="form-head"><h3>Start a conversation</h3><p>Share a few details and our team will reach out.</p></div>
      <div className="form-row"><label>Full name<input name="name" required placeholder="Your full name" /></label><label>Work email<input name="email" type="email" required placeholder="you@company.com" /></label></div>
      <div className="form-row"><label>Company<input name="company" required placeholder="Company name" /></label><label>Phone number<input name="phone" type="tel" required placeholder="Your phone number" /></label></div>
      <label>What capability are you looking to build?<select name="interest" defaultValue="" required><option value="" disabled>Select a learning need</option><option>Data, AI & Analytics</option><option>Leadership Excellence</option><option>Digital Transformation</option><option>FinTech & Finance</option><option>Cloud & Engineering</option><option>Customized enterprise academy</option></select></label>
      <label>Tell us more<textarea name="message" rows={4} required placeholder="Team size, goals, timeline or current challenges..." /></label>
      <button className="button form-submit magnetic" disabled={loading}>{loading ? "Sending..." : "Request a consultation"}<Icon name="arrow" size={19} /></button>
      {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
      <small className="privacy-note">By submitting, you agree to be contacted about enterprise learning solutions.</small>
    </form>
  </div></section>;
}
