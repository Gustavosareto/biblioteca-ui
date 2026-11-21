import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function PressButton({ children = "Pressione", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className="press-button" {...props}>
      {children}
    </button>
  );
}
