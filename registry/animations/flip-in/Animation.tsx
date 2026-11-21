import "./animation.css";
import type { ReactNode } from "react";

export default function FlipIn({ children }: { children?: ReactNode }) {
  return <div className="flip-in">{children}</div>;
}
