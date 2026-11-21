import "./animation.css";
import type { ReactNode } from "react";

// 8×8 pixels; atraso pseudoaleatório fixo ((i*37)%64 percorre 0..63 sem repetir)
const delays = Array.from({ length: 64 }, (_, i) => `${((i * 37) % 64) * 5}ms`);

export default function PixelTransition({
  front = "Passe o mouse",
  back = "Olá! ✨",
}: {
  front?: ReactNode;
  back?: ReactNode;
}) {
  return (
    <div className="pixel-transition">
      <div className="pixel-transition__front">{front}</div>
      <div className="pixel-transition__back">{back}</div>
      <div className="pixel-transition__grid" aria-hidden="true">
        {delays.map((d, i) => (
          <span key={i} style={{ animationDelay: d }} />
        ))}
      </div>
    </div>
  );
}
