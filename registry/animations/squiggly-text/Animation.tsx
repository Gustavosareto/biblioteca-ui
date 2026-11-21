import "./animation.css";

export default function SquigglyText({ children = "Rabisco vivo" }: { children?: string }) {
  return (
    <span className="squiggly-text">
      <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <filter key={i} id={`squiggly-${i}`}>
            <feTurbulence baseFrequency="0.02" numOctaves="3" seed={i} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={i % 2 ? 4 : 6} />
          </filter>
        ))}
      </svg>
      {children}
    </span>
  );
}
