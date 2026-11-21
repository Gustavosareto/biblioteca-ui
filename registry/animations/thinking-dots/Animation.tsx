import "./animation.css";

export default function ThinkingDots({ children = "Pensando" }: { children?: string }) {
  return (
    <span className="thinking-dots" role="status">
      {children}
      <span aria-hidden="true">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </span>
  );
}
