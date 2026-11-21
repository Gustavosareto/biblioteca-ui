import "./animation.css";
import type { CSSProperties, ReactNode } from "react";

export default function BeamsBackground({ children = "Seu título aqui", beams = 6 }: { children?: ReactNode; beams?: number }) {
  return (
    <div className="beams-background">
      {Array.from({ length: beams }, (_, i) => (
        <span key={i} className="beams-background__beam" style={{ "--i": i } as CSSProperties} />
      ))}
      <div className="beams-background__content">{children}</div>
    </div>
  );
}
