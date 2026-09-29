import { useEffect } from "react";
import { animate, createTimeline, stagger } from "animejs";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fades in every [data-reveal] element as it scrolls into view. Elements that enter together
// are staggered. [data-count] elements count up from 0 to their value.
// `key` re-runs the effect when the same page component renders new content (e.g. /work/a → /work/b).
export function useReveal(key?: string) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      targets.forEach((el) => (el.style.opacity = "1"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
        if (!visible.length) return;
        visible.forEach((el) => observer.unobserve(el));
        animate(visible, {
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 900,
          ease: "outExpo",
          delay: stagger(90),
        });
        visible.forEach((el) => el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp));
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}

function countUp(el: HTMLElement) {
  const end = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? "";
  const counter = { value: 0 };
  animate(counter, {
    value: end,
    duration: 1600,
    ease: "outExpo",
    onUpdate: () => {
      el.textContent = `${Math.round(counter.value)}${suffix}`;
    },
  });
}

// Staggered entrance for the hero: words rise into place, then the rest of [data-hero] fades in.
export function useHeroEntrance(key?: string) {
  useEffect(() => {
    const words = document.querySelectorAll<HTMLElement>("[data-hero-word]");
    const rest = document.querySelectorAll<HTMLElement>("[data-hero]");
    if (prefersReducedMotion()) {
      rest.forEach((el) => (el.style.opacity = "1"));
      return;
    }
    createTimeline({ defaults: { ease: "outExpo" } })
      .add(words, { translateY: ["110%", "0%"], duration: 1100, delay: stagger(60) })
      .add(rest, { opacity: [0, 1], translateY: [16, 0], duration: 900, delay: stagger(100) }, "-=700");
  }, [key]);
}
