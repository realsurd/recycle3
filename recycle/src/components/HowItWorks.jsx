import { steps } from "../data/content";

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-forest-800 py-20 text-white lg:py-28"
    >
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <span className="h-px w-8 bg-gold-300" /> How It Works
            <span className="h-px w-8 bg-gold-300" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            Collection · Processing · Transformation
          </h2>
          <p className="mt-4 text-white/75">
            A transparent three-stage model that turns scattered farm residues
            into reliable, market-ready sustainable products.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="reveal relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:border-gold-300/40 hover:bg-white/10"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="font-display text-5xl font-bold text-gold-300/90">
                {step.badge}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {step.desc}
              </p>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <span className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gold-500 text-forest-900 shadow-lg md:flex">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
