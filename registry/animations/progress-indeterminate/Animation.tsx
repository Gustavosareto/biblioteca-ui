import "./animation.css";

export default function ProgressIndeterminate({ label = "Carregando" }: { label?: string }) {
  return (
    <div className="progress-indeterminate" role="progressbar" aria-label={label}>
      <span />
    </div>
  );
}
