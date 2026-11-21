import "./animation.css";
import type { InputHTMLAttributes } from "react";

export default function SunMoon(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="sun-moon">
      <input type="checkbox" aria-label="Modo escuro" {...props} />
      <span className="sun-moon__icon" aria-hidden="true" />
    </label>
  );
}
