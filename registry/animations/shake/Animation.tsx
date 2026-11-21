import "./animation.css";
import type { ReactNode } from "react";

export default function Shake({ children }: { children?: ReactNode }) {
  return <div className="shake">{children}</div>;
}
