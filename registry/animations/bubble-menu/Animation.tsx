import "./animation.css";
import type { CSSProperties } from "react";

export default function BubbleMenu({ items = ["Início", "Projetos", "Contato"] }: { items?: string[] }) {
  return (
    <nav className="bubble-menu" aria-label="Menu">
      <label className="bubble-menu__toggle">
        <input type="checkbox" aria-label="Abrir menu" />
        <span aria-hidden="true" />
      </label>
      <ul>
        {items.map((item, i) => (
          <li key={item} style={{ "--i": i } as CSSProperties}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
