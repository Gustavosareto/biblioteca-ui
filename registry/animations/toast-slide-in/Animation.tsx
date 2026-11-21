import "./animation.css";
import type { ReactNode } from "react";

export default function ToastSlideIn({ children = "Sucesso!" }: { children?: ReactNode }) {
  return (
    <div className="toast" role="status">
      <span className="toast__icon" aria-hidden="true">✓</span>
      <span>{children}</span>
      <span className="toast__progress" />
    </div>
  );
}
