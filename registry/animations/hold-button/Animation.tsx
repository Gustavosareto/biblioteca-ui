import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function HoldButton({ children = "Segure para excluir", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props} className={"hold-button " + className}>
      <span>{children}</span>
    </button>
  );
}
