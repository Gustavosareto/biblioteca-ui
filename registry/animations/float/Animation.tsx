import "./animation.css";
import type { ReactNode } from "react";

export default function Float({ children }: { children?: ReactNode }) {
  return <div className="float">{children}</div>;
}
