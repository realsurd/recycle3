import { sustainabilityBenefits } from "../data/content";

export default function Sustainability() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" /> Sustainability Benefits
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="section-title mt-4">
            Why agro-waste recycling{" "}
            <span className="text-forest-600">matters</span>
          </h2>
          <p className="lead mt-4">
            Beyond business, our work delivers measurable environmental and
            social returns for Nigerian communities.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sustainabilityBenefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal group relative overflow-hidden rounded-2xl bg-gradient-to-b from-forest-50 to-sand-50 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-900">
                <b.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-forest-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/80">
                {b.desc}
              </p>
              <span className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold-300/30 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
