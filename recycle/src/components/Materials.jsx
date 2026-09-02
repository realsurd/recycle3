import { FiArrowRight } from "react-icons/fi";
import { materials, services } from "../data/content";

export default function Materials() {
  return (
    <section id="materials" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" /> Products & Materials
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="section-title mt-4">
            Agricultural Materials Sourced for{" "}
            <span className="text-forest-600"> Bulk Supply & Export</span>
          </h2>
          <p className="lead mt-4 text-lg">
            We source a range of agricultural by-products and raw materials from
            Nigerian farms, mills, and processors. Availability, moisture level,
            cleanliness, particle size, packaging, quantity, and other
            specifications can be matched to buyer requirements where
            commercially feasible.
          </p>
        </div>

        {/* Material cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m, i) => (
            <article
              key={m.name}
              className="reveal group card flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-xl"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-52 shrink-0 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/10 to-transparent" />

                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-forest-600 shadow-md backdrop-blur">
                  <m.icon className="h-6 w-6" />
                </span>

                <h3 className="absolute bottom-3 left-4 font-display text-xl font-bold text-white">
                  {m.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-forest-800/80">
                  {m.desc}
                </p>

                <div className="mt-auto pt-5">
                  {m.outputs.map((o) => {
                    const hasApplicationLabel = o.startsWith(
                      "Common buyer applications:",
                    );

                    return (
                      <div
                        key={o}
                        className="border-t border-forest-900/10 pt-4"
                      >
                        {hasApplicationLabel ? (
                          <p className="text-xs leading-5 text-forest-700">
                            <span className="font-semibold">
                              Common buyer applications:
                            </span>{" "}
                            {o.replace("Common buyer applications:", "").trim()}
                          </p>
                        ) : (
                          <p className="text-xs leading-5 text-forest-700">
                            {o}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Services */}
        <div className="mt-20">
          <h3 className="reveal text-center font-display text-2xl font-bold text-forest-900 sm:text-3xl">
            Our Services
          </h3>
          <p className="reveal mx-auto mt-3 max-w-xl text-center text-forest-800/80">
            End-to-End Agricultural Sourcing & Export Support
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal group rounded-2xl border border-forest-900/5 bg-sand-50 p-6 transition-all duration-300 hover:border-gold-300 hover:bg-white hover:shadow-lg"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-600 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-900">
                  <s.icon className="h-6 w-6" />
                </span>
                <h4 className="mt-4 font-display text-lg font-bold text-forest-900">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/80">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-14 text-center">
          <a href="#how" className="btn-primary group">
            See Our Process
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
