import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { techStack } from "../data/site";

// A slow, endless row of the technologies in our products. The list is rendered twice so the
// track can slide by exactly half its width and loop seamlessly.
export function TechMarquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = animate(track.current, { translateX: ["0%", "-50%"], duration: 40000, ease: "linear", loop: true });
    return () => {
      animation.pause();
    };
  }, []);

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div ref={track} className="flex w-max gap-10 py-2">
        {[...techStack, ...techStack].map((tech, i) => (
          <span key={i} aria-hidden={i >= techStack.length} className="whitespace-nowrap font-display text-lg font-medium text-ink-400 dark:text-ink-500">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
