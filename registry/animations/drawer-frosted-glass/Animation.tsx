import "./animation.css";
import type { ReactNode } from "react";

export default function DrawerFrostedGlass({ title = "Título", children = "Conteúdo do painel." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="frost-root">
      <div className="frost-backdrop" />
      <aside className="frost-drawer" role="dialog" aria-modal="true" aria-labelledby="frost-title">
        <h2 id="frost-title">{title}</h2>
        <p>{children}</p>
      </aside>
    </div>
  );
}
