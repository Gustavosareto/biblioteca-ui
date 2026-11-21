import "./animation.css";
import type { ReactNode } from "react";

export default function ScaleIn({ children }: { children?: ReactNode }) {
  return <div className="scale-in">{children}</div>;
}
