import "./animation.css";
import type { InputHTMLAttributes } from "react";

export default function HamburgerToX(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="hamburger">
      <input type="checkbox" aria-label="Abrir menu" {...props} />
      <span /><span /><span />
    </label>
  );
}
