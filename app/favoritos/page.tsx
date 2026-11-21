"use client";

import { useEffect, useState } from "react";
import { AnimationCard } from "@/components/AnimationCard";
import { SectionTitle } from "@/components/SectionTitle";
import { readFavorites } from "@/components/favorites";
import { animations } from "@/registry/data";

export default function FavoritesPage() {
  const [slugs, setSlugs] = useState<string[] | null>(null);
  useEffect(() => setSlugs(readFavorites()), []);
  const items = animations.filter((a) => slugs?.includes(a.slug));

  return (
    <div className="px-4 py-8 sm:px-10">
      <SectionTitle as="h1">Favoritos</SectionTitle>
      {slugs !== null && items.length === 0 ? (
        <div className="mt-7 grid h-[240px] place-items-center rounded-[14px] border border-dashed border-line-strong px-6 text-center text-[14px] text-muted">
          Nenhum favorito ainda. Abra uma animação e clique em “Favoritar”.
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 gap-[21px] sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {items.map((a) => (
            <AnimationCard key={a.slug} meta={a} />
          ))}
        </div>
      )}
    </div>
  );
}
