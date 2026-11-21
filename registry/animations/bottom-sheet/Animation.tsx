import "./animation.css";
import type { ReactNode } from "react";

export default function BottomSheet({ title = "Título", children = "Conteúdo da folha." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="sheet-backdrop">
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
        <h2 id="sheet-title">{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}
