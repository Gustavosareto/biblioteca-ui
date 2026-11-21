import "./animation.css";

export default function GlitchText({ children = "Glitch" }: { children?: string }) {
  return (
    <span className="glitch-text" data-text={children}>
      {children}
    </span>
  );
}
