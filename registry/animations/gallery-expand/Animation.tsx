import "./animation.css";
import type { CSSProperties } from "react";

const panels = [
  "linear-gradient(160deg, #8b3dff, #3b0764)",
  "linear-gradient(160deg, #22d3ee, #0e7490)",
  "linear-gradient(160deg, #f472b6, #9d174d)",
  "linear-gradient(160deg, #facc15, #b45309)",
  "linear-gradient(160deg, #34d399, #065f46)",
];

export default function GalleryExpand() {
  return (
    <div className="gallery-expand" role="img" aria-label="Galeria com painéis que se expandem">
      {panels.map((bg, i) => (
        <span key={i} style={{ "--bg": bg } as CSSProperties} />
      ))}
    </div>
  );
}
