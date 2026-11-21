import "./animation.css";

export default function SpinningText({ children = "UI MOTION • ANIMAÇÕES • CSS • " }: { children?: string }) {
  const chars = Array.from(children);
  return (
    <div className="spinning-text" role="img" aria-label={children}>
      {chars.map((c, i) => (
        <span key={i} style={{ rotate: `${(360 / chars.length) * i}deg` }} aria-hidden="true">
          {c}
        </span>
      ))}
    </div>
  );
}
