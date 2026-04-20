"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const DEFAULT_STATS: Stat[] = [
  { value: 85, suffix: "%", label: "reduction in expense processing time" },
  { value: 3, suffix: "min", label: "to issue a new virtual card" },
  { value: 10, suffix: "k+", label: "businesses across MENA" },
  { value: 4.8, suffix: "★", label: "average rating on App Store & Google Play" },
];

const ANIMATION_DURATION_MS = 1800;
const FRAME_RATE = 60;

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  stat,
  inView,
  delay,
}: {
  stat: Stat;
  inView: boolean;
  delay: number;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountUp(stat.value, ANIMATION_DURATION_MS, shouldAnimate);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timeout);
  }, [inView, delay]);

  const displayValue =
    stat.value % 1 === 0 ? Math.round(count) : count.toFixed(1);

  return (
    <div
      className="flex flex-col items-center gap-2 px-4 py-6 text-center transition-all duration-700 ease-out sm:px-8"
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
        {displayValue}
        {stat.suffix}
      </span>
      <span className="max-w-[200px] text-xs leading-relaxed text-white/60 sm:text-sm">
        {stat.label}
      </span>
    </div>
  );
}

export function StatsStrip({ stats }: { stats?: Stat[] }) {
  const STATS = stats ?? DEFAULT_STATS;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-6 sm:gap-10 lg:flex-nowrap lg:justify-between lg:gap-8">
        {STATS.map((stat, i) => (
          <StatItem
            key={stat.label}
            stat={stat}
            inView={inView}
            delay={i * 120}
          />
        ))}
      </div>
    </section>
  );
}
