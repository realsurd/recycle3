// import { useEffect, useRef, useState } from "react";
// import { impactStats, images } from "../data/content";

// function useCountUp(target, duration = 1600) {
//   const [value, setValue] = useState(0);
//   const ref = useRef(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const numeric = Number(target.replace(/[^0-9.]/g, ""));
//     if (!numeric) {
//       setValue(target);
//       return;
//     }
//     const el = ref.current;
//     if (!el) return;

//     const start = () => {
//       if (started.current) return;
//       started.current = true;
//       const startTime = performance.now();
//       const tick = (now) => {
//         const progress = Math.min((now - startTime) / duration, 1);
//         const eased = 1 - Math.pow(1 - progress, 3);
//         const current = Math.floor(eased * numeric);
//         setValue(String(current));
//         if (progress < 1) requestAnimationFrame(tick);
//         else setValue(target);
//       };
//       requestAnimationFrame(tick);
//     };

//     const obs = new IntersectionObserver(
//       (entries) => entries.forEach((e) => e.isIntersecting && start()),
//       { threshold: 0.4 },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [target, duration]);

//   return [value, ref];
// }

// export default function Impact() {
//   return (
//     <section id="impact" className="bg-sand-100 py-20 lg:py-28">
//       <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         <div className="reveal relative">
//           <div className="overflow-hidden rounded-3xl shadow-xl shadow-forest-900/10">
//             <img
//               src={images.impact}
//               alt="Rich organic compost and soil"
//               className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
//               loading="lazy"
//             />
//           </div>
//           <div className="absolute -bottom-6 left-6 rounded-2xl bg-gold-500 px-6 py-4 text-forest-900 shadow-xl">
//             <p className="font-display text-3xl font-bold leading-none">
//               9,200+
//             </p>
//             <p className="mt-1 text-xs font-semibold uppercase tracking-wide">
//               Tonnes CO₂ avoided
//             </p>
//           </div>
//         </div>

//         <div>
//           <div className="reveal">
//             <span className="eyebrow">
//               <span className="h-px w-8 bg-gold-500" /> Supply Network &
//               Sustainability
//             </span>
//             <h2 className="section-title mt-4">
//               Creating More Value From{" "}
//               <span className="text-forest-600"> Nigeria’s Agricultural</span>{" "}
//               Supply Chain
//             </h2>
//             <p className="lead mt-4">
//               Our business is commercial first: we help buyers secure dependable
//               agricultural supply. At the same time, sourcing agricultural
//               by-products can create additional value for farmers and processors
//               by opening markets for materials that may otherwise have limited
//               local demand or be treated as low-value residues.
//             </p>
//           </div>

//           <div className="mt-10 grid grid-cols-2 gap-5">
//             {impactStats.map((stat, i) => {
//               const [val, ref] = useCountUp(stat.value);
//               return (
//                 <div
//                   key={stat.label}
//                   ref={ref}
//                   className="reveal card p-6 text-center hover:-translate-y-1 hover:shadow-lg"
//                   style={{ transitionDelay: `${i * 0.1}s` }}
//                 >
//                   <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600">
//                     <stat.icon className="h-6 w-6" />
//                   </span>
//                   <p className="mt-4 font-display text-3xl font-bold text-forest-700">
//                     {val}
//                     {stat.suffix}
//                   </p>
//                   <p className="mt-1 text-xs font-medium uppercase tracking-wide text-forest-800/70">
//                     {stat.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FiCheck } from "react-icons/fi";
import { images } from "../data/content";

const supplyDetails = [
  {
    title: "Additional Market Access",
    desc: "Connecting local producers and processors with international demand creates more routes to market for agricultural materials.",
  },
  {
    title: "Better Use of By-Products",
    desc: "Finding commercial buyers for suitable agricultural residues can reduce unnecessary disposal and improve resource utilisation.",
  },
  {
    title: "Stronger Rural Supply Chains",
    desc: "Structured purchasing and aggregation can support more predictable commercial relationships across local farming and processing communities.",
  },
  {
    title: "Traceable Procurement",
    desc: "Where required, supply can be documented by source, lot, quantity, and inspection records to support buyer procurement requirements.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-sand-100 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image */}
          <div className="reveal relative">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-forest-900/10">
              <img
                src={images.impact}
                alt="Agricultural supply network in Nigeria"
                className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px] lg:h-[560px]"
                loading="lazy"
              />
            </div>

            {/* Floating information card */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-gold-500 px-5 py-4 text-forest-900 shadow-xl sm:left-6 sm:right-auto sm:max-w-[320px] sm:px-6">
              <p className="font-display text-xl font-bold leading-tight sm:text-2xl">
                Supply With Purpose
              </p>
              <p className="mt-1 text-sm font-medium leading-relaxed">
                Building stronger connections between local supply and
                international demand.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-6 sm:pt-8 lg:pt-0">
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-8 bg-gold-500" />
                Supply Network & Sustainability
              </span>

              <h2 className="section-title mt-4">
                Creating More Value From{" "}
                <span className="text-forest-600">Nigeria’s Agricultural</span>{" "}
                Supply Chain
              </h2>

              <p className="lead mt-5">
                Our business is commercial first: we help buyers secure
                dependable agricultural supply. At the same time, sourcing
                agricultural by-products can create additional value for farmers
                and processors by opening markets for materials that may
                otherwise have limited local demand or be treated as low-value
                residues.
              </p>
            </div>

            {/* Supply network details */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {supplyDetails.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal group flex h-full flex-col rounded-2xl border border-forest-900/5 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-transform duration-300 group-hover:scale-110">
                    <FiCheck className="h-5 w-5" />
                  </span>

                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-forest-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-forest-800/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
