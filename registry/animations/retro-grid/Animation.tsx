import "./animation.css";
import type { ReactNode } from "react";

export default function RetroGrid({ children = "Retro Grid" }: { children?: ReactNode }) {
  return (
    <div className="retro-grid">
      <div className="retro-grid__floor" aria-hidden="true" />
      <div className="retro-grid__content">{children}</div>
    </div>
  );
}
