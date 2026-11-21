import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function RippleButton({ children = "Clique aqui", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className="ripple-button" {...props}>
      {children}
    </button>
  );
}
