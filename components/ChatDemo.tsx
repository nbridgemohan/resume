import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

// An example TTomni conversation that plays on a loop in the hero.
const messages = [
  { from: "customer", text: "Hi, do you have any cleaning appointments this Thursday?" },
  { from: "assistant", text: "Hi! Yes, we have openings on Thursday at 10:30 AM and 3:15 PM. Which works better for you?" },
  { from: "customer", text: "3:15 please." },
  { from: "assistant", text: "Done. You're booked for Thursday at 3:15 PM, and I've texted you a confirmation. Anything else I can help with?" },
];

export function ChatDemo() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const bubbles = Array.from(el.querySelectorAll<HTMLElement>("[data-chat-msg]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bubbles.forEach((b) => (b.style.opacity = "1"));
      return;
    }
    const tl = createTimeline({ loop: true, defaults: { ease: "outExpo" } });
    bubbles.forEach((bubble, i) => {
      tl.add(bubble, { opacity: [0, 1], translateY: [12, 0], scale: [0.96, 1], duration: 700 }, i === 0 ? 600 : "+=1100");
    });
    tl.add(bubbles, { opacity: 0, duration: 500, ease: "inQuad" }, "+=3200");
    return () => {
      tl.pause();
    };
  }, []);

  return (
    <div ref={root} className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-500/10 blur-3xl dark:bg-brand-500/20" aria-hidden="true" />
      <div className="relative rounded-2xl border border-ink-200 bg-white shadow-[0_24px_60px_-20px_rgba(20,20,23,0.25)] dark:border-ink-800 dark:bg-ink-900">
        <div className="flex items-center justify-between px-5 py-4 border-b border-ink-100 dark:border-ink-800">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">AI</span>
            <div>
              <p className="text-sm font-semibold text-ink-900 dark:text-white">Front desk assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online 24/7
              </p>
            </div>
          </div>
          <div className="hidden sm:flex gap-1.5">
            {["WhatsApp", "SMS", "Web"].map((c) => (
              <span key={c} className="rounded-full border border-ink-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-500 dark:border-ink-700 dark:text-ink-400">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 px-5 py-6 min-h-[300px]">
          {messages.map((m, i) => (
            <div key={i} data-chat-msg className={`flex ${m.from === "customer" ? "justify-end" : "justify-start"}`}>
              <p
                className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "customer"
                    ? "rounded-br-md bg-brand-600 text-white"
                    : "rounded-bl-md bg-ink-100 text-ink-800 dark:bg-ink-800 dark:text-ink-100"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-ink-100 px-5 py-3 dark:border-ink-800">
          <span className="font-mono text-[11px] text-ink-400">Example conversation</span>
          <span className="font-mono text-[11px] text-ink-400">Powered by TTomni</span>
        </div>
      </div>
    </div>
  );
}
