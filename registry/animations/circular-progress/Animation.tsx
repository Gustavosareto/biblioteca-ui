import "./animation.css";

export default function CircularProgress() {
  return (
    <div className="circular-progress" role="progressbar" aria-label="Carregando">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="42" pathLength="100" />
        <circle cx="50" cy="50" r="42" pathLength="100" />
      </svg>
    </div>
  );
}
