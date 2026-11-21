import "./animation.css";
import type { ReactNode } from "react";

export default function BorderBeam({ children = "Card em destaque com um feixe de luz na borda." }: { children?: ReactNode }) {
  return <div className="border-beam">{children}</div>;
}
