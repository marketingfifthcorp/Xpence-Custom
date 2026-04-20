import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsStrip } from "@/components/StatsStrip";
import { ExpandingBento } from "@/components/ExpandingBento";
import {
  FeatureShowcase,
  ActiveTeamCardsVisual,
  PhoneAppVisual,
  TapPayVisual,
  TeamGridVisual,
} from "@/components/FeatureShowcase";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Cards — Xpence",
  description:
    "Cards that think. Control that scales. Issue physical and virtual Mastercards instantly with built-in limits, rules, and real-time spend control.",
};

const CARDS_STATS = [
  { value: 3, suffix: "min", label: "Cards issued in minutes" },
  { value: 180, suffix: "+", label: "Supported currencies worldwide" },
  { value: 0, suffix: "%", label: "FX markup on global spend" },
  { value: 24, suffix: "/7", label: "Customer support" },
];

function CardsHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(105,38,175,0.35) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
        {/* Left — copy */}
        <div className="flex w-full flex-col lg:w-[52%]">
          <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
            Corporate Cards
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Cards that think. Control that scales.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Issue your physical and virtual cards in minutes — with built-in rules, limits,
            and approvals. Real-time spend control over how your team operates.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Get your cards
            </Link>
            <Link
              href="#"
              className="rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Right — Active Team Cards visual */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[48%]">
          <ActiveTeamCardsVisual />
        </div>
      </div>
    </section>
  );
}

function CardsCTABanner() {
  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(90deg, rgba(105,38,175,0.75) 0%, #000000 60%)",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem]">
          Ready to issue your first card?
        </h2>
        <p className="mt-4 max-w-md text-base text-white/65 sm:text-lg">
          Setup takes under 20 minutes. Your first virtual card is live the same day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get Started cards
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-white/25 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/14"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CardsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <CardsHero />

        <StatsStrip stats={CARDS_STATS} />

        {/* Expanding bento — same as homepage */}
        <section
          className="overflow-x-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(105, 38, 175, 0.48) 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <ExpandingBento />
          </div>
        </section>

        {/* Set the rules once */}
        <FeatureShowcase
          layout="image-left"
          gradient="right-to-left"
          heading="Set the rules once. Every spend follows."
          description="Stop reviewing expenses after they happen. Set the rules once — Xpence applies them in real time, at the moment of spend. No chasing. No manual checks. Just built-in control."
          features={[
            { bold: "100% Real-time enforcement", text: "Every transaction follows your rules, instantly" },
            { bold: "Per-card limits", text: "Set daily, weekly, or monthly spend caps" },
            { bold: "MCC Controls", text: "Allow or block spending by category" },
            { bold: "Time-based rules", text: "Restrict usage to business hours and days" },
            { bold: "Auto-limit approvals", text: "Auto-approve under limits, escalate when needed" },
            { bold: "Instant freeze control", text: "Freeze or unfreeze cards anytime, anywhere" },
          ]}
          visual={<PhoneAppVisual />}
        />

        {/* Tap. Pay. Done. */}
        <FeatureShowcase
          layout="image-right"
          gradient="left-to-right"
          heading="Tap. Pay. Done."
          description="Add your Xpence cards to Google Pay and manage business spend with a single tap. Fast, secure, and always within your control — whether you're online or on the move."
          features={[
            { bold: "Instant setup", text: "Add your card in seconds" },
            { bold: "One-tap payments", text: "Pay anywhere Google Pay is accepted" },
            { bold: "Always in control", text: "Track every transaction in real time" },
          ]}
          visual={<TapPayVisual />}
        />

        {/* Security that works in real time */}
        <FeatureShowcase
          layout="image-left"
          gradient="right-to-left"
          heading="Security that works in real time. Not after."
          description="Xpence is built on global security standards with real-time protection at every transaction. From fraud monitoring to secure authentication — your business spend stays protected, always."
          features={[
            { bold: "PCI-DSS certified", text: "Built-in grade security for every transaction" },
            { bold: "Real-time fraud monitoring", text: "Detect and stop suspicious activity instantly" },
            { bold: "3D Secure payments", text: "Extra protection for every online purchase" },
          ]}
          cta={{ label: "Explore Xpence Management", href: "/expense-management" }}
          visual={<TeamGridVisual />}
        />

        <CardsCTABanner />
      </main>
      <Footer />
    </>
  );
}
