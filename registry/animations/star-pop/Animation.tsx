import "./animation.css";
import type { InputHTMLAttributes } from "react";

export default function StarPop(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="star-pop">
      <input type="checkbox" aria-label="Favoritar" {...props} />
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z" />
      </svg>
    </label>
  );
}
