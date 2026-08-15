import { FiArrowRight } from "react-icons/fi";
import { LuRecycle } from "react-icons/lu";
import { images } from "../data/content";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.ctaBand}
          alt="Lush palm plantation viewed from above"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/92 via-forest-800/85 to-forest-700/70" />
      </div>

      <div className="container-x relative py-20 lg:py-24">
        <div className="reveal max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            <LuRecycle className="h-4 w-4 text-gold-300" />
            Partner With Us
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Have agro-waste? Need biomass fuel? Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-xl text-white/85">
            Whether you&apos;re a farmer with residues to sell, a business
            looking to switch to clean energy, or an organisation seeking a
            sustainability partner — we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold group">
              Get a Free Quote
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#materials"
              className="btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              Browse Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
