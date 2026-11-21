import { readFile } from "node:fs/promises";
import { join } from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { AnimationDemo } from "@/components/AnimationDemo";
import { CodeTabs } from "@/components/CodeTabs";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Stage } from "@/components/Stage";
import { animations, getAnimation, getCategory } from "@/registry/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return animations.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${getAnimation(slug)?.name ?? "Animação"} · UI Motion`, description: getAnimation(slug)?.description };
}

export default async function AnimationPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const meta = getAnimation(slug);
  const category = getCategory(categorySlug);
  if (!meta || !category || meta.category !== category.slug) notFound();

  // o código exibido é exatamente o arquivo que roda no preview
  const dir = join(process.cwd(), "registry", "animations", slug);
  const [css, tsx] = await Promise.all([readFile(join(dir, "animation.css"), "utf8"), readFile(join(dir, "Animation.tsx"), "utf8")]);

  return (
    <div className="px-4 py-8 sm:px-10">
      <nav aria-label="Trilha" className="mb-5 flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
        <Link href="/" className="hover:text-fg">Início</Link>
        <ChevronRight className="size-3.5" />
        <Link href={`/${category.slug}`} className="hover:text-fg">{category.name}</Link>
        <ChevronRight className="size-3.5" />
        <span className="text-fg">{meta.name}</span>
      </nav>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-[34px] font-bold leading-tight tracking-[-0.02em] sm:text-[40px]">{meta.name}</h1>
          <p className="mt-1.5 text-[15px] text-fg-dim">{meta.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {meta.tags.map((t) => (
              <span key={t} className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[12px] text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
        <FavoriteButton slug={slug} />
      </div>

      <Stage replayButton className="mt-7 h-[340px] rounded-[16px] border border-line bg-card sm:h-[380px]">
        <AnimationDemo meta={meta} />
      </Stage>

      <div className="mt-7">
        <CodeTabs
          tabs={[
            { id: "css", label: "CSS", file: "animation.css", code: css },
            { id: "react", label: "React", file: "Animation.tsx", code: tsx },
          ]}
        />
        <p className="mt-3 text-[13px] text-muted">
          React: copie <code className="font-mono text-fg">Animation.tsx</code> e{" "}
          <code className="font-mono text-fg">animation.css</code> para a mesma pasta.
        </p>
      </div>
    </div>
  );
}
