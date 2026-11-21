import "./animation.css";
import type { CSSProperties } from "react";

export default function StaggerList({ items = ["Ana", "Bruno", "Carla", "Diego"] }: { items?: string[] }) {
  return (
    <ul className="stagger-list">
      {items.map((item, i) => (
        <li key={item} style={{ "--i": i } as CSSProperties}>
          <span aria-hidden="true">{item[0]}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
