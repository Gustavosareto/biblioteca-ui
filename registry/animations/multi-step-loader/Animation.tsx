import "./animation.css";

// exatamente 4 etapas: o passo do gradiente no CSS é calculado para 4
export default function MultiStepLoader({
  steps = ["Conectando", "Lendo arquivos", "Gerando estilos", "Pronto!"],
}: {
  steps?: [string, string, string, string];
}) {
  return (
    <ol className="multi-step-loader" aria-label="Progresso">
      {steps.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  );
}
