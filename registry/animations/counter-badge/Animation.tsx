import "./animation.css";

export default function CounterBadge({ counts = [2, 3, 4] }: { counts?: [number, number, number] }) {
  return (
    <span className="counter-badge" role="img" aria-label="Notificações">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9m4 13a2 2 0 0 0 4 0" />
      </svg>
      <span className="counter-badge__count" aria-hidden="true">
        <span className="counter-badge__roll">
          {[...counts, counts[0]].map((n, i) => (
            <span key={i}>{n}</span>
          ))}
        </span>
      </span>
    </span>
  );
}
