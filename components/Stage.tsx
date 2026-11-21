"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Palco do preview: remonta o conteúdo (key) para reiniciar as animações CSS.
export function Stage({
  children,
  className = "",
  replayButton = false,
  replayOnHover = false,
  inert = false,
}: {
  children: ReactNode;
  className?: string;
  replayButton?: boolean;
  replayOnHover?: boolean;
  inert?: boolean;
}) {
  const [run, setRun] = useState(0);
  const replay = () => setRun((r) => r + 1);
  const ref = useRef<HTMLDivElement>(null);

  // escuta o pai (o card): o link esticado do card fica por cima do palco e engoliria o mouseenter
  useEffect(() => {
    const card = replayOnHover ? ref.current?.parentElement : null;
    if (!card) return;
    const onEnter = () => setRun((r) => r + 1);
    card.addEventListener("mouseenter", onEnter);
    return () => card.removeEventListener("mouseenter", onEnter);
  }, [replayOnHover]);

  return (
    <div
      ref={ref}
      // translateZ cria containing block: elementos position:fixed (ex: modal) ficam presos ao palco
      className={`stage relative grid place-items-center overflow-hidden bg-[radial-gradient(#ffffff10_1px,transparent_1px)] text-[40px] [background-size:16px_16px] [transform:translateZ(0)] ${className}`}
    >
      <div key={run} inert={inert} className="contents">
        {children}
      </div>
      {replayButton && (
        <button
          type="button"
          onClick={replay}
          className="absolute right-3 top-3 z-10 flex h-9 items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 text-[13px] font-medium transition-colors hover:bg-tint/[0.08] active:scale-[0.97]"
        >
          <RotateCcw className="size-4" /> Replay
        </button>
      )}
    </div>
  );
}
