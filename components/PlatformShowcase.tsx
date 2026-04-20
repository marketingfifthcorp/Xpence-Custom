"use client";

import { Lexend } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

const TAB_COPY = {
  title: "Lorem Ipsum",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
} as const;

const TABS = Array.from({ length: 6 }, (_, i) => ({
  id: `tab-${i}`,
  ...TAB_COPY,
  imageSrc: "/images/dashboard.png",
}));

export function PlatformShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TABS[activeIndex];

  return (
    <div className={lexend.className}>
      <header className="mx-auto mb-12 w-full text-center lg:mb-16">
        <div className="flex justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <h2 className="whitespace-nowrap font-normal leading-none tracking-[-0.02em] text-white text-[clamp(0.5625rem,calc(0.35rem+2.35vw),2.625rem)]">
            Smarter spend. Real-time control. One platform.
          </h2>
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[#DBDBDB] sm:text-base">
          Finance without friction. Control every dirham, empower every team, and
          scale without the baggage.
        </p>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-0 lg:rounded-l-[10px]">
        <nav
          className="w-full shrink-0 lg:w-[min(100%,320px)] lg:pr-0"
          aria-label="Platform views"
        >
          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:gap-0 lg:overflow-x-visible lg:pb-0" role="tablist">
            {TABS.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`${tab.id}-trigger`}
                  aria-controls={`${tab.id}-panel`}
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 rounded-[10px] px-5 py-4 text-left transition-colors duration-200 lg:w-full lg:rounded-r-none ${
                    isActive
                      ? "bg-[rgba(220,220,220,0.1)]"
                      : "hover:bg-white/4"
                  }`}
                >
                  <span className="block whitespace-nowrap text-base font-normal leading-snug text-white lg:whitespace-normal lg:text-lg">
                    {tab.title}
                  </span>
                  <span className="mt-1 hidden text-[10px] leading-[1.4] text-white/90 sm:text-xs sm:leading-relaxed lg:block">
                    {tab.description}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <div
          className="relative min-h-[280px] flex-1 overflow-hidden rounded-[10px] bg-[#F8FAFC] shadow-[0px_16px_20px_-4px_rgba(30,58,138,0.2),0px_6px_8px_-5px_rgba(30,58,138,0.2)] lg:min-h-[420px] "
          role="tabpanel"
          id={`${active.id}-panel`}
          aria-labelledby={`${active.id}-trigger`}
        >
          <div className="relative aspect-3/2 w-full">
            <Image
              key={active.imageSrc}
              src={active.imageSrc}
              alt={`Dashboard preview ${activeIndex + 1}`}
              fill
              className="object-cover object-top transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 70vw"
              priority={activeIndex === 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
