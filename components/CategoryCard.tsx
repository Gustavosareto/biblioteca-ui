import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import type { Category } from "@/registry/categories";
import { animationsIn, countLabel } from "@/registry/data";
import { previews } from "./previews";

// posição do preview dentro do card (fiel à referência)
const previewPos: Record<string, string> = {
  animacoes: "right-[46px] bottom-[22px]",
  componentes: "right-[38px] bottom-[34px]",
  "efeitos-de-texto": "right-[100px] bottom-[42px]",
  transicoes: "right-[26px] bottom-[18px]",
  microinteracoes: "right-[38px] bottom-[38px]",
  carregamentos: "right-[38px] bottom-[28px]",
  "icones-animados": "right-[54px] bottom-[34px]",
  notificacoes: "right-[16px] bottom-[26px]",
  "modais-overlays": "right-[22px] bottom-[24px]",
  "menus-navegacao": "right-[38px] bottom-[38px]",
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group relative flex min-h-[150px] flex-col overflow-hidden rounded-[14px] border border-line bg-card p-[15px] pr-[14px] transition-[border-color,transform,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[16px] font-semibold leading-[20px]">{category.name}</h3>
          <p className="mt-[5px] max-w-[150px] text-[13px] leading-[18px] text-fg-dim">{category.description}</p>
        </div>
        <span className="grid size-[34px] shrink-0 place-items-center rounded-full border border-line-strong bg-surface transition-colors group-hover:bg-fg group-hover:text-bg">
          <ArrowRight className="size-4" />
        </span>
      </div>

      <div className={`um-preview pointer-events-none absolute ${previewPos[category.slug] ?? "right-6 bottom-6"}`}>
        {previews[category.slug]}
      </div>

      <span className="relative mt-auto inline-flex h-[27px] w-fit items-center gap-2 rounded-full border border-line bg-surface px-[9px] text-[11px] text-fg-soft">
        <Layers className="size-[15px]" strokeWidth={1.75} /> {countLabel(animationsIn(category.slug).length)}
      </span>
    </Link>
  );
}
