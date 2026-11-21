import "./animation.css";

const d = "M50 25C60 10 90 10 90 25S60 40 50 25 10 10 10 25s30 15 40 0";

export default function InfinityLoader() {
  return (
    <svg className="infinity-loader" viewBox="0 0 100 50" role="status" aria-label="Carregando">
      <path className="infinity-loader__track" pathLength={100} d={d} />
      <path className="infinity-loader__beam" pathLength={100} d={d} />
    </svg>
  );
}
