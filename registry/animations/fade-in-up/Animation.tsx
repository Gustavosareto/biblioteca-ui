import "./animation.css";
import type { ReactNode } from "react";

export default function FadeInUp({ children }: { children?: ReactNode }) {
  return <div className="fade-in-up">{children}</div>;
}
