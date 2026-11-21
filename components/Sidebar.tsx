"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppWindow, ArrowRight, Component, House, Inbox, List, LoaderCircle,
  PanelsTopLeft, Pentagon, Play, RefreshCcwDot, Smile, Sparkle, Type,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const nav: { href: string; label: string; icon: LucideIcon; iconClass?: string }[] = [
  { href: "/", label: "Início", icon: House },
  { href: "/animacoes", label: "Animações", icon: RefreshCcwDot },
  { href: "/componentes", label: "Componentes", icon: Component },
  { href: "/efeitos-de-texto", label: "Efeitos de Texto", icon: Type },
  { href: "/transicoes", label: "Transições", icon: Pentagon, iconClass: "rotate-90" },
  { href: "/microinteracoes", label: "Microinterações", icon: Play },
  { href: "/carregamentos", label: "Carregamentos", icon: LoaderCircle },
  { href: "/icones-animados", label: "Ícones Animados", icon: Smile },
  { href: "/notificacoes", label: "Notificações", icon: Inbox },
  { href: "/modais-overlays", label: "Modais e Overlays", icon: AppWindow },
  { href: "/menus-navegacao", label: "Menus e Navegação", icon: PanelsTopLeft },
  { href: "/avancado", label: "Avançado", icon: List },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-dvh w-[238px] shrink-0 flex-col overflow-y-auto [scrollbar-width:none] border-r border-line bg-panel px-5 lg:flex">
      <Link href="/" className="flex items-center gap-2.5 px-2.5 pt-8">
        <Logo className="h-[15px] w-[28px] text-fg" />
        <span className="text-[15px] font-semibold tracking-[-0.01em]">UI Motion</span>
      </Link>

      <nav className="mt-8 flex flex-col gap-px" aria-label="Principal">
        {nav.map(({ href, label, icon: Icon, iconClass }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`group flex h-[34px] items-center gap-3 rounded-[8px] px-2.5 text-[13.5px] transition-colors ${
                active ? "bg-tint/[0.06] font-medium text-fg" : "text-subtle hover:bg-tint/[0.03] hover:text-fg"
              }`}
            >
              <Icon
                className={`size-4 shrink-0 ${active ? "text-violet-soft" : "opacity-70 group-hover:opacity-100"} ${iconClass ?? ""}`}
                strokeWidth={1.5}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-[10px] border border-line px-3.5 py-3">
        <p className="flex items-center gap-2 text-[13px] font-medium">
          <Sparkle className="size-3.5 shrink-0 fill-violet text-violet" strokeWidth={1} />
          Copie e personalize
        </p>
        <a
          href="#"
          className="mt-1.5 inline-flex items-center gap-1 text-[12px] text-subtle transition-colors hover:text-fg"
        >
          Ver documentação <ArrowRight className="size-3" />
        </a>
      </div>

      <div className="flex items-center gap-1 px-1 py-5 text-subtle">
        <a href="https://github.com" aria-label="GitHub" className="grid size-8 place-items-center rounded-[8px] transition-colors hover:bg-tint/[0.04] hover:text-fg">
          <GithubIcon />
        </a>
        <ThemeToggle />
      </div>
    </aside>
  );
}
