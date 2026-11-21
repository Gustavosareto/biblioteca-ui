import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

const arrow = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export default function ArrowSlide({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" aria-label="Próximo" {...props} className={"arrow-slide " + className}>
      {arrow}
      {arrow}
    </button>
  );
}
