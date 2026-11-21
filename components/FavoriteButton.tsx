"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { readFavorites, toggleFavorite } from "./favorites";

export function FavoriteButton({ slug }: { slug: string }) {
  const [fav, setFav] = useState(false);
  useEffect(() => setFav(readFavorites().includes(slug)), [slug]);

  return (
    <button
      type="button"
      aria-pressed={fav}
      onClick={() => setFav(toggleFavorite(slug).includes(slug))}
      className="flex h-[41px] shrink-0 items-center gap-2.5 rounded-[12px] border border-line-strong bg-field px-[17px] text-[13px] font-medium transition-colors hover:bg-tint/[0.05] active:scale-[0.97]"
    >
      <Heart className={`size-[18px] transition-colors ${fav ? "fill-violet text-violet" : ""}`} strokeWidth={1.75} />
      {fav ? "Favoritado" : "Favoritar"}
    </button>
  );
}
