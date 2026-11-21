import { ArrowRight, Sparkle } from "lucide-react";

export function CtaCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center gap-[26px] overflow-hidden rounded-[14px] border border-line-strong bg-panel px-[30px] py-6 ${className}`}>
      <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 620 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M360 160 C470 150 560 110 620 40" stroke="#8b3dff" strokeWidth="1.6" fill="none" />
        <path d="M400 160 C500 150 575 120 620 80" stroke="#8b3dff" strokeOpacity=".55" strokeWidth="1.2" fill="none" />
        <path d="M330 160 C450 148 540 100 620 10" stroke="#8b3dff" strokeOpacity=".35" strokeWidth="1" fill="none" />
      </svg>
      <div className="pointer-events-none absolute -bottom-16 right-0 size-48 rounded-full bg-violet/20 blur-3xl" />

      <Sparkle className="relative size-[46px] shrink-0 fill-violet text-violet drop-shadow-[0_0_12px_#8b3dff99]" strokeWidth={1} />
      <div className="relative">
        <h3 className="max-w-[200px] text-[20px] font-bold leading-[22px]">Explore, copie e reutilize!</h3>
        <p className="mt-2 max-w-[240px] text-[13px] leading-[16px] text-fg-soft">
          Sua biblioteca completa de UI Motion, sempre ao seu alcance.
        </p>
        <a
          href="/animacoes"
          className="mt-3.5 inline-flex h-[29px] items-center gap-2 rounded-[7px] bg-fg px-4 text-[12px] font-semibold text-bg transition-transform active:scale-[0.97]"
        >
          Começar Agora <ArrowRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
