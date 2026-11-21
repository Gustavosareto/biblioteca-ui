import "./animation.css";

export default function DynamicIsland({ children = "Nova mensagem de Ana" }: { children?: string }) {
  return (
    <div className="dynamic-island" role="status">
      <span className="dynamic-island__avatar" aria-hidden="true" />
      <span className="dynamic-island__text">{children}</span>
    </div>
  );
}
