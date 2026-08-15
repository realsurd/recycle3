import { FiMapPin, FiPhone, FiMail, FiArrowUp } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { company, navLinks } from "../data/content";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-forest-900 text-sand-100">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-600 text-white">
                <LuLeaf className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Recycle Harvest
                <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
                  Africa
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-100/70">
              {company.tagline}. We collect, process and transform Nigerian
              agro-waste into biomass fuel, biochar, compost and eco materials.
            </p>
            <div className="mt-6 flex gap-3">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white transition-colors hover:bg-gold-500 hover:text-forest-900"
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-gold-300">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sand-100/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-gold-300">
              What We Handle
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-sand-100/70">
              <li>Rice Husks</li>
              <li>Maize Cobs</li>
              <li>Cassava Peels</li>
              <li>Palm Kernel Shells</li>
              <li>Coconut Shells</li>
              <li>Sawdust &amp; Wood Waste</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-gold-300">
              Get In Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-sand-100/70">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 h-4 w-4 flex-none text-gold-300" />
                {company.address}
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="h-4 w-4 flex-none text-gold-300" />
                {company.phone}
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="h-4 w-4 flex-none text-gold-300" />
                {company.email}
              </li>
            </ul>
            <button
              onClick={scrollTop}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FiArrowUp className="h-3.5 w-3.5" />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-sand-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Designed with care for a cleaner, greener Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
