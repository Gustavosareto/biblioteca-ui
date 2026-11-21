import "./animation.css";
import type { ReactNode } from "react";

export default function TiltCard({ children = "Passe o mouse pelos cantos" }: { children?: ReactNode }) {
  return (
    <div className="tilt-card">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} className="tilt-card__zone" aria-hidden="true" />
      ))}
      <div className="tilt-card__body">{children}</div>
    </div>
  );
}
