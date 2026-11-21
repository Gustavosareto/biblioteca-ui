import "./animation.css";
import type { ReactNode } from "react";

export default function GradientText({ children = "Gradiente" }: { children?: ReactNode }) {
  return <span className="gradient-text">{children}</span>;
}
