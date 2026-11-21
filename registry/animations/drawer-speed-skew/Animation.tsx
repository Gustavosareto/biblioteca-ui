import "./animation.css";
import type { ReactNode } from "react";

export default function DrawerSpeedSkew({ title = "Título", children = "Conteúdo do painel." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="skew-backdrop">
      <aside className="skew-drawer" role="dialog" aria-modal="true" aria-labelledby="skew-title">
        <h2 id="skew-title">{title}</h2>
        <p>{children}</p>
      </aside>
    </div>
  );
}
