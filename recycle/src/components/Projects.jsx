import { FiArrowRight } from "react-icons/fi";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-500" /> Featured Projects
            </span>
            <h2 className="section-title mt-4">
              Solutions we&apos;ve{" "}
              <span className="text-forest-600">built on the ground</span>
            </h2>
          </div>
          <p className="max-w-sm text-forest-800/80">
            Real facilities and programmes turning agro-waste into energy,
            income and healthier soil across Nigeria.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group card overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-forest-900 shadow">
                  {p.category}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg font-bold leading-snug text-white">
                  {p.title}
                </h3>
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <p className="text-sm leading-relaxed text-forest-800/80">
                  {p.summary}
                </p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-forest-600 transition-colors hover:text-gold-600"
                >
                  Learn more
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
