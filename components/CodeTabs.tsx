"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type Tab = { id: string; label: string; file: string; code: string };

export function CodeTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  const copy = () =>
    navigator.clipboard
      .writeText(tab.code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});

  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-card">
      <div className="flex items-center justify-between border-b border-line px-2">
        <div role="tablist" aria-label="Código" className="flex">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={`relative px-4 py-3 text-[13px] font-medium transition-colors ${
                t.id === active ? "text-fg after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:rounded-full after:bg-violet" : "text-muted hover:text-fg"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 pr-2">
          <span className="hidden font-mono text-[12px] text-muted sm:inline">{tab.file}</span>
          <button
            type="button"
            onClick={copy}
            className="flex h-8 items-center gap-1.5 rounded-[8px] border border-line-strong px-3 text-[12px] font-medium transition-colors hover:bg-tint/[0.06] active:scale-[0.97]"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
      <pre role="tabpanel" className="max-h-[480px] overflow-auto p-5 font-mono text-[13px] leading-[1.6] text-fg-soft">
        <code>{tab.code}</code>
      </pre>
    </div>
  );
}
