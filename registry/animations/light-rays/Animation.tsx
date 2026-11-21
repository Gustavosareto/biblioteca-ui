import "./animation.css";
import type { CSSProperties } from "react";

const rays = [
  { "--r": "-40deg", "--d": "-1s" },
  { "--r": "-20deg", "--d": "-3s" },
  { "--r": "0deg", "--d": "-2s" },
  { "--r": "20deg", "--d": "-4s" },
  { "--r": "40deg", "--d": "-5s" },
] as unknown as CSSProperties[];

export default function LightRays() {
  return (
    <div className="light-rays" role="img" aria-label="Raios de luz">
      {rays.map((style, i) => (
        <span key={i} style={style} />
      ))}
    </div>
  );
}
