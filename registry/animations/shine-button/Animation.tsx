import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function ShineButton({ children = "Button →", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props} className={`shine-button ${className}`}>
      {children}
    </button>
  );
}
