import "./animation.css";

export default function Marquee({ items = ["React", "Next.js", "Tailwind", "Figma", "Vercel", "Linear"] }: { items?: string[] }) {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
        {items.map((item) => (
          <span key={"copy-" + item} aria-hidden="true">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
