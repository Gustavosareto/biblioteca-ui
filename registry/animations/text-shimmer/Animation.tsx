import "./animation.css";

export default function TextShimmer({ children = "Gerando resposta..." }: { children?: string }) {
  return <span className="text-shimmer">{children}</span>;
}
