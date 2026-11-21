import "./animation.css";
import type { CSSProperties } from "react";

const bubbles = [
  { "--c": "#8b3dff", "--x": "-10%", "--y": "-20%", "--dx": "50%", "--dy": "30%", "--t": "7s" },
  { "--c": "#22d3ee", "--x": "50%", "--y": "-10%", "--dx": "-40%", "--dy": "40%", "--t": "9s" },
  { "--c": "#f472b6", "--x": "20%", "--y": "40%", "--dx": "40%", "--dy": "-30%", "--t": "8s" },
  { "--c": "#6366f1", "--x": "60%", "--y": "50%", "--dx": "-50%", "--dy": "-20%", "--t": "10s" },
] as unknown as CSSProperties[];

export default function BubbleBackground() {
  return (
    <div className="bubble-background" role="img" aria-label="Fundo com bolhas coloridas">
      {bubbles.map((style, i) => (
        <span key={i} style={style} />
      ))}
    </div>
  );
}
