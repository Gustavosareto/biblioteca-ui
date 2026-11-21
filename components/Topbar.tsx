import { Heart, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Topbar() {
  return (
    <header className="flex h-[95px] items-center justify-between gap-4 border-b border-line px-4 sm:px-10">
      <label className="flex h-[47px] w-full max-w-[536px] items-center gap-4 rounded-full border border-line-strong bg-field px-5 focus-within:border-fg/40">
        <Search className="size-5 shrink-0 text-fg" strokeWidth={1.75} />
        <input
          type="search"
          placeholder="Buscar animações... (ex: fade, bounce, etc)"
          aria-label="Buscar animações"
          className="w-full bg-transparent text-[13px] text-fg outline-none placeholder:text-subtle"
        />
      </label>
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <a
          href="/favoritos"
          className="flex h-[41px] items-center gap-2.5 rounded-[12px] border border-line-strong bg-field px-[17px] text-[13px] font-medium transition-colors hover:bg-tint/[0.05]"
        >
          <Heart className="size-[18px]" strokeWidth={1.75} /> <span className="sr-only sm:not-sr-only">Favoritos</span>
        </a>
        {/* no desktop o botão de tema fica no rodapé da sidebar */}
        <ThemeToggle className="lg:hidden" />
        <div className="grid size-[38px] place-items-center rounded-full border border-line-strong bg-raised text-[14px] font-medium">
          S
        </div>
      </div>
    </header>
  );
}
