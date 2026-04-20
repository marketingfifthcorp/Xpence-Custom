"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type CardDef = {
  id: string;
  title: string;
  description: string;
  visual?: "cards" | "chains" | "rings" | "slider" | "globe";
};

const CARDS: CardDef[] = [
  {
    id: "corporate",
    title: "Smart corporate cards",
    description:
      "Issue physical and virtual Mastercards to any team member in minutes. Set individual spending limits and freeze any card instantly from the dashboard.",
    visual: "cards",
  },
  {
    id: "bookkeeping",
    title: "Automated Bookkeeping",
    description:
      "Transactions are automatically categorised and enriched with merchant data. Your accounting software stays up to date without manual data entry.",
    visual: "chains",
  },
  {
    id: "invoicing",
    title: "Invoicing & payments",
    description:
      "Create and send professional invoices, accept online payments, and track what's been paid — all within the same platform.",
    visual: "rings",
  },
  {
    id: "visibility",
    title: "Real-time spend visibility",
    description:
      "Every transaction appears in your dashboard the moment it happens. No more month-end surprises — know exactly where every dirham goes, as it's spent.",
    visual: "slider",
  },
  {
    id: "team",
    title: "Team spend controls",
    description: "Save, spend, and grow your cash with up to 4.36%† — from day one.",
    visual: "globe",
  },
];

const COLLAPSE_DELAY_MS = 300;

function VisualPlaceholder({
  visual,
  expanded,
}: {
  visual: CardDef["visual"];
  expanded?: boolean;
}) {
  if (visual === "slider") {
    return (
      <div className={`mt-auto space-y-3 pt-4 ${expanded ? "max-w-xl" : ""}`}>
        <div className="flex items-center gap-2">
          <div className="h-px w-4 border-t-2 border-white" />
          <div className="relative flex flex-1 items-center">
            <div className="h-0 w-full border-t-2 border-dashed border-white/80" />
            <div className="absolute left-8 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white">
              <span className="h-4 w-4 rounded-full bg-black" />
            </div>
          </div>
        </div>
        <p className="text-lg font-semibold text-white">Round 2</p>
        <p className="text-lg font-extralight text-white/90">
          Lorem Ipsum is simply dummy
        </p>
      </div>
    );
  }

  if (visual === "cards") {
    return expanded ? (
      <div className="pointer-events-none mt-auto flex flex-1 items-center justify-center pt-4">
        <div className="relative h-52 w-full max-w-md sm:h-64">
          <Image src="/images/card.png" alt="Corporate cards" fill className="object-contain" sizes="400px" />
        </div>
      </div>
    ) : (
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[65%] w-[90%] -translate-x-1/2">
        <Image src="/images/card.png" alt="Corporate cards" fill className="object-contain object-bottom" sizes="300px" />
      </div>
    );
  }

  if (visual === "chains") {
    return expanded ? (
      <div className="pointer-events-none mt-auto flex flex-1 items-center justify-center pt-4">
        <div className="relative h-52 w-full max-w-md sm:h-64">
          <Image src="/images/chain.png" alt="Automated bookkeeping" fill className="object-contain" sizes="400px" />
        </div>
      </div>
    ) : (
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[50%]">
        <Image src="/images/chain.png" alt="Automated bookkeeping" fill className="object-cover object-center" sizes="250px" />
      </div>
    );
  }

  if (visual === "rings") {
    return expanded ? (
      <div className="pointer-events-none mt-auto flex flex-1 items-center justify-center pt-4">
        <div className="relative h-52 w-full max-w-md sm:h-64">
          <Image src="/images/invoice.png" alt="Invoicing & payments" fill className="object-contain" sizes="400px" />
        </div>
      </div>
    ) : (
      <div className="pointer-events-none absolute -bottom-2 left-1/2 h-[65%] w-[85%] -translate-x-1/2">
        <Image src="/images/invoice.png" alt="Invoicing & payments" fill className="object-contain object-bottom" sizes="300px" />
      </div>
    );
  }

  if (visual === "globe") {
    return expanded ? (
      <div className="pointer-events-none mt-auto flex min-h-[280px] flex-1 items-center justify-center pt-4">
        <div className="relative h-64 w-full max-w-lg sm:h-80">
          <Image src="/images/globe.png" alt="Team spend controls" fill className="object-contain" sizes="500px" />
        </div>
      </div>
    ) : (
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[80%] w-[95%] -translate-x-1/2">
        <Image src="/images/globe.png" alt="Team spend controls" fill className="object-contain object-bottom" sizes="500px" />
      </div>
    );
  }

  return null;
}

function TileVisual({ visual, expanded }: { visual: CardDef["visual"]; expanded?: boolean }) {
  if (expanded) {
    return (
      <div className="flex min-h-[200px] flex-1 flex-col lg:min-h-[260px]">
        <VisualPlaceholder visual={visual} expanded />
      </div>
    );
  }
  return <VisualPlaceholder visual={visual} />;
}

function GridCard({
  card,
  isActive,
  isDimmed,
  onHover,
  className = "",
}: {
  card: CardDef;
  isActive: boolean;
  isDimmed: boolean;
  onHover: (id: string) => void;
  className?: string;
}) {
  return (
    <motion.article
      onMouseEnter={() => onHover(card.id)}
      onClick={() => onHover(card.id)}
      initial={false}
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        scale: isDimmed ? 0.98 : 1,
        filter: isDimmed ? "blur(2px)" : "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm md:p-7 ${className} ${isActive ? "invisible" : ""}`}
    >
      <h3 className="relative z-10 text-balance text-xl font-semibold leading-tight text-white md:text-2xl">
        {card.title}
      </h3>
      <p className="relative z-10 mt-3 max-w-prose text-pretty text-sm leading-relaxed text-zinc-200 md:text-base">
        {card.description}
      </p>
      <TileVisual visual={card.visual} />
    </motion.article>
  );
}

function ExpandedOverlay({
  card,
  cardRect,
  containerRect,
}: {
  card: CardDef;
  cardRect: DOMRect;
  containerRect: DOMRect;
}) {
  const startX = cardRect.left - containerRect.left;
  const startY = cardRect.top - containerRect.top;
  const startW = cardRect.width;
  const startH = cardRect.height;

  const endW = containerRect.width;
  const endH = containerRect.height;

  const scaleX = startW / endW;
  const scaleY = startH / endH;

  const originX = (startX / endW) * 100 + (scaleX * 100) / 2;
  const originY = (startY / endH) * 100 + (scaleY * 100) / 2;

  return (
    <motion.article
      initial={{
        opacity: 0.6,
        scale: Math.max(scaleX, scaleY),
        x: startX + startW / 2 - endW / 2,
        y: startY + startH / 2 - endH / 2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: Math.max(scaleX, scaleY),
        x: startX + startW / 2 - endW / 2,
        y: startY + startH / 2 - endH / 2,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 28,
        mass: 1,
        opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
      style={{ transformOrigin: `${originX}% ${originY}%` }}
      className="pointer-events-auto absolute inset-0 z-30 flex flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white/12 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-md md:p-10"
      role="region"
      aria-label={card.title}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {card.title}
      </h3>
      <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-200">
        {card.description}
      </p>
      <div className="mt-6 flex min-h-0 flex-1 flex-col">
        <TileVisual visual={card.visual} expanded />
      </div>
    </motion.article>
  );
}

export function ExpandingBento() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cardRects, setCardRects] = useState<Record<string, DOMRect>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const collapseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCollapseTimer = useCallback(() => {
    if (collapseTimerRef.current) {
      clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }
  }, []);

  const handleHover = useCallback(
    (id: string) => {
      clearCollapseTimer();

      const cardEl = cardRefs.current[id];
      if (cardEl) {
        setCardRects((prev) => ({ ...prev, [id]: cardEl.getBoundingClientRect() }));
      }
      setExpanded(id);
    },
    [clearCollapseTimer]
  );

  const handleLeave = useCallback(() => {
    clearCollapseTimer();
    collapseTimerRef.current = setTimeout(() => {
      setExpanded(null);
    }, COLLAPSE_DELAY_MS);
  }, [clearCollapseTimer]);

  const active = expanded ? CARDS.find((c) => c.id === expanded) : null;
  const containerRect = containerRef.current?.getBoundingClientRect();

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseLeave={handleLeave}
      onClick={() => { if (expanded) setExpanded(null); }}
    >
      <div className="grid gap-5 lg:grid-cols-[33%_25%_1fr] lg:gap-6" style={{ minHeight: "min(780px, 90vw)" }}>
        {/* Col 1 — Cards + Invoicing (50/50 split) */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <div
            ref={(el) => { cardRefs.current["corporate"] = el; }}
            className="min-h-[280px] flex-1"
          >
            <GridCard
              card={CARDS[0]}
              isActive={expanded === "corporate"}
              isDimmed={expanded !== null && expanded !== "corporate"}
              onHover={handleHover}
            />
          </div>
          <div
            ref={(el) => { cardRefs.current["invoicing"] = el; }}
            className="min-h-[280px] flex-1"
          >
            <GridCard
              card={CARDS[2]}
              isActive={expanded === "invoicing"}
              isDimmed={expanded !== null && expanded !== "invoicing"}
              onHover={handleHover}
            />
          </div>
        </div>

        {/* Col 2 — Bookkeeping + Visibility (50/50 split) */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <div
            ref={(el) => { cardRefs.current["bookkeeping"] = el; }}
            className="min-h-[280px] flex-1"
          >
            <GridCard
              card={CARDS[1]}
              isActive={expanded === "bookkeeping"}
              isDimmed={expanded !== null && expanded !== "bookkeeping"}
              onHover={handleHover}
            />
          </div>
          <div
            ref={(el) => { cardRefs.current["visibility"] = el; }}
            className="min-h-[280px] flex-1"
          >
            <GridCard
              card={CARDS[3]}
              isActive={expanded === "visibility"}
              isDimmed={expanded !== null && expanded !== "visibility"}
              onHover={handleHover}
            />
          </div>
        </div>

        {/* Col 3 — Heading (40%) + Globe (60%) */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <motion.div
            className="flex items-center lg:basis-[35%]"
            initial={false}
            animate={{
              opacity: expanded ? 0.2 : 1,
              filter: expanded ? "blur(3px)" : "blur(0px)",
            }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-1 lg:px-4">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white lg:text-[2.6rem] lg:leading-[1.1]">
                Know Where Every Penny Goes in Real Time
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-lg leading-snug text-white/70 lg:text-xl">
                From issuing your first card to reconciling hundreds of transactions — Xpence
                covers the full spend lifecycle in one platform built for MENA businesses.
              </p>
            </div>
          </motion.div>

          <div
            ref={(el) => { cardRefs.current["team"] = el; }}
            className="min-h-[320px] lg:basis-[65%]"
          >
            <GridCard
              card={CARDS[4]}
              isActive={expanded === "team"}
              isDimmed={expanded !== null && expanded !== "team"}
              onHover={handleHover}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && containerRect && cardRects[active.id] ? (
          <ExpandedOverlay
            key={active.id}
            card={active}
            cardRect={cardRects[active.id]}
            containerRect={containerRect}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
