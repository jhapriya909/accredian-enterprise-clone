import Icon from "./Icon";
export default function Footer() {
    return <footer className="footer">
        <div className="shell footer-top">
            <div className="footer-brand">
                <a href="#home" className="brand brand-light">
                    <span className="brand-symbol">
                        <span>A</span></span><span className="brand-copy">accredian<small>Enterprise</small></span></a><p>Building future-ready organizations through practical, measurable and human-centered learning.</p><div className="footer-contact"><a href="mailto:enterprise@accredian.com"><Icon name="mail" size={18} /> enterprise@accredian.com</a><a href="tel:+911234567890"><Icon name="phone" size={18} /> +91 12345 67890</a></div></div><div><h3>Solutions</h3><a href="#solutions">Data, AI & Analytics</a><a href="#solutions">Leadership Excellence</a><a href="#solutions">Digital Transformation</a><a href="#solutions">Cloud & Engineering</a></div><div><h3>Explore</h3><a href="#why">Why Accredian</a><a href="#process">Our approach</a><a href="#stories">Success stories</a><a href="#contact">Contact us</a></div><div className="footer-cta"><h3>Build what’s next.</h3><p>Explore a learning partnership designed around your organization.</p><a href="#contact" className="footer-button">Talk to an expert <Icon name="arrow" size={18} /></a></div></div><div className="shell footer-bottom"><p>© 2026 Accredian Enterprise. Assignment demonstration.</p><div><a href="#">Privacy</a><a href="#">Terms</a></div></div></footer>;
}
