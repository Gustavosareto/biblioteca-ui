import "./animation.css";
import type { ReactNode } from "react";

export default function BlurIn({ children }: { children?: ReactNode }) {
  return <div className="blur-in">{children}</div>;
}
