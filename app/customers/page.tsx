import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { StatsStrip } from "@/components/StatsStrip";
import { ContactCTA } from "@/components/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers — Xpence",
  description:
    "See how MENA businesses use Xpence to take control of their spend, close their books faster, and scale without financial baggage.",
};

const CUSTOMER_STATS = [
  { value: 10, suffix: "k+", label: "Businesses across MENA" },
  { value: 98, suffix: "%", label: "Customer satisfaction rate" },
  { value: 4.8, suffix: "★", label: "Average rating on App Store & Google Play" },
  { value: 85, suffix: "%", label: "Reduction in expense processing time" },
];

const INDUSTRIES = [
  "Technology",
  "Retail & E-commerce",
  "Hospitality",
  "Construction",
  "Healthcare",
  "Professional Services",
  "Media & Marketing",
  "Logistics",
];

function CustomersHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(112,0,255,0.2), transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-white/50">
          Customers
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
          Trusted by businesses across MENA.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
          From early-stage startups to established enterprises — teams across the
          region use Xpence to control spend, automate bookkeeping, and scale
          without the financial baggage.
        </p>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-white/40">
          Across every industry
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <CustomersHero />
        <StatsStrip stats={CUSTOMER_STATS} />
        <IndustriesSection />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
