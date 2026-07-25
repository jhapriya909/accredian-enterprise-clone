"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ExperienceEnhancer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const magnetic = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const cleanups: Array<() => void> = [];

    if (!reduced && finePointer) {
      window.addEventListener("pointermove", onPointer, { passive: true });

      magnetic.forEach((node) => {
        const move = (event: PointerEvent) => {
          const rect = node.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          node.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        };
        const leave = () => { node.style.transform = ""; };
        node.addEventListener("pointermove", move);
        node.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          node.removeEventListener("pointermove", move);
          node.removeEventListener("pointerleave", leave);
        });
      });

      const tiltNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
      tiltNodes.forEach((node) => {
        const move = (event: PointerEvent) => {
          const rect = node.getBoundingClientRect();
          const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -4;
          const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
          node.style.setProperty("--tilt-x", `${rx}deg`);
          node.style.setProperty("--tilt-y", `${ry}deg`);
        };
        const leave = () => {
          node.style.setProperty("--tilt-x", "0deg");
          node.style.setProperty("--tilt-y", "0deg");
        };
        node.addEventListener("pointermove", move);
        node.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          node.removeEventListener("pointermove", move);
          node.removeEventListener("pointerleave", leave);
        });
      });
    }

    const onScroll = () => setShowTop(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <div className="pointer-spotlight" aria-hidden="true" />
      <button
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <Icon name="arrow" size={18} />
      </button>
    </>
  );
}
