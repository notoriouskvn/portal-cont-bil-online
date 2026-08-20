import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Clock, MapPin } from "lucide-react";
import hero from "@/assets/hero-escritorio.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { empresa, servicos } from "@/lib/empresa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portal Contabilidade — Contabilidade em Nobres, MT" },
      {
        name: "description",
        content:
          "Escritório de contabilidade em Nobres-MT. Abertura de empresas, imposto de renda, certificado digital, MEI e produtor rural.",
      },
      { property: "og:title", content: "Portal Contabilidade — Nobres, MT" },
      {
        property: "og:description",
        content: "Credibilidade e competência para com a evolução da sua empresa.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-brand-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-primary-foreground/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
              Nobres · Mato Grosso
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Contabilidade próxima, clara e no prazo.
            </h1>
            <p className="mt-4 max-w-lg text-base opacity-85">{empresa.slogan}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={empresa.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Falar com o escritório
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                Ver serviços <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <img
            src={hero}
            alt="Atendimento contábil no escritório Portal Contabilidade"
            width={1600}
            height={1000}
            className="rounded-xl shadow-soft"
          />
        </div>
      </section>

      <section className="mx-auto -mt-8 grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        {[
          { icon: MapPin, t: "Onde estamos", d: "Av. JK, Centro — em frente ao Bradesco" },
          { icon: Clock, t: "Atendimento", d: "Seg a sex · 07:30–11:00 e 13:00–17:30" },
          { icon: CheckCircle2, t: "Registro", d: empresa.crc },
        ].map((c) => (
          <div key={c.t} className="rounded-xl border border-border bg-card p-5 shadow-soft">
            <c.icon className="h-5 w-5 text-accent" />
            <p className="mt-3 font-display font-semibold text-brand-deep">{c.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-bold text-brand-deep md:text-3xl">O que fazemos</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Da abertura da empresa ao dia a dia fiscal e trabalhista, cuidamos da burocracia para você
          focar no seu negócio.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.slice(0, 4).map((s) => (
            <div
              key={s.titulo}
              className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
            >
              <h3 className="font-display text-base font-semibold text-brand-deep">{s.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.texto}</p>
            </div>
          ))}
        </div>
        <Link
          to="/servicos"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          Ver todos os serviços <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="bg-brand-soft py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-deep">Vamos organizar sua contabilidade?</h2>
            <p className="mt-2 text-muted-foreground">
              Fale com a gente pelo WhatsApp e receba uma orientação sem compromisso.
            </p>
          </div>
          <a
            href={empresa.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> {empresa.telefone}
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
