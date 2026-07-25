"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

const links = [
  ["Solutions", "#solutions"],
  ["Why Accredian", "#why"],
  ["How it works", "#process"],
  ["Success stories", "#stories"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      const sections = ["home", "solutions", "why", "process", "stories", "contact"];
      let current = "home";
      for (const id of sections) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= 150) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="shell nav-inner">
        <a href="#home" className="brand" aria-label="Accredian Enterprise home">
          <span className="brand-symbol"><span>A</span></span>
          <span className="brand-copy">accredian<small>Enterprise</small></span>
        </a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a className={active === href.slice(1) ? "active" : ""} key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="#contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>Talk to an expert <Icon name="arrow" size={18}/></a>
        </nav>
        <a href="#contact" className="button button-sm nav-cta magnetic">Talk to an expert <Icon name="arrow" size={18}/></a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          <Icon name={open ? "close" : "menu"}/>
        </button>
      </div>
    </header>
  );
}
