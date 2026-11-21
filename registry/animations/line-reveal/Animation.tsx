import "./animation.css";
import type { CSSProperties } from "react";

export default function LineReveal({ lines = ["Anime cada", "linha do seu", "título."] }: { lines?: string[] }) {
  return (
    <p className="line-reveal">
      {lines.map((line, i) => (
        <span key={i} className="line-reveal__line">
          <span style={{ "--i": i } as CSSProperties}>{line}</span>
        </span>
      ))}
    </p>
  );
}
