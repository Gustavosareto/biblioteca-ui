import "./animation.css";
import type { ReactNode } from "react";

export default function DrawerParallaxLayers({ title = "Título", children = "Conteúdo do painel." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="plx-backdrop">
      <span className="plx-layer plx-l1" aria-hidden="true" />
      <span className="plx-layer plx-l2" aria-hidden="true" />
      <aside className="plx-drawer" role="dialog" aria-modal="true" aria-labelledby="plx-title">
        <h2 id="plx-title">{title}</h2>
        <p>{children}</p>
      </aside>
    </div>
  );
}
