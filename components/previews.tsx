import { ArrowRight, Check, Star, X } from "lucide-react";
import type { ReactNode } from "react";

const glass = "border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.02] shadow-[inset_0_1px_0_#ffffff22]";

export const previews: Record<string, ReactNode> = {
  animacoes: (
    <div className={`grid size-[82px] place-items-center rounded-[14px] ${glass}`} style={{ animation: "um-float 3s ease-in-out infinite" }}>
      <div className="size-[48px] rounded-[10px] bg-white shadow-[0_0_24px_#ffffff55]" />
    </div>
  ),
  componentes: (
    <div className="relative flex h-[40px] items-center gap-2 overflow-hidden rounded-[11px] border border-white/25 bg-black px-[19px] text-[13px] font-medium">
      Button <ArrowRight className="size-3.5" />
      <span className="absolute inset-y-0 left-0 w-6 bg-white/20 blur-[6px]" style={{ animation: "um-shine 2.8s ease-in-out infinite" }} />
    </div>
  ),
  "efeitos-de-texto": (
    <span className="text-[31px] font-semibold tracking-tight text-white" style={{ animation: "um-neon 3.5s linear infinite" }}>
      Neon
    </span>
  ),
  transicoes: (
    <div className="relative h-[80px] w-[120px]">
      <div className={`absolute right-0 top-[22px] size-[56px] rounded-[10px] ${glass}`} style={{ animation: "um-slide-front 3.4s ease-in-out infinite" }} />
      <div className={`absolute right-[28px] top-0 size-[56px] rounded-[10px] ${glass}`} />
      <div className={`absolute left-0 top-[16px] size-[58px] rounded-[10px] border-white/40 ${glass} bg-[#3b3b44]`} style={{ animation: "um-slide-back 3.4s ease-in-out infinite" }} />
    </div>
  ),
  microinteracoes: (
    <div className="flex h-[32px] w-[60px] items-center justify-end rounded-full p-[3px]" style={{ animation: "um-toggle-track 3s ease-in-out infinite" }}>
      <div className="size-[26px] rounded-full bg-white shadow" style={{ animation: "um-toggle-knob 3s cubic-bezier(.3,1.4,.5,1) infinite" }} />
    </div>
  ),
  carregamentos: (
    <div
      className="size-[56px] rounded-full border-[5px] border-white/25 border-t-white border-r-white"
      style={{ animation: "um-spin 1.1s linear infinite" }}
    />
  ),
  "icones-animados": (
    <Star className="size-[52px] text-white" strokeWidth={1.6} style={{ animation: "um-pop 2.6s ease-out infinite" }} />
  ),
  notificacoes: (
    <div className="w-[128px] overflow-hidden rounded-[8px] border border-white/20 bg-[#0d0d0f]" style={{ animation: "um-toast 4s ease-in-out infinite" }}>
      <div className="flex items-center gap-2.5 px-3 pb-2 pt-3">
        <span className="grid size-[22px] place-items-center rounded-full bg-white">
          <Check className="size-3.5 text-black" strokeWidth={3} />
        </span>
        <span className="text-[11px] font-medium">Sucesso!</span>
      </div>
      <div className="mx-3 mb-2.5 h-[3px] origin-left rounded-full bg-white/50" style={{ animation: "um-progress 4s linear infinite" }} />
    </div>
  ),
  "modais-overlays": (
    <div className="w-[100px] rounded-[6px] border border-white/20 bg-[#1a1a1d] p-2" style={{ animation: "um-modal 3s ease-in-out infinite" }}>
      <div className="flex justify-between text-white/80">
        <X className="size-2.5" /> <X className="size-2.5" />
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-[4px] w-[85%] rounded bg-white/80" />
        <div className="h-[4px] w-[50%] rounded bg-white/40" />
        <div className="h-[4px] w-[70%] rounded bg-white/40" />
      </div>
    </div>
  ),
  "menus-navegacao": (
    <div className="flex w-[42px] flex-col gap-[7px]">
      {[0, 0.2, 0.4].map((d) => (
        <span key={d} className="h-[5px] origin-right rounded-full bg-white" style={{ animation: `um-bar 2.4s ease-in-out ${d}s infinite` }} />
      ))}
    </div>
  ),
};
