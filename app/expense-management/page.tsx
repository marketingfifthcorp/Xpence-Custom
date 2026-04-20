import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsStrip } from "@/components/StatsStrip";
import { ExpandingBento } from "@/components/ExpandingBento";
import {
  FeatureShowcase,
  SpendOverviewVisual,
  CardStackVisual,
  DashboardVisual,
  AiCardsVisual,
} from "@/components/FeatureShowcase";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Management — Xpence",
  description:
    "Your finance team's control tower. Approve spend, track budgets, reconcile transactions, and close your books — all in real time.",
};

const EXPENSE_STATS = [
  { value: 85, suffix: "%", label: "Reduction in expense processing time" },
  { value: 3, suffix: "min", label: "Average time to approve a request" },
  { value: 0, suffix: " gaps", label: "In reconciliation with auto-matching" },
  { value: 100, suffix: "%", label: "Audit-ready records, always" },
];

function ExpenseHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(105,38,175,0.4) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
        {/* Left — copy */}
        <div className="flex w-full flex-col lg:w-[52%]">
          <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
            Management Platform
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Your finance team&apos;s control tower.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            One place to approve spend, track budgets, reconcile transactions, and close
            your books — without chasing a single receipt. Everything happens in real time.
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

        {/* Right — Spend overview dashboard visual */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[48%]">
          <SpendOverviewVisual />
        </div>
      </div>
    </section>
  );
}

function ExpenseCTABanner() {
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
          Ready to close your books on time?
        </h2>
        <p className="mt-4 max-w-md text-base text-white/65 sm:text-lg">
          Setup takes under 20 minutes. Your team is up and running the same day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get started free
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

export default function ExpenseManagementPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <ExpenseHero />

        <StatsStrip stats={EXPENSE_STATS} />

        {/* Expanding bento — same as homepage */}
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
                Built for teams that don&apos;t wait on finance.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base text-white/65 sm:text-lg">
                Every feature is designed to move money yourself. Until, close your
                books, and give you full visibility — the moment it happens.
              </p>
            </div>
            <ExpandingBento />
          </div>
        </section>

        {/* Approvals that move at your speed */}
        <FeatureShowcase
          layout="image-right"
          gradient="left-to-right"
          heading="Approvals that move at your speed."
          description="Set rules that match how your business operates. Small spends go through instantly."
          features={[
            { bold: "Large ones escalate", text: "Automatically. No bottlenecks, no back and forth." },
            { bold: "100% Rule-based approvals", text: "Every request follows your structure" },
            { bold: "Configurable tiers", text: "Set thresholds by team or category" },
            { bold: "Instant approvals", text: "Approve via app, email, or desktop in seconds" },
            { bold: "Full audit trail", text: "Every action logged with timestamps and approver" },
            { bold: "Delegation built-in", text: "Keep approvals moving, even when managers are away" },
          ]}
          visual={<CardStackVisual />}
        />

        {/* Visibility without the wait */}
        <FeatureShowcase
          layout="image-left"
          gradient="right-to-left"
          heading="Visibility without the wait. Always."
          description="See every dirham across cards, teams, and categories — the moment it's spent. No statements. No delays. Just real-time clarity across your entire business."
          features={[
            { bold: "Real-time dashboard", text: "Every transaction, instantly visible" },
            { bold: "Spend by team & category", text: "Know exactly where money goes" },
            { bold: "Live budgets & alerts", text: "Stay ahead of overspend" },
            { bold: "Export-ready reports", text: "Clean data, ready when you are" },
          ]}
          visual={<DashboardVisual />}
        />

        {/* Books that close themselves */}
        <FeatureShowcase
          layout="image-left"
          gradient="right-to-left"
          heading="Books that close themselves. Automatically."
          description="From receipt capture to categorisation and reconciliation — Xpence handles the work behind the scenes. Your books stay clean, accurate, and always ready."
          features={[
            { bold: "Receipt capture & matching", text: "Snap and sync instantly" },
            { bold: "Auto-categorisation", text: "Every transaction tagged automatically" },
            { bold: "Instant reconciliation", text: "No manual matching, no gaps" },
            { bold: "Always audit-ready", text: "Clean records, anytime" },
          ]}
          cta={{ label: "Explore Xpence Management", href: "/expense-management" }}
          visual={<AiCardsVisual />}
        />

        <ExpenseCTABanner />
      </main>
      <Footer />
    </>
  );
}
