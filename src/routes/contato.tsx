import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { empresa } from "@/lib/empresa";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Portal Contabilidade Nobres/MT" },
      {
        name: "description",
        content:
          "Fale com a Portal Contabilidade: Av. JK, Centro, Nobres-MT. WhatsApp (65) 99323-7414 e atendimento de segunda a sexta.",
      },
      { property: "og:title", content: "Contato — Portal Contabilidade" },
      { property: "og:description", content: "Endereço, telefone, horários e WhatsApp do escritório." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-brand-gradient py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="text-3xl font-bold md:text-4xl">Contato</h1>
          <p className="mt-3 max-w-2xl opacity-85">
            Atendimento presencial no Centro de Nobres e suporte rápido pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2">
        <div className="space-y-4">
          <a
            href={empresa.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
          >
            <MessageCircle className="h-5 w-5 text-accent" />
            <span>
              <span className="block font-display font-semibold text-brand-deep">WhatsApp</span>
              <span className="text-sm text-muted-foreground">{empresa.telefone}</span>
            </span>
          </a>

          <a
            href={empresa.telefoneLink}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
          >
            <Phone className="h-5 w-5 text-accent" />
            <span>
              <span className="block font-display font-semibold text-brand-deep">Telefone</span>
              <span className="text-sm text-muted-foreground">{empresa.telefone}</span>
            </span>
          </a>

          <a
            href={empresa.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
          >
            <Instagram className="h-5 w-5 text-accent" />
            <span>
              <span className="block font-display font-semibold text-brand-deep">Instagram</span>
              <span className="text-sm text-muted-foreground">@portalcontabilidadenobres</span>
            </span>
          </a>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-display font-semibold text-brand-deep">Horários</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {empresa.horario.map((h) => (
                <li key={h.dia} className="flex justify-between gap-4">
                  <span>{h.dia}</span>
                  <span className="text-foreground">{h.hora}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-display font-semibold text-brand-deep">Endereço</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{empresa.endereco}</p>
          </div>
          <iframe
            title="Mapa Portal Contabilidade"
            src="https://www.google.com/maps?q=Portal%20Contabilidade%20Av.%20JK%20Centro%20Nobres%20MT&output=embed"
            loading="lazy"
            className="h-80 w-full rounded-xl border border-border"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
