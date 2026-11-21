import "./animation.css";

export default function TooltipPop({ children = "Salvar", tip = "Ctrl + S" }: { children?: string; tip?: string }) {
  return (
    <span className="tooltip-pop">
      <button type="button">{children}</button>
      <span className="tooltip-pop__tip" role="tooltip">
        {tip}
      </span>
    </span>
  );
}
