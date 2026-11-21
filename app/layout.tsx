import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Motion",
  description: "Biblioteca de animações e componentes para seus projetos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: o script abaixo muda data-theme antes do React hidratar
    <html lang="pt-BR" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        {/* aplica o tema salvo antes da primeira pintura (sem piscar escuro → claro) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-dvh font-sans">
        <Preloader />
        <Sidebar />
        <main className="min-w-0 flex-1">
          <Topbar />
          {children}
        </main>
      </body>
    </html>
  );
}
