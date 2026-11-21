import "./animation.css";

export default function SpinnerRing({ label = "Carregando" }: { label?: string }) {
  return <div className="spinner-ring" role="status" aria-label={label} />;
}
