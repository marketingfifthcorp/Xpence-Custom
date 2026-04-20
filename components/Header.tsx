"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UaeFlag({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-4 w-6 overflow-hidden rounded-sm border border-white/20 ${className}`}
      title="United Arab Emirates"
      aria-hidden
    >
      <svg viewBox="0 0 24 16" className="h-full w-full">
        <rect width="24" height="5.33" fill="#00732F" />
        <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
        <rect y="10.66" width="24" height="5.34" fill="#000000" />
        <rect width="6" height="16" fill="#FF0000" />
      </svg>
    </span>
  );
}

const SCROLL_THRESHOLD_PX = 12;
const SCROLL_DELTA_PX = 8;
const TOP_ANCHOR_PX = 48;

const PRODUCTS = [
  {
    label: "Cards",
    href: "/cards",
    description: "Physical & virtual corporate cards",
  },
  {
    label: "Expense Management",
    href: "/expense-management",
    description: "Approvals, budgets & reconciliation",
  },
  {
    label: "Mobile App",
    href: "/mobile",
    description: "Full control from your phone",
  },
  {
    label: "Integrations",
    href: "/integrations",
    description: "Connect your existing tools",
  },
];

const MOBILE_NAV = [
  {
    section: "Products",
    links: PRODUCTS.map((p) => ({ label: p.label, href: p.href })),
  },
  {
    section: null,
    links: [
      { label: "Solutions", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

function ProductsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl"
    >
      {PRODUCTS.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          onClick={onClose}
          className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-white/8"
        >
          <span className="text-sm font-medium text-white">{p.label}</span>
          <span className="text-xs text-white/45">{p.description}</span>
        </Link>
      ))}
    </motion.div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;
        setScrolled(y > SCROLL_THRESHOLD_PX);
        if (y <= TOP_ANCHOR_PX) {
          setHiddenByScroll(false);
        } else if (delta > SCROLL_DELTA_PX) {
          setHiddenByScroll(true);
          setProductsOpen(false);
        } else if (delta < -SCROLL_DELTA_PX) {
          setHiddenByScroll(false);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Close products dropdown on outside click
  useEffect(() => {
    if (!productsOpen) return;
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [productsOpen]);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, []);

  const navLinkClass =
    "text-sm font-medium text-white/90 transition-colors hover:text-white";

  return (
    <header
      style={{
        transition:
          "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.45s ease-out, backdrop-filter 0.45s ease-out, border-color 0.45s ease-out",
      }}
      className={`fixed inset-x-0 top-0 z-50 border-b will-change-[transform,opacity] ${
        hiddenByScroll
          ? "-translate-y-full opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          : "translate-y-0 opacity-100"
      } ${
        scrolled
          ? "border-white/10 bg-black/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-7 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" onClick={closeAll}>
          <Image
            src="/logo.svg"
            alt="XPENCE"
            width={123}
            height={34}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {/* Products — dropdown */}
          <div ref={productsRef} className="relative">
            <button
              type="button"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((o) => !o)}
              className={`flex items-center gap-1 ${navLinkClass}`}
            >
              Products
              <ChevronDown
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <ProductsDropdown onClose={() => setProductsOpen(false)} />
              )}
            </AnimatePresence>
          </div>

          <Link href="/solutions" className={navLinkClass}>
            Solutions
          </Link>

          <Link href="/resources" className={navLinkClass}>
            Resources
          </Link>

          <Link href="/customers" className={navLinkClass}>
            Customers
          </Link>

          <Link href="/pricing" className={navLinkClass}>
            Pricing
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <UaeFlag />
            <Link href="#" className="text-sm font-medium text-white/90 hover:text-white">
              Sign in
            </Link>
          </div>
          <Link
            href="#"
            className="hidden rounded-lg bg-xpence px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:inline-block"
          >
            Book a demo
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-white/10 lg:hidden"
          >
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col px-4 pb-6 pt-4">
              {/* Products — expandable in mobile */}
              <button
                type="button"
                onClick={() => setMobileProductsOpen((o) => !o)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white/90"
              >
                Products
                <ChevronDown
                  className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={closeAll}
                        className="flex flex-col gap-0.5 border-b border-white/5 py-3 pl-4 transition-colors hover:text-white"
                      >
                        <span className="text-sm font-medium text-white/90">{p.label}</span>
                        <span className="text-xs text-white/40">{p.description}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Other top-level links */}
              {[
                { label: "Solutions", href: "/solutions" },
                { label: "Resources", href: "/resources" },
                { label: "Customers", href: "/customers" },
                { label: "Pricing", href: "/pricing" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={closeAll}
                  className="border-b border-white/10 py-4 text-base font-medium text-white/90 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="#"
                  onClick={closeAll}
                  className="text-center text-sm font-medium text-white/80"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  onClick={closeAll}
                  className="rounded-lg bg-xpence px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Book a demo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
