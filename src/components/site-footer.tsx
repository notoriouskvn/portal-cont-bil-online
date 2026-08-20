import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { empresa } from "@/lib/empresa";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-brand-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">Portal Contabilidade</h3>
          <p className="mt-2 max-w-xs text-sm opacity-85">{empresa.slogan}</p>
          <p className="mt-3 text-xs uppercase tracking-widest opacity-70">{empresa.crc}</p>
        </div>

        <div className="space-y-2 text-sm opacity-90">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {empresa.endereco}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href={empresa.telefoneLink} className="hover:underline">
              {empresa.telefone}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            <a href={empresa.instagram} target="_blank" rel="noreferrer" className="hover:underline">
              @portalcontabilidadenobres
            </a>
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold">Navegação</h4>
          <div className="mt-2 flex flex-col gap-1 opacity-90">
            <Link to="/" className="hover:underline">
              Início
            </Link>
            <Link to="/servicos" className="hover:underline">
              Serviços
            </Link>
            <Link to="/sobre" className="hover:underline">
              Sobre
            </Link>
            <Link to="/contato" className="hover:underline">
              Contato
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-75">
        © {new Date().getFullYear()} Portal Contabilidade — Nobres, MT
      </div>
    </footer>
  );
}
