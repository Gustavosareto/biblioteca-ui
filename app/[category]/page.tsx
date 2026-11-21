import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { AnimationCard } from "@/components/AnimationCard";
import { SectionTitle } from "@/components/SectionTitle";
import { categories } from "@/registry/categories";
import { animationsIn, countLabel, getCategory } from "@/registry/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  return { title: `${getCategory(category)?.name ?? "Categoria"} · UI Motion` };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = animationsIn(slug);

  return (
    <div className="px-4 py-8 sm:px-10">
      <nav aria-label="Trilha" className="mb-5 flex items-center gap-1.5 text-[13px] text-muted">
        <Link href="/" className="hover:text-fg">Início</Link>
        <ChevronRight className="size-3.5" />
        <span className="text-fg">{category.name}</span>
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <SectionTitle as="h1">{category.name}</SectionTitle>
          <p className="mt-2 pl-[18px] text-[15px] text-fg-dim">{category.description}</p>
        </div>
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-[12px] text-fg-soft">
          {countLabel(items.length)}
        </span>
      </div>

      {items.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 gap-[21px] sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {items.map((a) => (
            <AnimationCard key={a.slug} meta={a} />
          ))}
        </div>
      ) : (
        <div className="mt-7 grid h-[240px] place-items-center rounded-[14px] border border-dashed border-line-strong text-[14px] text-muted">
          Nenhuma animação nesta categoria ainda.
        </div>
      )}
    </div>
  );
}
