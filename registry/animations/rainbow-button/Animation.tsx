import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function RainbowButton({ children = "Ver no GitHub", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className="rainbow-button" {...props}>
      {children}
    </button>
  );
}
