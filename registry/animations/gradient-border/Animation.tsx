import "./animation.css";
import type { ReactNode } from "react";

export default function GradientBorder({ children = "Borda animada" }: { children?: ReactNode }) {
  return <div className="gradient-border">{children}</div>;
}
