import "./animation.css";
import type { ReactNode } from "react";

export default function NeonFlicker({ children = "Neon" }: { children?: ReactNode }) {
  return <span className="neon-flicker">{children}</span>;
}
