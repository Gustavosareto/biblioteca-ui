import "./animation.css";

export default function GlareHover({ children = "Passe o mouse" }: { children?: string }) {
  return (
    <div className="glare-hover" tabIndex={0}>
      {children}
    </div>
  );
}
