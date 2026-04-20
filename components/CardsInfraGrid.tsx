import Image from "next/image";

type CardType = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const CARD_TYPES: CardType[] = [
  {
    title: "Physical cards",
    description:
      "Spend anywhere. Stay in control. Use globally across terminals, ATMs, and contactless — with limits and rules always in place.",
    imageSrc: "/images/card.png",
    imageAlt: "Physical corporate card",
  },
  {
    title: "Single-use cards",
    description:
      "One payment. Sum set. Generate a one-click link a disposable virtual card that expires after use. Perfect for vendors.",
    imageSrc: "/images/chain.png",
    imageAlt: "Single-use virtual card",
  },
  {
    title: "Travel cards",
    description:
      "Built for teams on the move, budget-capped, set limits in one place. Track spend across flights, hotels, and expenses — automatically.",
    imageSrc: "/images/globe.png",
    imageAlt: "Travel card with global coverage",
  },
  {
    title: "Virtual cards",
    description:
      "Create, use, freeze, instantly. Spin up cards for tools, brands, or subscriptions to merchants — no delays, no dependencies.",
    imageSrc: "/images/slot.png",
    imageAlt: "Virtual card stack",
  },
  {
    title: "Team cards",
    description:
      "Fine-tune who's allowed spending controls. Equip cards to teams with full visibility — across balances, limits, and full visibility — all in one team dashboard.",
    imageSrc: "/images/card-2.png",
    imageAlt: "Team spend cards",
  },
  {
    title: "Controlled cards",
    description:
      "Policy cards that spend the way you want. Set blocked category, time, or location restrictions — every card follows policy.",
    imageSrc: "/images/globe.png",
    imageAlt: "Controlled policy card",
  },
];

function CardTypeCard({ card }: { card: CardType }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8">
      {/* Image */}
      <div className="relative mb-5 h-36 w-full overflow-hidden rounded-xl bg-white/5">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-base font-semibold text-white">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{card.description}</p>
    </article>
  );
}

export function CardsInfraGrid() {
  return (
    <section
      className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, rgba(105,38,175,0.45) 50%, #000000 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-[2.5rem]">
            Not just cards. Smart spend infrastructure.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base text-white/65 sm:text-lg">
            From team cards to one-time vendor payments, Xpence gives you the right
            card for every purpose — with control built in.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {CARD_TYPES.map((card) => (
            <CardTypeCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
