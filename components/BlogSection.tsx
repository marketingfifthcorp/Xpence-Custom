import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  imageSrc: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};


const BLOG_POSTS: BlogPost[] = [
  {
    imageSrc: "/images/talk-1.png",
    date: "Xpence - 1 September 24",
    title: "Automated Bookkeeping: More Time for Business, Less Time on Numbers",
    excerpt:
      "Managing finances can be one of the most time-consuming aspects of running a business, especially for small business owners and entrepreneurs.",
    href: "#",
  },
  {
    imageSrc: "/images/talk-2.png",
    date: "Xpence - 1 September 24",
    title: "How to Simplify Corporate Travel Management",
    excerpt:
      "Planning an out-of-town or overseas trip for yourself is a complex process. Planning one for your entire team is not only complex but also draining and costly if not managed carefully. While travel agencies promise to simplify things, their fees can strain the company's budget and often create more problems than they solve.",
    href: "#",
  },
  {
    imageSrc: "/images/talk-3.png",
    date: "Xpence - 11 August 24",
    title: "Corporate Expense Cards: A Corporate-Friendly Cost Management Solution",
    excerpt:
      "Digitalisation has revolutionised the way banks and businesses operate, particularly in managing payments. This transformation has significantly enhanced security and convenience. Among the innovations in payment technologies, corporate credit cards have become ubiquitous, offering tremendous benefits. However, an equally important yet often overlooked innovation is the virtual Visa card. This article explores how virtual visa cards can redefine cost control, security, and streamline expenses.",
    href: "#",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href}
      className="group flex flex-col overflow-hidden rounded-[20px] bg-white/15 transition-transform hover:scale-[1.02]"
    >
      <div className="relative aspect-3/2 w-full overflow-hidden rounded-t-[25px] bg-violet-900/50">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col px-8 py-8 sm:px-10 sm:py-10">
        <span className="text-sm capitalize text-[#6926AF] sm:text-base">
          {post.date}
        </span>

        <h3 className="mt-4 text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl lg:leading-[1.4]">
          {post.title}
        </h3>

        <p className="mt-4 text-sm font-light leading-relaxed text-white/90 sm:text-base lg:text-lg lg:leading-[1.6]">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

export function BlogSection() {
  return (
    <section
      className="overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(105, 38, 175, 0.53) 0%, #080808 42%)",
      }}
    >
      <div className="mx-auto max-w-[1600px]">
        <header className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s talk business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/90 sm:text-lg lg:text-2xl">
            Ideas to help you launch and scale your business.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
