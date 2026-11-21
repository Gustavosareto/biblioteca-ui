import "./animation.css";
import type { ReactNode } from "react";

export default function Bounce({ children }: { children?: ReactNode }) {
  return <div className="bounce">{children}</div>;
}
