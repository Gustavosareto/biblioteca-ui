import Link from "next/link";
import type { AnimationMeta } from "@/registry/data";
import { AnimationDemo } from "./AnimationDemo";
import { Stage } from "./Stage";

export function AnimationCard({ meta }: { meta: AnimationMeta }) {
  return (
    // div + link esticado (não <Link> em volta): o preview pode conter <a>/<button>, que não podem ficar dentro de <a>
    <div className="group relative flex flex-col overflow-hidden rounded-[14px] border border-line bg-card transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-violet">
      <Stage replayOnHover inert className="h-[190px] border-b border-line">
        <AnimationDemo meta={meta} />
      </Stage>
      <div className="p-4">
        <h3 className="text-[16px] font-semibold">
          <Link href={`/${meta.category}/${meta.slug}`} className="outline-none after:absolute after:inset-0 after:z-10">
            {meta.name}
          </Link>
        </h3>
        <p className="mt-1 text-[13px] leading-[18px] text-fg-dim">{meta.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {meta.tags.map((t) => (
            <span key={t} className="rounded-full border border-line bg-surface px-2 py-0.5 text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
