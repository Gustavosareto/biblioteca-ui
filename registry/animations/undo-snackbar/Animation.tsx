import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function UndoSnackbar({ children = "Item excluído", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="undo-snackbar" role="status">
      <svg className="undo-snackbar__ring" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="8" pathLength={100} />
        <circle cx="10" cy="10" r="8" pathLength={100} />
      </svg>
      <span>{children}</span>
      <button type="button" {...props}>
        Desfazer
      </button>
    </div>
  );
}
