import "./animation.css";
import type { CSSProperties } from "react";

// [coluna, linha] das células que piscam
const cells = [[1, 1], [4, 0], [2, 3], [6, 2], [0, 4], [5, 4], [7, 1], [3, 1], [8, 3], [2, 0]];

export default function AnimatedGrid() {
  return (
    <div className="animated-grid" role="img" aria-label="Grade com células piscando">
      {cells.map(([x, y], i) => (
        <span key={i} style={{ "--x": x, "--y": y, "--d": `${i * 0.4}s` } as CSSProperties} />
      ))}
    </div>
  );
}
