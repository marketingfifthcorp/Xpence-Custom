"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    question: "Is Xpence a digital bank?",
    answer:
      "Xpence is a financial technology company, not a bank. We partner with licensed financial institutions to provide our services. Your funds are held securely with our banking partners.",
  },
  {
    question: "What is Xpence?",
    answer:
      "Xpence is a comprehensive spend management platform designed for businesses in the MENA region. We help companies issue corporate cards, track expenses, automate bookkeeping, and gain real-time visibility into their finances.",
  },
  {
    question: "Where Xpence is operating?",
    answer:
      "Xpence currently operates in the United Arab Emirates (UAE) and is expanding across the MENA region. We serve businesses of all sizes, from startups to enterprises.",
  },
  {
    question: "How do I get started with Xpence?",
    answer:
      "Getting started is simple. Sign up on our website, complete the verification process, and you can start issuing cards and managing expenses within minutes. Our team is available to help you every step of the way.",
  },
  {
    question: "Who can open an Xpence account?",
    answer:
      "Any registered business in the UAE can open an Xpence account. This includes sole proprietorships, SMEs, and large enterprises. You'll need valid trade license and company documents to get started.",
  },
  {
    question: "What documents do I need to create an Xpence account?",
    answer:
      "You'll need your trade license, Emirates ID of the authorized signatory, company memorandum of association (MOA), and proof of company address. Our onboarding team will guide you through the process.",
  },
  {
    question: "What type of card does Xpence issue?",
    answer:
      "Xpence issues both physical and virtual Visa cards. Virtual cards can be created instantly for online purchases, while physical cards are delivered within a few business days for in-person transactions.",
  },
  {
    question: "Are Xpence cards safe?",
    answer:
      "Absolutely. Xpence cards come with enterprise-grade security features including real-time transaction alerts, spending limits, merchant category controls, and the ability to freeze cards instantly from your dashboard.",
  },
];

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative h-4 w-4 shrink-0">
      <span
        className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white transition-transform duration-300"
        style={{ transform: isOpen ? "translateX(-50%) rotate(90deg)" : "translateX(-50%)" }}
      />
      <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white" />
    </div>
  );
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-white/20">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-opacity hover:opacity-80 sm:py-7 lg:py-8"
        aria-expanded={isOpen}
      >
        <span className="text-base font-normal text-white sm:text-lg lg:text-xl xl:text-2xl">
          {item.question}
        </span>
        <PlusIcon isOpen={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-white/80 sm:text-base lg:pb-8 lg:text-lg">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, #6926AF -86%, #000000 155%)",
      }}
    >
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-12 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:mb-16 lg:text-6xl xl:text-7xl">
          What you need to know
          <br />
          about Xpence?
        </h2>

        <div className="border-b border-white/20">
          {FAQS.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
