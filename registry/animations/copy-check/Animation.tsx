import "./animation.css";
import type { InputHTMLAttributes } from "react";

export default function CopyCheck(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="copy-check">
      <input type="checkbox" aria-label="Copiar" {...props} />
      <svg className="copy-check__copy" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M15 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" />
      </svg>
      <svg className="copy-check__done" viewBox="0 0 24 24" aria-hidden="true">
        <path pathLength={1} d="m5 12 5 5 9-10" />
      </svg>
    </label>
  );
}
