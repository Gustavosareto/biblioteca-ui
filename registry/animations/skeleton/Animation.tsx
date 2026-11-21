import "./animation.css";

export default function Skeleton({ label = "Carregando" }: { label?: string }) {
  return (
    <div className="skeleton" role="status" aria-label={label}>
      <span className="skeleton__circle" />
      <span className="skeleton__lines">
        <span className="skeleton__line" />
        <span className="skeleton__line" />
      </span>
    </div>
  );
}
