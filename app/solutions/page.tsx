import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExpandingBento } from "@/components/ExpandingBento";
import { CardStackVisual } from "@/components/FeatureShowcase";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — Xpence",
  description:
    "We don't just give you software. We make it work. Tailored onboarding, platform configuration, and dedicated support from day one.",
};

const PROCESS_STEPS = [
  { step: "01", label: "Tailored onboarding plan" },
  { step: "02", label: "Dedicated support with your team" },
  { step: "03", label: "Platform configuration with Xpence" },
  { step: "04", label: "24/7 technical support" },
  { step: "05", label: "Go live & amplify with the brand" },
];

const BENTO_ITEMS = [
  { title: "Custom setup", description: "We configure Xpence around how your business actually works — your cost centres, your approval flows, your rules." },
  { title: "Custom reporting", description: "Get the reports your finance team needs, not the ones that come out of the box. We build them for you." },
  { title: "Bespoke integrations", description: "Already running an ERP or accounting stack? We connect Xpence to it — no workarounds, no data loss." },
  { title: "Dedicated support", description: "A named account manager who knows your business and is reachable when it matters." },
  { title: "Process optimisation", description: "We review your current spend workflows and help you eliminate bottlenecks before they slow you down." },
  { title: "Scalable solutions", description: "Built to grow with you — from 10 team members to 10,000, without re-implementing anything." },
];

function SolutionsHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-0 pt-10 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 60% 35%, rgba(105,38,175,0.45) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 pb-16 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
        {/* Left — copy */}
        <div className="flex w-full flex-col lg:w-[55%]">
          <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
            Management Platform
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            We don&apos;t just give you software. We make it work.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Every Xpence deployment is configured for the business using it — not a
            generic rollout. From onboarding to going live, our team is with yours every
            step of the way.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#plan"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Talk to our team
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
            >
              Check our plans
            </Link>
          </div>
        </div>

        {/* Right — stacked cards */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[45%]">
          <CardStackVisual />
        </div>
      </div>

      {/* Process steps strip */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="flex overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PROCESS_STEPS.map((item, i) => (
              <div
                key={item.step}
                className={`flex shrink-0 flex-col gap-1.5 px-6 py-5 ${
                  i !== PROCESS_STEPS.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <span className="text-[10px] font-semibold text-violet-400/80">
                  {item.step}
                </span>
                <span className="whitespace-nowrap text-xs font-medium text-white/75 lg:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsBentoSection() {
  return (
    <section
      className="overflow-x-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, rgba(105, 38, 175, 0.48) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem]">
            Everything your team needs — on the go.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base text-white/65 sm:text-lg">
            From approvals to tracking spend, every feature is built to give you
            speed, control, and full visibility — wherever you are.
          </p>
        </div>
        <ExpandingBento />
      </div>
    </section>
  );
}

function ImplementationCTA() {
  return (
    <section
      id="plan"
      className="px-4 py-24 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(105,38,175,0.35) 0%, #000000 70%)",
      }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem]">
          Let&apos;s build your implementation plan.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
          Tell us about your business and we&apos;ll design a setup that works from day one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Talk to sales
          </Link>
          <Link
            href="/pricing"
            className="rounded-xl border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
          >
            Check our plans
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <SolutionsHero />
        <SolutionsBentoSection />
        <ImplementationCTA />
      </main>
      <Footer />
    </>
  );
}
