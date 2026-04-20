import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactCTA } from "@/components/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Xpence",
  description:
    "Guides, articles, and answers to help you get the most out of Xpence and manage your business finances with confidence.",
};

const RESOURCE_CATEGORIES = [
  { label: "All", active: true },
  { label: "Guides" },
  { label: "Product updates" },
  { label: "Finance tips" },
  { label: "Case studies" },
];

function ResourcesHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(112,0,255,0.18), transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-white/50">
          Resources
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
          Ideas to help you launch and scale.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
          Guides, articles, and answers to help you get the most out of Xpence
          and manage your business finances with confidence.
        </p>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {RESOURCE_CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              type="button"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                cat.active
                  ? "bg-violet-600 text-white"
                  : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <ResourcesHero />
        <BlogSection />
        <FAQSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
