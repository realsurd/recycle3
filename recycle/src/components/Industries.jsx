import { industries } from "../data/content";

export default function Industries() {
  return (
    <section className="bg-sand-100 py-20 lg:py-24">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" /> Industries We Serve
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="section-title mt-4">
            Powering sectors across{" "}
            <span className="text-forest-600">Nigeria&apos;s economy</span>
          </h2>
          <p className="lead mt-4">
            From farms to factories, our biomass and bio-based products fit
            wherever energy, soil or sustainable materials are needed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="reveal group flex items-center gap-3 rounded-2xl border border-forest-900/5 bg-white p-4 transition-all duration-300 hover:border-gold-300 hover:bg-forest-50 hover:shadow-md"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-forest-900">
                <ind.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-forest-800">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
