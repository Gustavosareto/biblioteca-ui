import "./animation.css";
import type { ReactNode } from "react";

export default function ModalPopIn({ title = "Título", children = "Conteúdo do modal." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="modal-backdrop">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 id="modal-title">{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}
