import "./animation.css";
import type { CSSProperties } from "react";

export default function CommandPalette({ items = ["Novo arquivo", "Abrir projeto", "Configurações", "Sair"] }: { items?: string[] }) {
  return (
    <div className="command-palette-backdrop">
      <div className="command-palette" role="dialog" aria-modal="true" aria-label="Paleta de comandos">
        <input placeholder="Buscar comando..." aria-label="Buscar comando" />
        <ul>
          {items.map((item, i) => (
            <li key={item} style={{ "--i": i } as CSSProperties}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
