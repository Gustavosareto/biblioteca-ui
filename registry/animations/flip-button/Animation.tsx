import "./animation.css";

export default function FlipButton() {
  return (
    <button className="flip-button" type="button">
      <span className="flip-button__front">Passe o mouse</span>
      <span className="flip-button__back" aria-hidden="true">
        Vamos lá!
      </span>
    </button>
  );
}
