import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-500" /> FAQ
          </span>
          <h2 className="section-title mt-4">Questions, answered</h2>
          <p className="lead mt-4">
            Everything you might want to know about collecting, buying from, or
            partnering with Recycle Harvest Africa.
          </p>
          <p className="mt-6 text-sm text-forest-800/80">
            Still curious?{" "}
            <a
              href="#contact"
              className="font-semibold text-forest-600 underline-offset-2 hover:underline"
            >
              Reach out to our team
            </a>
            .
          </p>
        </div>

        <div className="reveal space-y-3" style={{ transitionDelay: "0.1s" }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-gold-300 bg-sand-50"
                    : "border-forest-900/5 bg-white hover:border-forest-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-forest-900">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-forest-600 text-white"
                        : "bg-forest-50 text-forest-600"
                    }`}
                  >
                    {isOpen ? (
                      <FiMinus className="h-4 w-4" />
                    ) : (
                      <FiPlus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-forest-800/80">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
