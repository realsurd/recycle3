import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { navLinks, company } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sand-50/95 shadow-md shadow-forest-900/5 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-600 text-white shadow-md">
            <LuLeaf className="h-5 w-5" />
          </span>
          <span
            className={`font-display text-lg font-bold leading-tight transition-colors ${
              scrolled ? "text-forest-800" : "text-forest-900"
            }`}
          >
            Recycle Harvest
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
              Africa
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-forest-800 hover:bg-forest-50 hover:text-forest-600"
                    : "text-forest-900 hover:bg-white/60 hover:text-forest-700"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contact");
            }}
            className="btn-gold"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
            scrolled
              ? "bg-forest-50 text-forest-700"
              : "bg-white/70 text-forest-800"
          }`}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-sand-50 transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[80vh] shadow-lg" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="block rounded-xl px-4 py-3 text-base font-medium text-forest-800 hover:bg-forest-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className="btn-gold w-full"
            >
              Request a Quote
            </a>
            <p className="mt-3 px-4 text-xs text-forest-700/70">
              {company.phone}
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}
