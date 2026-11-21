import "./animation.css";
import type { CSSProperties } from "react";

export default function WaveText({ children = "Ondas" }: { children?: string }) {
  return (
    <span className="wave-text">
      <span className="wave-text__sr">{children}</span>
      {[...children].map((char, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i } as CSSProperties}>
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}
