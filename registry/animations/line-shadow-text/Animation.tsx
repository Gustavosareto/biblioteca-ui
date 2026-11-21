import "./animation.css";

export default function LineShadowText({ children = "Motion" }: { children?: string }) {
  return (
    <span className="line-shadow-text" data-text={children}>
      {children}
    </span>
  );
}
