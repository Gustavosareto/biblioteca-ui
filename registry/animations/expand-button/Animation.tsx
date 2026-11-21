import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function ExpandButton({ children = "Download", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props} className={"expand-button " + className}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />
      </svg>
      <span className="expand-button__label">{children}</span>
    </button>
  );
}
