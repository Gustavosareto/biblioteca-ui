import "./animation.css";
import type { ReactNode } from "react";

const skeleton = (
  <>
    <span /><span /><span /><span />
  </>
);

export default function DrawerPushAside({ title = "Título", children = "Conteúdo do painel.", page = skeleton }: { title?: string; children?: ReactNode; page?: ReactNode }) {
  return (
    <div className="push-root">
      <div className="push-page" aria-hidden="true">{page}</div>
      <aside className="push-drawer" role="dialog" aria-modal="true" aria-labelledby="push-title">
        <h2 id="push-title">{title}</h2>
        <p>{children}</p>
      </aside>
    </div>
  );
}
