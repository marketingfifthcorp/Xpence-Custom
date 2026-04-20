"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const navLinkClass =
  "flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white";

const SCROLL_THRESHOLD_PX = 12;
/** Ignore tiny scroll jitter (px) before changing hide/show */
const SCROLL_DELTA_PX = 8;
/** Below this scroll position the header is always shown */
const TOP_ANCHOR_PX = 48;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const lastScrollY = useRef(0);

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
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.svg"
            alt="XPENCE"
            width={123}
            height={34}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <button type="button" className={navLinkClass}>
            Products
            <ChevronDown className="opacity-70" />
          </button>
          <button type="button" className={navLinkClass}>
            Solutions
            <ChevronDown className="opacity-70" />
          </button>
          <button type="button" className={navLinkClass}>
            Resources
            <ChevronDown className="opacity-70" />
          </button>
          <Link href="#" className="text-sm font-medium text-white/90 hover:text-white">
            Customers
          </Link>
          <Link href="#" className="text-sm font-medium text-white/90 hover:text-white">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <UaeFlag />
            <Link
              href="#"
              className="hidden text-sm font-medium text-white/90 hover:text-white sm:inline"
            >
              Sign in
            </Link>
          </div>
          <Link
            href="#"
            className="rounded-lg bg-xpence px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
