import { FiCheck, FiArrowRight } from "react-icons/fi";
import { images } from "../data/content";

const pillars = [
  "Local sourcing relationships across agricultural communities and processing clusters.",
  "Buyer-led procurement based on required material, quantity, quality, and delivery terms.",
  "Aggregation of supply from multiple approved sources when larger volumes are required.",
  "Coordination of export documentation and shipment preparation for international orders.",
];

export default function About() {
  return (
    <section id="about" className="bg-sand-50 py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Images */}
        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-forest-900/10">
            <img
              src={images.about}
              alt="Farmers harvesting cassava together in a Nigerian field"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 hidden w-56 overflow-hidden rounded-2xl border-4 border-sand-50 shadow-2xl sm:block">
            <img
              src={images.aboutSecondary}
              alt="African woman harvesting cassava"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Badge */}
          <div className="absolute -left-3 -top-6 flex items-center gap-3 rounded-2xl bg-forest-600 px-5 py-3 text-white shadow-xl">
            <span className="font-display text-3xl font-bold leading-none">
              2026
            </span>
            <span className="text-xs leading-tight">
              Serving Nigerian
              <br />
              farms since
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" /> About Recycle Harvest
            Africa
          </span>
          <h2 className="section-title text-2xl mt-4">
            Built to Make{" "}
            <span className="text-forest-600">
              {" "}
              Nigerian Agricultural Supply
            </span>{" "}
            Easier to Source Globally.{" "}
          </h2>
          <p className="lead mt-5">
            Recycle Africa is a Nigerian sourcing, supply, and export company
            focused on agricultural by-products, agro residues, and other high
            demand agricultural materials. We work directly with farmers,
            processing centres, mills, aggregators, and local suppliers to
            identify dependable sources and consolidate commercial volumes for
            buyers. Our role is to simplify procurement. Instead of an overseas
            buyer managing many small suppliers, inconsistent volumes, and
            fragmented logistics, we coordinate the supply chain locally from
            sourcing and aggregation to specification checks, packaging
            coordination, documentation, and export preparation.
          </p>
          <p className="lead mt-4">
            We help Nigerian producers reach larger markets while giving
            international buyers a more reliable route to agricultural materials
            from Nigeria.
          </p>

          <ul className="mt-7 space-y-3">
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-forest-100 text-forest-600">
                  <FiCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-forest-800">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#how" className="btn-primary group">
              See How It Works
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#projects" className="btn-outline">
              View Featured Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
