import "./animation.css";

const icons: Record<string, string> = {
  Início: "M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z",
  Buscar: "M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0m2 9-4-4",
  Avisos: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9m4 13a2 2 0 0 0 4 0",
  Perfil: "M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21a8 8 0 0 1 16 0",
};

export default function DockMenu({ name = "dock-menu" }: { name?: string }) {
  return (
    <div className="dock-menu" role="radiogroup" aria-label="Navegação">
      {Object.entries(icons).map(([label, d], i) => (
        <label key={label}>
          <input type="radio" name={name} defaultChecked={i === 0} aria-label={label} />
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={d} />
          </svg>
          <span aria-hidden="true">{label}</span>
        </label>
      ))}
    </div>
  );
}
