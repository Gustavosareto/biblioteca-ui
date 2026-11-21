import "./animation.css";
import type { InputHTMLAttributes } from "react";

export default function CheckboxDraw({ label = "Tarefa concluída", ...props }: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <label className="checkbox-draw">
      <input type="checkbox" {...props} />
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path pathLength={1} d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
      <span>{label}</span>
    </label>
  );
}
