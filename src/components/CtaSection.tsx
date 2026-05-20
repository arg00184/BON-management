import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="aplicar" className="px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bon-blue via-bon-blue to-bon-950 p-8 text-white sm:p-14 lg:p-20"
          data-reveal
        >
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-bon-sky/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-bon-pink/15 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-bon-lilac/10 blur-2xl" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bon-sky">
                Siguiente paso
              </p>

              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Si ya tienes audiencia, podemos ayudarte a convertirla en un
                negocio mas rentable.
              </h2>

              <p className="mt-6 max-w-xl text-lg text-white/70">
                Aplica para una auditoria gratuita y descubre como estructurar
                tu marca, optimizar tu monetizacion y escalar con datos.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                className="focus-ring group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-bon-blue shadow-2xl shadow-bon-950/30 transition-all duration-300 hover:gap-4 hover:bg-bon-pink hover:text-white hover:shadow-bon-pink/30"
                href="mailto:hello@bonmanagement.com"
              >
                Aplicar ahora
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <a
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                href="#servicios"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
