import { BookOpen, Play, Star } from "lucide-react";
import { HeroArt } from "./HeroArt";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line px-4 pb-[28px] sm:px-10 pt-[27px]">
      {/* arcos sutis do fundo */}
      <svg className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
        <circle cx="78%" cy="135%" r="620" stroke="#ffffff0b" fill="none" />
        <circle cx="70%" cy="120%" r="470" stroke="#ffffff08" fill="none" />
      </svg>
      <div className="pointer-events-none absolute -right-20 -top-24 size-[520px] rounded-full bg-[radial-gradient(closest-side,#ffffff0a,transparent)]" />

      <div className="relative z-10">
        <span className="inline-flex h-[38px] items-center gap-2.5 rounded-full border border-line-strong bg-surface px-[15px] text-[14px] font-medium">
          <Star className="size-[17px] fill-fg" strokeWidth={1.5} /> Sua biblioteca de animações
        </span>
        <h1 className="mt-[7px] text-[64px] sm:text-[94px] font-extrabold leading-[0.95] tracking-[-0.035em]">
          UI <span className="bg-gradient-to-b from-[#a24bff] to-[#7b2ff2] bg-clip-text text-transparent">Motion</span>
        </h1>
        <p className="mt-[5px] max-w-[520px] text-[17px] leading-[24px] text-fg-dim sm:text-[20px] sm:leading-[26px]">
          Animações modernas, leves e prontas para usar <br className="hidden sm:block" />
          em seus projetos, com exemplos e nomes organizados.
        </p>
        <div className="mt-[22px] flex flex-wrap gap-[23px]">
          <a
            href="/animacoes"
            className="flex h-[47px] items-center gap-3.5 rounded-full bg-fg px-[32px] text-[15px] font-semibold text-bg transition-transform active:scale-[0.97]"
          >
            <Play className="size-[17px] fill-bg" /> Explorar Animações
          </a>
          <a
            href="#"
            className="flex h-[47px] items-center gap-3 rounded-full border border-fg/60 px-[30px] text-[14px] font-medium transition-colors hover:bg-tint/[0.06] active:scale-[0.97]"
          >
            <BookOpen className="size-[18px]" strokeWidth={1.75} /> Ver Documentação
          </a>
        </div>
      </div>

      <HeroArt className="pointer-events-none absolute -top-[14px] right-[36px] hidden w-[600px] md:block xl:w-[600px]" />
    </section>
  );
}
