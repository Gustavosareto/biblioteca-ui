import "./animation.css";
import type { ReactNode } from "react";

export default function DrawerFoldingScreen({ title = "Título", children = "Conteúdo do painel." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="fold-backdrop">
      <aside className="fold-drawer" role="dialog" aria-modal="true" aria-labelledby="fold-title">
        <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        <div className="fold-content">
          <h2 id="fold-title">{title}</h2>
          <p>{children}</p>
        </div>
      </aside>
    </div>
  );
}
