import { FiStar } from "react-icons/fi";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="bg-forest-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-500" /> Voices From The Field
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="section-title mt-4">
            What our partners &amp; farmers say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal card flex h-full flex-col p-7 hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FiStar key={idx} className="h-4 w-4 fill-gold-500" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-forest-800/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-forest-900/5 pt-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-300"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-forest-900">{t.name}</p>
                  <p className="text-xs text-forest-700/80">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
