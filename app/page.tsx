import Image from "next/image";
import { ExpandingBento } from "@/components/ExpandingBento";
import {
  FeatureShowcase,
  CardStackVisual,
  DashboardVisual,
  TeamGridVisual,
  AiCardsVisual,
} from "@/components/FeatureShowcase";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { StatsStrip } from "@/components/StatsStrip";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { ContactCTA } from "@/components/ContactCTA";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GradientLine } from "@/components/GradientLine";
import { XpenceMark } from "@/components/XpenceMark";

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(112,0,255,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-64 w-64 rounded-full bg-white/3 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-40 w-56 rotate-12 rounded-full bg-white/2 blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Open account
          </button>
          <button
            type="button"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Book Demo
          </button>
        </div>

        <div className="relative mt-16 flex w-full flex-col items-center sm:mt-20">
          <div className="relative mx-auto flex aspect-square w-[min(90vw,320px)] items-center justify-center">
            <XpenceMark />
            <div className="absolute left-1/2 top-1/2 w-[115%] max-w-4xl -translate-x-1/2 -translate-y-1/2 px-2">
              <GradientLine />
            </div>
          </div>
        </div>

        <h1 className="mt-14 max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Your money. Your control. Your Xpence.
        </h1>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
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
  );
}

function SpendPlatformSection() {
  return (
    <section
      className="overflow-x-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, rgba(132, 76, 190, 0.74) 0%, #000000 56.25%)",
      }}
    >
      <div className="mx-auto max-w-[1240px]">
        <PlatformShowcase />
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className=" bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-center text-2xl font-medium text-white/95 sm:text-3xl md:text-4xl lg:text-5xl">
            Our Valued Partners
          </h2>
          <div
            className="mt-3 h-px w-full max-w-md bg-linear-to-r from-transparent via-white/25 to-transparent"
            aria-hidden
          />
        </div>

        <div className="flex w-full justify-center">
          <Image
            src="/images/partner.svg"
            alt="Partner logos: kiosk, Palma Creativa, Hit and Miss, Brownie Film Co., and more"
            width={1024}
            height={98}
            className="h-auto w-full max-w-full object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <SpendPlatformSection />
        <StatsStrip />

        {/* Frame 13 - Bookkeeping: Image RIGHT, gradient left-to-right */}
        <FeatureShowcase
          layout="image-right"
          gradient="left-to-right"
          heading="Automated bookkeeping that saves hours"
          description="Xpence automatically categorizes every transaction, attaches receipts, and prepares your books — so your finance team spends less time on manual entry and more time on strategy."
          cta={{ label: "Explore Xpence Management", href: "#" }}
          visual={<DashboardVisual />}
        />

        {/* Frame 14 - Cards: Image LEFT, gradient top-to-bottom */}
        <FeatureShowcase
          layout="image-left"
          gradient="top-to-bottom"
          heading="Smart cards. Smarter visibility."
          description="Issue physical and virtual cards instantly, track every transaction in real time, and set spending limits with ease. Xpence gives you full control of your business finances — no more chasing receipts or waiting for end-of-month reports."
          stats={[
            { value: "100%", label: "Instant visibility", sublabel: "Every card, every payment, every time." },
            { value: "IIS", label: "Issue in seconds", sublabel: "Set up and activate new cards for your team instantly" },
            { value: "MCR", label: "Multi-currency ready", sublabel: "Manage AED and global spend in one dashboard" },
          ]}
          visual={<CardStackVisual />}
        />

        {/* Frame 17 - Teams: Image LEFT, gradient right-to-left */}
        <FeatureShowcase
          layout="image-left"
          gradient="right-to-left"
          heading="Built for teams, designed for control"
          description="Invite your team, assign roles, and issue cards with precision. Set limits, define permissions, and keep every expense aligned — without slowing anyone down. Xpence gives your team the freedom to spend, while you stay fully in control."
          features={[
            { bold: "100% Structured control", text: "Every user, every role, fully governed" },
            { bold: "RBA (Role-based access)", text: "Define who can spend, approve, and manage" },
            { bold: "SLC (Smart limit controls)", text: "Set rules, caps, and conditions per card" },
          ]}
          cta={{ label: "Explore Xpence Management", href: "#" }}
          visual={<TeamGridVisual />}
        />

        {/* Frame 18 - AI Accounting: Image LEFT, gradient top-to-bottom */}
        <FeatureShowcase
          layout="image-left"
          gradient="top-to-bottom"
          heading="AI-powered accounting. Zero manual work."
          description="Xpence automates expense categorization, reconciles transactions instantly, and prepares your financial data in real time. No spreadsheets. No errors. Just clean, ready-to-use books — always."
          features={[
            { bold: "100% Automated books", text: "Every transaction categorized and synced" },
            { bold: "ARC (Auto reconciliation)", text: "Match payments, receipts, and records instantly" },
            { bold: "RFR (Real-time reporting)", text: "Financial insights, ready when you need them" },
          ]}
          cta={{ label: "Explore Xpence Management", href: "#" }}
          visual={<AiCardsVisual />}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Blog Section */}
        <BlogSection />

        {/* Contact CTA */}
        <ContactCTA />

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
