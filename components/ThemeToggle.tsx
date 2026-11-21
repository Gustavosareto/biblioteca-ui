"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import SunMoon from "@/registry/animations/sun-moon/Animation";

// componente sun-moon da própria biblioteca, reduzido de 52px para 32px; sol = ir pro claro, lua = ir pro escuro
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // o script no <head> (app/layout.tsx) já aplicou o tema salvo; aqui só sincroniza o estado
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = (e: ChangeEvent<HTMLInputElement>) => {
    const root = document.documentElement;
    // lê do <html>, não do estado: há uma instância na sidebar e outra na topbar (mobile)
    const next = root.dataset.theme === "light" ? "dark" : "light";
    const apply = () => {
      setTheme(next);
      root.dataset.theme = next;
    };
    try {
      localStorage.setItem("theme", next);
    } catch {}

    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return apply();

    // o novo tema cresce em círculo a partir do botão até cobrir a tela
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  return (
    <span
      className={`grid size-8 shrink-0 place-items-center rounded-[8px] transition-colors hover:bg-tint/[0.04] [&_.sun-moon]:-m-2.5 [&_.sun-moon]:scale-[0.62] [&_.sun-moon]:!border-0 [&_.sun-moon]:!bg-transparent [&_.sun-moon:has(input:checked)]:!text-fg [&_.sun-moon:has(input:focus-visible)]:!outline-fg ${className}`}
    >
      <SunMoon
        checked={theme === "light"}
        onChange={toggle}
        aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      />
    </span>
  );
}
