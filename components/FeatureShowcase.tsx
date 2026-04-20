import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Stat = {
  value: string;
  label: string;
  sublabel?: string;
};

type Feature = {
  bold: string;
  text: string;
};

type GradientPreset =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top";

type FeatureShowcaseProps = {
  layout?: "image-left" | "image-right";
  gradient?: GradientPreset | string;
  heading: string;
  description: string | ReactNode;
  features?: Feature[];
  stats?: Stat[];
  cta?: {
    label: string;
    href: string;
  };
  visual: ReactNode;
};

function getGradientStyle(gradient: GradientPreset | string): string {
  const presets: Record<GradientPreset, string> = {
    "left-to-right":
      "linear-gradient(90deg, #000000 40%, rgba(105, 38, 175, 0.65) 100%)",
    "right-to-left":
      "linear-gradient(270deg, #000000 40%, rgba(105, 38, 175, 0.65) 100%)",
    "top-to-bottom":
      "linear-gradient(180deg, #000000 30%, rgba(105, 38, 175, 0.55) 100%)",
    "bottom-to-top":
      "linear-gradient(0deg, #000000 30%, rgba(105, 38, 175, 0.55) 100%)",
  };

  return presets[gradient as GradientPreset] ?? gradient;
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeatureShowcase({
  layout = "image-right",
  gradient = "left-to-right",
  heading,
  description,
  features,
  stats,
  cta,
  visual,
}: FeatureShowcaseProps) {
  const isImageLeft = layout === "image-left";

  return (
    <section
      className="flex h-dvh items-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8"
      style={{ background: getGradientStyle(gradient) }}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24 ${
          isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Visual / Image side */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[45%] xl:w-[42%]">
          {visual}
        </div>

        {/* Content side */}
        <div className="flex w-full flex-col lg:w-[55%] xl:w-[58%]">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {heading}
          </h2>

          <div className="mt-6 text-pretty text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl lg:leading-relaxed">
            {typeof description === "string" ? <p>{description}</p> : description}
          </div>

          {features && features.length > 0 && (
            <ul className="mt-8 space-y-3">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-white/90 sm:text-base"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>
                    <strong className="font-semibold text-white">{f.bold}</strong>
                    {" — "}
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {stats && stats.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-8 lg:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-white lg:text-base">
                    {stat.label}
                  </span>
                  {stat.sublabel && (
                    <span className="mt-0.5 max-w-[160px] text-xs leading-snug text-white/70 lg:text-sm">
                      {stat.sublabel}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {cta && (
            <Link
              href={cta.href}
              className="group mt-10 inline-flex items-center gap-2 text-lg font-medium text-white transition-opacity hover:opacity-80 sm:text-xl"
            >
              {cta.label}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function CardStackVisual() {
  return (
    <div className="relative w-full max-w-[620px] overflow-hidden rounded-2xl ">
      <div className="relative aspect-10/8 w-full">
        <Image
          src="/images/card-2.png"
          alt="Xpence card controls"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 620px"
        />
      </div>
    </div>
  );
}

export function DashboardVisual() {
  return (
    <div className="relative w-full max-w-[680px] overflow-hidden rounded-2xl ">
      <div className="relative aspect-6/4 w-full">
        <Image
          src="/images/dashboard.png"
          alt="Xpence dashboard"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 680px"
        />
      </div>
    </div>
  );
}

export function TeamGridVisual() {
  return (
    <div className="relative w-full max-w-[620px] overflow-hidden rounded-2xl">
      <div className="relative aspect-10/8 w-full">
        <Image
          src="/images/teams.png"
          alt="Team controls and permissions"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 620px"
        />
      </div>
    </div>
  );
}

export function AiCardsVisual() {
  return (
    <div className="flex w-full max-w-[320px] flex-col gap-4">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl "
        >
          <div className="relative aspect-16/10 w-full">
            <Image
              src="/images/slot.png"
              alt={`AI accounting card ${index}`}
              fill
              className="object-contain"
              sizes="320px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
