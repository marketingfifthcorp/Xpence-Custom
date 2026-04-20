import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Xpence",
  description:
    "Transparent, usage-based pricing for every stage of growth. From early-stage startups to enterprise finance teams.",
};

type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    description:
      "For solo founders and small teams getting started with corporate spend.",
    features: [
      "1 physical card",
      "3 virtual cards",
      "Real-time transaction feed",
      "Basic spend controls",
      "Email support",
    ],
    cta: "Get started free",
  },
  {
    name: "Growth",
    price: "AED 199",
    period: "/ month",
    description:
      "For growing teams that need more cards, deeper controls, and accounting sync.",
    features: [
      "5 physical cards",
      "25 virtual cards",
      "Multi-level approval flows",
      "Accounting integrations (Xero, QuickBooks)",
      "Receipt capture & matching",
      "Role-based access",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "AED 599",
    period: "/ month",
    description:
      "For finance teams managing complex spend across departments and cost centres.",
    features: [
      "20 physical cards",
      "Unlimited virtual cards",
      "ERP integrations (SAP, NetSuite)",
      "Custom spend policies",
      "Budget management",
      "API access",
      "Dedicated account manager",
      "SLA-backed support",
    ],
    cta: "Talk to sales",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For large organisations with complex compliance, volume, and customisation requirements.",
    features: [
      "Unlimited physical & virtual cards",
      "Custom approval hierarchies",
      "White-glove onboarding",
      "On-premise data options",
      "Custom ERP connectors",
      "Dedicated SLA",
      "24/7 phone support",
    ],
    cta: "Contact us",
  },
];

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl p-7 lg:p-8 ${
        tier.highlighted
          ? "border-2 border-violet-500/60 bg-violet-900/20 shadow-[0_0_60px_rgba(112,0,255,0.15)]"
          : "border border-white/10 bg-white/5"
      } backdrop-blur-sm`}
    >
      {tier.highlighted && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-b-xl bg-violet-500 px-4 py-1 text-xs font-semibold text-white">
            Most popular
          </span>
        </div>
      )}

      <div>
        <h3
          className={`text-lg font-semibold ${tier.highlighted ? "text-violet-300" : "text-white/80"}`}
        >
          {tier.name}
        </h3>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {tier.price}
          </span>
          {tier.period && (
            <span className="mb-1.5 text-base text-white/50">{tier.period}</span>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{tier.description}</p>
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 8L6.5 11.5L13 4.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
          tier.highlighted
            ? "bg-violet-500 text-white"
            : "border border-white/20 bg-white/8 text-white"
        }`}
      >
        {tier.cta}
      </Link>
    </article>
  );
}

const FAQS = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What currencies do you support?",
    a: "Xpence is denominated in AED and supports multi-currency spend for international transactions on all plans.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees, ever. You only pay the monthly plan rate and any card replacement fees if applicable.",
  },
  {
    q: "How do I add more cards?",
    a: "You can issue additional physical or virtual cards from your dashboard at any time. Limits depend on your plan.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <PageHero
          badge="Pricing"
          heading="Not every business spends the same way."
          subheading="Pick the plan that fits where you are today — and upgrade as you grow. No hidden fees. No lock-in. Cancel any time."
          accentColor="rgba(112,0,255,0.18)"
        />

        {/* Pricing grid */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
              {TIERS.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-white/40">
              All prices exclude VAT. AED amounts shown. Enterprise pricing available upon request.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="px-4 py-20 sm:px-6 lg:px-8"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(105,38,175,0.18) 100%)",
          }}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <dt className="text-base font-semibold text-white">{faq.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/65">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
