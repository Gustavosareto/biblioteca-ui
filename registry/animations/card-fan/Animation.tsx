import "./animation.css";
import type { CSSProperties } from "react";

// --i: posição (-1 esquerda, 0 centro, 1 direita); --y: |--i|
const cards = [
  { background: "#8b3dff", "--i": -1, "--y": 1 },
  { background: "#22d3ee", "--i": 0, "--y": 0 },
  { background: "#f472b6", "--i": 1, "--y": 1 },
] as unknown as CSSProperties[];

export default function CardFan() {
  return (
    <div className="card-fan" role="img" aria-label="Três cartas em leque">
      {cards.map((style, i) => (
        <span key={i} style={style} />
      ))}
    </div>
  );
}
