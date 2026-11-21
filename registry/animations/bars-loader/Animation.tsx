import "./animation.css";
import type { CSSProperties } from "react";

export default function BarsLoader({ bars = 5 }: { bars?: number }) {
  return (
    <div className="bars-loader" role="status" aria-label="Carregando">
      {Array.from({ length: bars }, (_, i) => (
        <span key={i} style={{ "--i": i } as CSSProperties} />
      ))}
    </div>
  );
}
