import "./animation.css";
import type { ReactNode } from "react";

export default function DrawerElasticEdge({ title = "Título", children = "Conteúdo do painel." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="elastic-backdrop">
      <aside className="elastic-drawer" role="dialog" aria-modal="true" aria-labelledby="elastic-title">
        <h2 id="elastic-title">{title}</h2>
        <p>{children}</p>
      </aside>
    </div>
  );
}
