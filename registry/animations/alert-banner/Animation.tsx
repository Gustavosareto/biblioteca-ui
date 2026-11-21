import "./animation.css";
import type { ReactNode } from "react";

export default function AlertBanner({ title = "Nova versão", children = "disponível. Atualize para ver as novidades." }: { title?: string; children?: ReactNode }) {
  return (
    <div className="alert-banner">
      <div className="alert-banner__inner">
        <div className="alert-banner__box" role="status">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5m0-8v.01" />
          </svg>
          <p>
            <strong>{title}</strong> {children}
          </p>
          <label className="alert-banner__close">
            <input type="checkbox" aria-label="Fechar aviso" />
            <span aria-hidden="true">×</span>
          </label>
        </div>
      </div>
    </div>
  );
}
