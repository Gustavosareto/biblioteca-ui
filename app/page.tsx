import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { AnimationCard } from "@/components/AnimationCard";
import { CtaCard } from "@/components/CtaCard";
import { SectionTitle } from "@/components/SectionTitle";
import { animations, getAnimation, type AnimationMeta } from "@/registry/data";

const FEATURED = ["dock-menu", "border-beam", "command-palette", "gooey-loader"];

function Section({ title, items, link }: { title: string; items: AnimationMeta[]; link?: { href: string; label: string } }) {
  return (
    <section className="px-4 pb-8 pt-[18px] sm:px-10">
      <div className="mb-[14px] flex items-center justify-between pl-0.5">
        <SectionTitle>{title}</SectionTitle>
        {link && (
          <Link href={link.href} className="flex items-center gap-2 text-[13px] text-fg-soft hover:text-fg">
            {link.label} <ArrowRight className="size-3.5" />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-[21px] sm:grid-cols-2 xl:grid-cols-4">
        {items.map((a) => (
          <AnimationCard key={a.slug} meta={a} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const featured = FEATURED.map(getAnimation).filter((a) => a !== undefined);
  const latest = animations
    .filter((a) => !FEATURED.includes(a.slug))
    .toSorted((a, b) => b.added.localeCompare(a.added))
    .slice(0, 8);

  return (
    <>
      <Hero />
      <Section title="Em destaque" items={featured} />
      <Section title="Adicionadas recentemente" items={latest} link={{ href: "/categorias", label: "Ver todas as categorias" }} />
      <div className="px-4 pb-10 sm:px-10">
        <CtaCard />
      </div>
    </>
  );
}
