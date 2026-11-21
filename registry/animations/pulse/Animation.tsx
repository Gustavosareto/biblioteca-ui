import "./animation.css";
import type { ReactNode } from "react";

export default function Pulse({ children }: { children?: ReactNode }) {
  return <div className="pulse">{children}</div>;
}
