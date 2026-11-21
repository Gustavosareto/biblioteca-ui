import "./animation.css";

export default function GooeyLoader() {
  return (
    <div className="gooey-loader" role="status" aria-label="Carregando">
      <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
        <filter id="gooey-loader">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" />
        </filter>
      </svg>
      <span />
      <span />
      <span />
    </div>
  );
}
