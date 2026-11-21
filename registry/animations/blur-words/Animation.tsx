import "./animation.css";
import type { CSSProperties } from "react";

export default function BlurWords({ children = "Texto que aparece aos poucos" }: { children?: string }) {
  return (
    <p className="blur-words">
      <span className="blur-words__sr">{children}</span>
      {children.split(" ").map((word, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i } as CSSProperties}>
          {word}
        </span>
      ))}
    </p>
  );
}
