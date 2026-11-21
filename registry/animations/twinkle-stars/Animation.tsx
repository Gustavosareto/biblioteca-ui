import "./animation.css";
import type { CSSProperties, ReactNode } from "react";

// posições pseudoaleatórias fixas: mesmo resultado no servidor e no cliente
export default function TwinkleStars({ children = "Boa noite", stars = 28 }: { children?: ReactNode; stars?: number }) {
  return (
    <div className="twinkle-stars">
      {Array.from({ length: stars }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ "--x": ((i * 37) % 97) + 1 + "%", "--y": ((i * 61 + 13) % 95) + 2 + "%", "--d": ((i * 7) % 30) / 10 + "s" } as CSSProperties}
        />
      ))}
      <div className="twinkle-stars__content">{children}</div>
    </div>
  );
}
