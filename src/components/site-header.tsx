import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/portal-logo.png.asset.json";
import { empresa } from "@/lib/empresa";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Logo Portal Contabilidade" className="h-10 w-10" width={40} height={40} />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-brand-deep">PORTAL</span>
            <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
              Contabilidade
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-brand font-semibold" }}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={empresa.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden rounded-md border border-border p-2 text-brand-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-brand font-semibold" }}
              className="block py-2 text-sm text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={empresa.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
