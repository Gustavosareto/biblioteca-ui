import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function DotFillButton({ children = "Começar", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...props} className={"dot-fill-button " + className}>
      <span>{children}</span>
    </button>
  );
}
