import "./animation.css";
import type { ReactNode } from "react";

export default function SlideInLeft({ children }: { children?: ReactNode }) {
  return <div className="slide-in-left">{children}</div>;
}
