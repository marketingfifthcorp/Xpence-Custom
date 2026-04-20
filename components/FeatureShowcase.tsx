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
      className="flex min-h-[600px] items-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:h-dvh lg:py-12 lg:px-8"
      style={{ background: getGradientStyle(gradient) }}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-24 ${
          isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Visual / Image side */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[38%] xl:w-[42%]">
          {visual}
        </div>

        {/* Content side */}
        <div className="flex w-full flex-col lg:w-[62%] xl:w-[58%]">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.25rem] lg:leading-[1.15] xl:text-[2.75rem]">
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
    <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl lg:max-w-[420px] xl:max-w-[560px]">
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
    <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl lg:max-w-[440px] xl:max-w-[620px]">
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
    <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl lg:max-w-[420px] xl:max-w-[560px]">
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

export function MobileHeroVisual() {
  return (
    <div className="relative flex w-full max-w-[340px] items-center justify-center lg:max-w-[400px] xl:max-w-[460px]">
      <div className="relative aspect-9/16 w-[55%] overflow-hidden rounded-[2rem] border border-white/15 bg-[#1a1a1a] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
        {/* Phone screen */}
        <div className="flex h-full flex-col bg-[#0f0f0f] p-3">
          {/* Status bar */}
          <div className="flex items-center justify-between px-1 pb-2">
            <span className="text-[8px] font-semibold text-white/60">9:41</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-3 rounded-sm bg-white/40" />
              <div className="h-1.5 w-1.5 rounded-sm bg-white/40" />
            </div>
          </div>
          {/* App header */}
          <div className="rounded-xl bg-violet-600/30 px-3 py-2 mb-2">
            <p className="text-[8px] text-white/50">Total balance</p>
            <p className="text-sm font-bold text-white">AED 94,200</p>
          </div>
          {/* Card rows */}
          {["Marketing", "Operations", "Travel"].map((label, i) => (
            <div key={label} className="mb-1.5 flex items-center justify-between rounded-lg bg-white/6 px-2.5 py-2">
              <div className="flex items-center gap-2">
                <div className={`h-5 w-5 rounded-full ${["bg-violet-500","bg-blue-500","bg-emerald-500"][i]}`} />
                <span className="text-[8px] text-white/70">{label}</span>
              </div>
              <span className="text-[8px] font-semibold text-white">{["AED 38k","AED 29k","AED 26k"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AnalyticsDashVisual() {
  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-[#1a0a2e] p-5 shadow-2xl lg:max-w-[420px] xl:max-w-[460px]">
      {/* Top bar */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold text-white/50">Analytics</span>
        <div className="flex gap-1.5">
          {[0,1,2].map(i => <div key={i} className="h-2 w-2 rounded-full bg-white/20" />)}
        </div>
      </div>

      {/* Mini chart area */}
      <div className="mb-4 flex items-end gap-1 h-16">
        {[30,55,40,70,50,85,60,75,45,90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{ height: `${h}%`, background: i === 9 ? "#7000ff" : "rgba(112,0,255,0.3)" }}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="mb-4 h-px bg-white/8" />

      {/* Bottom row — donut + stats */}
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
          <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(112,0,255,0.2)" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#7000ff" strokeWidth="4"
              strokeDasharray="63 88" strokeLinecap="round" />
          </svg>
          <span className="absolute text-xs font-bold text-white">70%</span>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {["Marketing","Operations","Sales"].map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-500" style={{ opacity: 1 - i * 0.25 }} />
              <span className="text-[10px] text-white/60 flex-1">{l}</span>
              <span className="text-[10px] font-semibold text-white">{["38%","29%","26%"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SpendOverviewVisual() {
  const departments = [
    { name: "Marketing", amount: "AED 38,400", pct: 82 },
    { name: "Operations", amount: "AED 29,600", pct: 63 },
    { name: "Sales & travel", amount: "AED 26,200", pct: 55 },
  ];

  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-2xl lg:max-w-[420px] xl:max-w-[460px]">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/40">
        Spend Overview — November
      </p>

      {/* Totals */}
      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/6 px-4 py-3">
          <p className="text-[10px] text-white/45">Total spent</p>
          <p className="mt-1 text-lg font-bold text-white">AED 94,200</p>
        </div>
        <div className="rounded-xl bg-white/6 px-4 py-3">
          <p className="text-[10px] text-white/45">Remaining budget</p>
          <p className="mt-1 text-lg font-bold text-white">AED 55,800</p>
        </div>
      </div>

      {/* By department */}
      <p className="mb-3 text-[10px] font-semibold text-white/40">By department</p>
      <div className="flex flex-col gap-3">
        {departments.map((d, i) => (
          <div key={d.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-white/80">{d.name}</span>
              <span className="text-sm font-medium text-white">{d.amount}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${d.pct}%`,
                  background: i === 1 ? "#7000ff" : "#3b82f6",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ActiveTeamCardsVisual() {
  const members = [
    { name: "Sara Al Mansouri", role: "Marketing · Product", spent: "AED 2,400", limit: "5,000", tag: "Active", tagColor: "bg-emerald-500" },
    { name: "Ahmed Hassan", role: "Operations · Projects", spent: "AED 7,200", limit: "8,000", tag: "Approved", tagColor: "bg-violet-500" },
    { name: "Nour Ibrahim", role: "Sales · Virtual", spent: "AED 490", limit: "2,000", tag: "Frozen", tagColor: "bg-blue-500" },
  ];

  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-2xl lg:max-w-[420px] xl:max-w-[460px]">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/40">
        Active Team Cards
      </p>
      <div className="flex flex-col gap-3">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-white">{m.name}</span>
              <span className="text-[11px] text-white/45">{m.role}</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-medium text-white">
                {m.spent} <span className="text-white/35">/ {m.limit}</span>
              </span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold text-white ${m.tagColor}`}>
                {m.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhoneAppVisual() {
  return (
    <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl lg:max-w-[360px] xl:max-w-[400px]">
      <div className="relative aspect-3/4 w-full">
        <Image
          src="/images/card-2.png"
          alt="Xpence mobile app"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 450px"
        />
      </div>
    </div>
  );
}

export function TapPayVisual() {
  return (
    <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl lg:max-w-[440px] xl:max-w-[560px]">
      <div className="relative aspect-4/3 w-full">
        <Image
          src="/images/contact.png"
          alt="Tap to pay with Xpence"
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
    <div className="flex w-full max-w-[260px] flex-col gap-3 lg:max-w-[280px] xl:max-w-[320px]">
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
