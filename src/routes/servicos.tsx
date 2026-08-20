import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { empresa, servicos } from "@/lib/empresa";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços contábeis — Portal Contabilidade Nobres/MT" },
      {
        name: "description",
        content:
          "Abertura de empresas, consultoria, imposto de renda, certificado digital, departamento pessoal, MEI e produtor rural em Nobres-MT.",
      },
      { property: "og:title", content: "Serviços — Portal Contabilidade" },
      {
        property: "og:description",
        content: "Todos os serviços contábeis, fiscais e trabalhistas do escritório.",
      },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="bg-brand-gradient py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="text-3xl font-bold md:text-4xl">Serviços</h1>
          <p className="mt-3 max-w-2xl opacity-85">
            Soluções completas para empresas, MEIs e produtores rurais da região de Nobres.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <article
              key={s.titulo}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
            >
              <span className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-display text-lg font-semibold text-brand-deep">{s.titulo}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.texto}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-brand-soft p-6">
          <h2 className="font-display text-lg font-semibold text-brand-deep">
            Não encontrou o que precisa?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cada empresa tem uma realidade. Conte pra gente sua necessidade que avaliamos juntos.
          </p>
          <a
            href={empresa.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
