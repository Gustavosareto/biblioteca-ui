import type { ReactNode } from "react";

export function SectionTitle({ children, as: Tag = "h2" }: { children: ReactNode; as?: "h1" | "h2" }) {
  return (
    <Tag className="flex items-center gap-[14px] text-[23px] font-semibold tracking-[-0.01em] before:h-[26px] before:w-[4px] before:rounded-full before:bg-violet">
      {children}
    </Tag>
  );
}
