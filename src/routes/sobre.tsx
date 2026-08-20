import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ecossistema, empresa } from "@/lib/empresa";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o escritório — Portal Contabilidade" },
      {
        name: "description",
        content:
          "Conheça a Portal Contabilidade, escritório de Nobres-MT liderado por empreendedoras, com registro CRC-MT 013002.",
      },
      { property: "og:title", content: "Sobre — Portal Contabilidade" },
      {
        property: "og:description",
        content: "História, valores e o grupo de empresas da família Portal.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-brand-gradient py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="text-3xl font-bold md:text-4xl">Sobre o escritório</h1>
          <p className="mt-3 max-w-2xl opacity-85">{empresa.slogan}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-muted-foreground">
          <p>
            A <strong className="text-foreground">Portal Contabilidade</strong> atende empresas,
            MEIs e produtores rurais de Nobres e região com um atendimento direto e humano: você
            fala com quem realmente cuida da sua contabilidade.
          </p>
          <p>
            O escritório se identifica como uma empresa de empreendedoras e trabalha com foco em
            prazos cumpridos, informação clara e acompanhamento próximo — do primeiro CNPJ às
            obrigações do dia a dia.
          </p>
          <p>
            Estamos na Av. JK, no Centro de Nobres, em frente ao Bradesco, com portas abertas para
            atendimento presencial e suporte pelo WhatsApp.
          </p>
        </div>

        <aside className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <h2 className="font-display text-base font-semibold text-brand-deep">Informações</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Registro</dt>
              <dd className="font-medium">{empresa.crc}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Endereço</dt>
              <dd className="font-medium">{empresa.endereco}</dd>
            </div>
            {empresa.horario.map((h) => (
              <div key={h.dia}>
                <dt className="text-muted-foreground">{h.dia}</dt>
                <dd className="font-medium">{h.hora}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Grupo Portal
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Outras empresas da família, caso você precise:
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {ecossistema.map((e) => (
              <a
                key={e.nome}
                href={e.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-start justify-between gap-3 rounded-lg border border-border bg-secondary/50 p-4 transition-colors hover:border-brand/40"
              >
                <span>
                  <span className="block font-display text-sm font-semibold text-brand-deep">
                    {e.nome}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{e.texto}</span>
                </span>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
