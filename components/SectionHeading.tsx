export default function SectionHeading({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: string; description: string; align?: "center" | "left" }) {
  return <div className={`section-heading reveal-on-scroll ${align === "left" ? "align-left" : ""}`}><span>{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>;
}
