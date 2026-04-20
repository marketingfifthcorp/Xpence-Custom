import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExpandingBento } from "@/components/ExpandingBento";
import {
  FeatureShowcase,
  MobileHeroVisual,
  AnalyticsDashVisual,
  CardStackVisual,
  TeamGridVisual,
} from "@/components/FeatureShowcase";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App — Xpence",
  description:
    "Your business spend always within reach. Approve, track, freeze, and manage — all from your phone.",
};

function MobileHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(105,38,175,0.45) 0%, transparent 65%)",
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
            Your business spend always within reach.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Approve, track, freeze, and manage — all from your phone. Xpence puts full
            financial control in your pocket, wherever your team operates.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Download for iOS
            </Link>
            <Link
              href="#"
              className="rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
            >
              Download for Android
            </Link>
          </div>
        </div>

        {/* Right — mobile phone visual */}
        <div className="flex w-full shrink-0 items-center justify-center lg:w-[48%]">
          <MobileHeroVisual />
        </div>
      </div>
    </section>
  );
}

function MobileCTABanner() {
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
          Your team is one download away.
        </h2>
        <p className="mt-4 max-w-md text-base text-white/65 sm:text-lg">
          Available on iOS and Android. Free to download. Takes minutes to set up.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Download for iOS
          </Link>
          <Link
            href="#"
            className="rounded-xl border border-white/25 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/14"
          >
            Download for Android
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function MobilePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <MobileHero />

        {/* Everything your team needs — on the go */}
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

        {/* Approvals that don't wait. Ever. */}
        <FeatureShowcase
          layout="image-right"
          gradient="left-to-right"
          heading="Approvals that don't wait. Ever."
          description="Requests come to you in real time. Review, approve, or decline in seconds — without logging into dashboards or chasing emails."
          features={[
            { bold: "Instant push notifications", text: "Know the moment a request needs your attention" },
            { bold: "Full context before approval", text: "See amount, merchant, team member, and policy status" },
            { bold: "Approve or decline in one tap", text: "Done before you close the notification" },
            { bold: "Works across app, email, and mobile", text: "Approve from wherever you are" },
          ]}
          visual={<AnalyticsDashVisual />}
        />

        {/* Visibility that travels with you */}
        <FeatureShowcase
          layout="image-left"
          gradient="right-to-left"
          heading="Visibility that travels with you."
          description="Track spend across your entire business — from anywhere. Whether it's one card or the whole team, you always know where things stand."
          features={[
            { bold: "Live transaction feed", text: "Every spend posts the second it happens" },
            { bold: "Spend by team, card, or category", text: "Filter instantly, no exports needed" },
            { bold: "Real-time budgets & limits", text: "See who's close to their cap before it's hit" },
            { bold: "Instant alerts on activity", text: "Be the first to know about anything unusual" },
          ]}
          visual={<CardStackVisual />}
        />

        {/* Control in every tap */}
        <FeatureShowcase
          layout="image-right"
          gradient="left-to-right"
          heading="Control in every tap."
          description="From issuing cards to freezing them — everything is managed directly from your phone. No dependency on finance teams or desktop tools."
          features={[
            { bold: "Freeze/unfreeze cards instantly", text: "Lock any card from the app in one tap" },
            { bold: "Adjust limits on the go", text: "Raise or lower spend caps without logging in to a desktop" },
            { bold: "Issue and manage new cards", text: "Spin up a virtual card for your team in seconds" },
            { bold: "Stay in control of whoever has your cards", text: "Full visibility across every active card" },
          ]}
          cta={{ label: "Explore Xpence Management", href: "/expense-management" }}
          visual={<TeamGridVisual />}
        />

        <MobileCTABanner />
      </main>
      <Footer />
    </>
  );
}
