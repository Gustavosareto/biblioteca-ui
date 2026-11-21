import { Logo } from "@/components/Logo";

const WORD = "UI Motion";

// só CSS: aparece na primeira pintura (antes da hidratação) e some sozinho; navegação client-side não o re-renderiza
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="pl-center">
        <Logo className="pl-logo" />
        <div className="pl-word">
          {[...WORD].map((ch, i) => (
            <span key={i} style={{ "--i": i } as React.CSSProperties}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </div>
      </div>
      <div className="pl-foot">
        <div className="pl-bar" />
        <div className="pl-count" />
      </div>
    </div>
  );
}
