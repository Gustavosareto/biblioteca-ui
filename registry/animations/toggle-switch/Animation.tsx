import "./animation.css";
import type { InputHTMLAttributes } from "react";

export default function ToggleSwitch({ defaultChecked = true, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" aria-label="Alternar" defaultChecked={defaultChecked} {...props} />
      <span className="toggle-switch__knob" />
    </label>
  );
}
