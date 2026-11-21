import "./animation.css";
import type { CSSProperties, ReactNode } from "react";

export default function RippleRings({ children = "Ripple" }: { children?: ReactNode }) {
  return (
    <div className="ripple-rings">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="ripple-rings__ring" style={{ "--i": i } as CSSProperties} aria-hidden="true" />
      ))}
      {children}
    </div>
  );
}
