import "./animation.css";
import type { ReactNode } from "react";

export default function Aurora({ children = "Aurora" }: { children?: ReactNode }) {
  return <div className="aurora">{children}</div>;
}
