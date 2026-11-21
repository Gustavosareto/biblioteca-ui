import "./animation.css";

// exatamente 3 palavras: os keyframes do CSS são calculados para 3
export default function WordRotate({
  prefix = "Interfaces",
  words = ["rápidas", "bonitas", "fluidas"],
}: {
  prefix?: string;
  words?: [string, string, string];
}) {
  return (
    <span className="word-rotate">
      {prefix}{" "}
      <span className="word-rotate__window">
        <span className="word-rotate__list">
          {[...words, words[0]].map((w, i) => (
            <span key={i} aria-hidden={i === 3 || undefined}>{w}</span>
          ))}
        </span>
      </span>
    </span>
  );
}
