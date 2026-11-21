import "./animation.css";
import type { CSSProperties } from "react";

export default function Typewriter({ children = "Olá, mundo!" }: { children?: string }) {
  return (
    <span className="typewriter" style={{ "--chars": children.length } as CSSProperties}>
      {children}
    </span>
  );
}
