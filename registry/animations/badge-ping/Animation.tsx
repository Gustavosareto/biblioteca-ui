import "./animation.css";
import type { ReactNode } from "react";

export default function BadgePing({ children = "Mensagens" }: { children?: ReactNode }) {
  return <span className="badge-ping">{children}</span>;
}
