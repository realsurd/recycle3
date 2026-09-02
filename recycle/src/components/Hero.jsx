import { FiArrowRight } from "react-icons/fi";
import { LuLeaf, LuRecycle } from "react-icons/lu";
import { images } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Nigerian farmers harvesting rice in a green field"
          className="h-full w-full animate-slow-zoom object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            <LuLeaf className="h-4 w-4 text-gold-300" />
            Nigeria’s Agricultural Sourcing & Export Partner
          </span>

          <h1
            className="mt-6 animate-fade-up font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-3xl"
            style={{ animationDelay: "0.1s" }}
          >
            Connecting{" "}
            <span className="text-gold-300">Nigerian Agricultural</span> Supply
            With Global Demand
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "0.25s" }}
          >
            We source agricultural by-products, residues, and selected agro
            commodities from trusted farmers, mills, processors, and local
            suppliers across Nigeria. We aggregate dependable volumes, match
            buyer specifications, and coordinate export ready supply for
            companies and industrial customers abroad.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-wrap gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#contact" className="btn-gold group">
              Request a Supply Quote
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#materials"
              className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              <LuRecycle className="h-4 w-4" />
              Explore Our Materials
            </a>
          </div>

          {/* Mini stats */}
          <div
            className="mt-10 grid max-w-2xl animate-fade-up grid-cols-4 gap-2 border-t border-white/20 pt-6 flex- justify-center text-center text-xs text-white/70 sm:max-w-3xl sm:text-sm"
            style={{ animationDelay: "0.55s" }}
          >
            {[
              { value: "X+", label: "Tonnes Supplied " },
              { value: "X+", label: "Sourcing Partners" },
              { value: "X+", label: "Product Categories" },
              { value: "X+", label: "Export Markets Served" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white md:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-white/80" />
        </span>
      </a>
    </section>
  );
}
