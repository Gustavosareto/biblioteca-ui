import "./animation.css";
import type { ReactNode } from "react";

// valores fixos (não Math.random) para o HTML do servidor bater com o do cliente
const meteors = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  animationDelay: `${((i * 0.73) % 3).toFixed(2)}s`,
  animationDuration: `${2 + (i % 4) * 0.6}s`,
}));

export default function Meteors({ children = "Meteoros" }: { children?: ReactNode }) {
  return (
    <div className="meteors">
      {meteors.map((style, i) => (
        <span key={i} className="meteors__meteor" style={style} aria-hidden="true" />
      ))}
      {children}
    </div>
  );
}
