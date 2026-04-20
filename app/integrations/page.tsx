import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  FeatureShowcase,
  DashboardVisual,
  AiCardsVisual,
} from "@/components/FeatureShowcase";
import { ContactCTA } from "@/components/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations — Xpence",
  description:
    "Connect Xpence to the tools your team already uses. Native ERP connectors, accounting sync, and a REST API for custom integrations.",
};

type IntegrationCardProps = {
  name: string;
  category: string;
  description: string;
};

const INTEGRATIONS: IntegrationCardProps[] = [
  {
    name: "QuickBooks",
    category: "Accounting",
    description:
      "Push categorised transactions and reconciled data to QuickBooks automatically — no manual exports.",
  },
  {
    name: "Xero",
    category: "Accounting",
    description:
      "Two-way sync keeps your Xero books current with every card transaction and expense report.",
  },
  {
    name: "SAP",
    category: "ERP",
    description:
      "Connect Xpence to your SAP environment for end-to-end spend visibility across the organisation.",
  },
  {
    name: "Oracle NetSuite",
    category: "ERP",
    description:
      "Map Xpence cost centres to NetSuite subsidiaries and push clean GL entries on your schedule.",
  },
  {
    name: "Slack",
    category: "Notifications",
    description:
      "Receive approval requests, spend alerts, and policy violations directly in your Slack workspace.",
  },
  {
    name: "Microsoft Teams",
    category: "Notifications",
    description:
      "Keep finance and operations aligned with spend notifications and approval flows inside Teams.",
  },
];

function IntegrationCard({ name, category, description }: IntegrationCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/8">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
          <span className="text-xl font-bold text-white">{name[0]}</span>
        </div>
        <span className="rounded-full bg-violet-500/20 px-3 py-0.5 text-xs font-medium text-violet-300">
          {category}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
    </article>
  );
}

const API_FEATURES = [
  {
    icon: "⚡",
    title: "REST API",
    description:
      "Full CRUD access to cards, transactions, budgets, and team members via a clean, versioned REST API.",
  },
  {
    icon: "🔒",
    title: "OAuth 2.0",
    description:
      "Industry-standard authentication with scoped tokens and automatic rotation.",
  },
  {
    icon: "📡",
    title: "Webhooks",
    description:
      "Push real-time events to your systems the moment a transaction posts, a card is frozen, or a limit is hit.",
  },
  {
    icon: "📖",
    title: "Developer Docs",
    description:
      "Comprehensive API reference, SDKs for Node.js and Python, and interactive examples to get you started fast.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <PageHero
          badge="Integrations"
          heading="Your tools. Your workflow."
          subheading="Connect Xpence to the software your business already runs on. Native connectors for the leading accounting and ERP platforms — plus a REST API for anything custom."
          primaryCta={{ label: "Explore the API", href: "#" }}
          secondaryCta={{ label: "Request an integration", href: "#" }}
          accentColor="rgba(112,0,255,0.2)"
        />

        {/* Integration cards grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Connect in minutes
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/65 sm:text-lg">
                Native integrations that take hours off your finance team's plate every week.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {INTEGRATIONS.map((integration) => (
                <IntegrationCard key={integration.name} {...integration} />
              ))}
            </div>
          </div>
        </section>

        {/* Sync seamlessly */}
        <FeatureShowcase
          layout="image-right"
          gradient="left-to-right"
          heading="Sync seamlessly. Close books faster."
          description="Xpence speaks the language of your accounting software. Transactions arrive pre-categorised, receipts are already attached, and reconciliation rules are applied automatically — so your team spends less time on data entry and more time on analysis."
          features={[
            {
              bold: "Bi-directional sync",
              text: "Changes in your ERP reflect in Xpence — and vice versa",
            },
            {
              bold: "Custom field mapping",
              text: "Map Xpence cost centres, projects, and departments to your chart of accounts",
            },
            {
              bold: "Audit-ready exports",
              text: "One-click export of reconciled data in the format your auditor needs",
            },
          ]}
          cta={{ label: "See accounting integrations", href: "#" }}
          visual={<DashboardVisual />}
        />

        {/* Build your own */}
        <FeatureShowcase
          layout="image-left"
          gradient="right-to-left"
          heading="Build your own integration."
          description="Need something beyond our native connectors? Xpence's REST API gives you full programmatic access to cards, transactions, budgets, approvals, and team data — so you can build exactly what your business needs."
          visual={<AiCardsVisual />}
        />

        {/* API feature grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Everything you need to build
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {API_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <span className="text-3xl">{f.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
