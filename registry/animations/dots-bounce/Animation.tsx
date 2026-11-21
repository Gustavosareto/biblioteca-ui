import "./animation.css";

export default function DotsBounce({ label = "Carregando" }: { label?: string }) {
  return (
    <div className="dots-bounce" role="status" aria-label={label}>
      <span />
      <span />
      <span />
    </div>
  );
}
