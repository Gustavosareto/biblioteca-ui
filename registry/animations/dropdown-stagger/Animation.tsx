import "./animation.css";
import type { CSSProperties } from "react";

export default function DropdownStagger({ label = "Opções", items = ["Editar", "Duplicar", "Compartilhar", "Excluir"] }: { label?: string; items?: string[] }) {
  return (
    <details className="dropdown-stagger">
      <summary>
        {label}
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul>
        {items.map((item, i) => (
          <li key={item} style={{ "--i": i } as CSSProperties}>
            {item}
          </li>
        ))}
      </ul>
    </details>
  );
}
