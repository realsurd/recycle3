import { useEffect, useRef, useState } from "react";
import { impactStats, images } from "../data/content";

function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const numeric = Number(target.replace(/[^0-9.]/g, ""));
    if (!numeric) {
      setValue(target);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * numeric);
        setValue(String(current));
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(target);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && start()),
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return [value, ref];
}

export default function Impact() {
  return (
    <section id="impact" className="bg-sand-100 py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-forest-900/10">
            <img
              src={images.impact}
              alt="Rich organic compost and soil"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-gold-500 px-6 py-4 text-forest-900 shadow-xl">
            <p className="font-display text-3xl font-bold leading-none">
              9,200+
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide">
              Tonnes CO₂ avoided
            </p>
          </div>
        </div>

        <div>
          <div className="reveal">
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-500" /> Our Environmental Impact
            </span>
            <h2 className="section-title mt-4">
              Real numbers behind a{" "}
              <span className="text-forest-600">cleaner Nigeria</span>
            </h2>
            <p className="lead mt-4">
              Every residue we recover is one less pile burned, one less tree
              felled and one more farmer paid. We track it all so our impact is
              measurable, not marketing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {impactStats.map((stat, i) => {
              const [val, ref] = useCountUp(stat.value);
              return (
                <div
                  key={stat.label}
                  ref={ref}
                  className="reveal card p-6 text-center hover:-translate-y-1 hover:shadow-lg"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
                    <stat.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-3xl font-bold text-forest-700">
                    {val}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-forest-800/70">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
