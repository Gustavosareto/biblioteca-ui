import "./animation.css";
import type { ReactNode } from "react";

export default function PopoverSpring({ label = "Detalhes", title = "Plano Pro", children = "Projetos ilimitados e suporte prioritário." }: { label?: string; title?: string; children?: ReactNode }) {
  return (
    <details className="popover-spring">
      <summary>{label}</summary>
      <div className="popover-spring__panel">
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </details>
  );
}
