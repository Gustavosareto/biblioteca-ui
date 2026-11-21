import "./animation.css";

const stars = [
  { top: "-10px", left: "2%", animationDelay: "0s" },
  { top: "55%", left: "96%", animationDelay: "0.5s" },
  { top: "78%", left: "28%", animationDelay: "1s" },
  { top: "-14px", left: "68%", animationDelay: "1.4s" },
];

export default function SparklesText({ children = "Mágico" }: { children?: string }) {
  return (
    <span className="sparkles-text">
      {children}
      {stars.map((style, i) => (
        <svg key={i} viewBox="0 0 21 21" style={style} aria-hidden="true">
          <path d="M10.5 0 13 8l8 2.5-8 2.5-2.5 8L8 13 0 10.5 8 8Z" />
        </svg>
      ))}
    </span>
  );
}
