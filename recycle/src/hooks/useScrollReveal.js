import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they scroll into view. Returns a ref to attach to a wrapper.
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const els = Array.from(root.querySelectorAll(".reveal"));

    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
