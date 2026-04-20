import Link from "next/link";

type Testimonial = {
  greeting: string;
  senderName: string;
  message: string;
  ctaLabel: string;
  ctaHref: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    greeting: "Howdy, mulan_76!",
    senderName: "Daniel",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tempus massa. Cras in eros volutpat, sagittis nunc fermentum, placerat nisi. Mauris ut tellus libero. Nam ut vehicula massa, sit amet pellentesque mauris.",
    ctaLabel: "Reply to Message",
    ctaHref: "#",
  },
  {
    greeting: "Howdy, mulan_76!",
    senderName: "Daniel",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tempus massa. Cras in eros volutpat, sagittis nunc fermentum, placerat nisi. Mauris ut tellus libero. Nam ut vehicula massa, sit amet pellentesque mauris.",
    ctaLabel: "Reply to Message",
    ctaHref: "#",
  },
  {
    greeting: "Howdy, mulan_76!",
    senderName: "Daniel",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tempus massa. Cras in eros volutpat, sagittis nunc fermentum, placerat nisi. Mauris ut tellus libero. Nam ut vehicula massa, sit amet pellentesque mauris.",
    ctaLabel: "Reply to Message",
    ctaHref: "#",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex flex-col rounded-[30px] bg-white/10 p-6 backdrop-blur-sm sm:p-8">
      <h3 className="text-base font-semibold text-white sm:text-lg">
        {testimonial.greeting}
      </h3>

      <div className="my-4 h-px w-full bg-[#7065EF]/20" />

      <div className="flex gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-white" />

        <div className="flex flex-1 flex-col">
          <p className="text-sm font-semibold text-[#7065EF]">
            <span className="text-[#7065EF]">{testimonial.senderName}</span> just
            sent you a message!
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/90">
            {testimonial.message}
          </p>
        </div>
      </div>

      <Link
        href={testimonial.ctaHref}
        className="mt-6 inline-flex w-fit items-center rounded px-6 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:text-sm"
        style={{ backgroundColor: "#7065EF" }}
      >
        {testimonial.ctaLabel}
      </Link>
    </article>
  );
}

export function Testimonials() {
  return (
    <section
      className="flex items-center overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:min-h-dvh lg:px-8"
      style={{
        background:
          "linear-gradient(90deg, rgba(105, 38, 175, 0.64) -1%, #000000 55%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
