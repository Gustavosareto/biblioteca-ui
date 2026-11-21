import "./animation.css";
import type { CSSProperties } from "react";

export default function TextRoll({ children = "Passe o mouse" }: { children?: string }) {
  return (
    <span className="text-roll">
      <span className="text-roll__sr">{children}</span>
      {[...children].map((char, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i } as CSSProperties}>
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}
