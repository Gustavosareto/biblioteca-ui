import "./animation.css";
import type { ReactNode } from "react";

export default function ClipReveal({ children }: { children?: ReactNode }) {
  return <div className="clip-reveal">{children}</div>;
}
