import "./animation.css";
import type { InputHTMLAttributes } from "react";

export default function PlayPause(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="play-pause">
      <input type="checkbox" aria-label="Reproduzir ou pausar" {...props} />
      <span className="play-pause__icon" aria-hidden="true">
        <span />
        <span />
      </span>
    </label>
  );
}
