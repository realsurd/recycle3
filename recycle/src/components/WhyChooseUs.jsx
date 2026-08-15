import { whyChooseUs } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-sand-50 py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" /> Why Choose Us
          </span>
          <h2 className="section-title mt-4">
            Built in Nigeria, for Nigerian farms
          </h2>
          <p className="lead mt-5">
            We are not an imported model. Our team, our hubs and our partners
            are local — so our solutions actually fit the fields, seasons and
            communities we serve.
          </p>

          <div className="mt-8 rounded-2xl border border-forest-900/5 bg-white p-6 shadow-sm">
            <p className="font-display text-5xl font-bold text-forest-600">
              100%
            </p>
            <p className="mt-2 text-sm font-medium text-forest-800/80">
              of our raw material is agro-waste that would otherwise be burned
              or dumped. Nothing we do competes with food supply.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {whyChooseUs.map((w, i) => (
            <div
              key={w.title}
              className="reveal group rounded-2xl border border-forest-900/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-colors duration-300 group-hover:bg-forest-600 group-hover:text-white">
                <w.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-forest-900">
                {w.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/80">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
