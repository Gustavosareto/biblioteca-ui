import "./animation.css";
import type { ButtonHTMLAttributes } from "react";

export default function PulsatingButton({ children = "Começar agora", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className="pulsating-button" {...props}>
      {children}
    </button>
  );
}
