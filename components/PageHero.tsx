import Link from "next/link";
import { ReactNode } from "react";

type PageHeroProps = {
  badge?: string;
  heading: string;
  subheading: string | ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  accentColor?: string;
};

export function PageHero({
  badge,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  accentColor = "rgba(112,0,255,0.18)",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 55% at 50% -10%, ${accentColor}, transparent)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-56 w-56 rounded-full bg-white/3 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {badge && (
          <span className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            {badge}
          </span>
        )}

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.05]">
          {heading}
        </h1>

        <div className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
          {typeof subheading === "string" ? <p>{subheading}</p> : subheading}
        </div>

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-xl border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
