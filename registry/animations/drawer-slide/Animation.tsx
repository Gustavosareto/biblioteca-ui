import "./animation.css";
import type { ReactNode } from "react";

export default function DrawerSlide({ title = "Título", children = "Conteúdo do painel." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="drawer-backdrop">
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <h2 id="drawer-title">{title}</h2>
        <p>{children}</p>
      </aside>
    </div>
  );
}
