import Image from "next/image";

export function ContactCTA() {
  return (
    <section className="relative flex min-h-[700px] w-full flex-col lg:min-h-[889px] lg:flex-row">
      {/* Left side - Form */}
      <div
        className="flex w-full flex-col justify-center px-6 py-16 sm:px-12 lg:w-1/2 lg:px-20 lg:py-24 xl:px-28"
        style={{
          background:
            "radial-gradient(103.88% 369.35% at 0% 0%, #000000 0%, #6926AF 100%)",
        }}
      >
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.4rem] xl:leading-[1.3]">
          Get started with Xpence today
        </h2>

        <p className="mt-4 text-base text-white/90 sm:text-lg lg:text-xl xl:text-2xl">
          Sign up today and say goodbye to expense reports
        </p>

        <form className="mt-10 flex flex-col gap-6 lg:mt-14 lg:gap-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="text-base font-semibold text-white lg:text-lg xl:text-xl"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-2 border-b border-white bg-transparent py-3 text-white placeholder:text-white/50 focus:border-white/80 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-base font-semibold text-white lg:text-lg xl:text-xl"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 border-b border-white bg-transparent py-3 text-white placeholder:text-white/50 focus:border-white/80 focus:outline-none"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-base font-semibold text-white lg:text-lg xl:text-xl"
            >
              Message Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-2 border-b border-white bg-transparent py-3 text-white placeholder:text-white/50 focus:border-white/80 focus:outline-none"
              placeholder="How can we help?"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-base font-semibold text-white lg:text-lg xl:text-xl"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="mt-2 resize-none border-b border-white bg-transparent py-3 text-white placeholder:text-white/50 focus:border-white/80 focus:outline-none"
              placeholder="Tell us about your needs..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-fit rounded-full bg-black px-10 py-4 text-base font-medium text-white transition-opacity hover:opacity-90 sm:text-lg lg:mt-6 lg:px-12 lg:py-5 lg:text-xl"
          >
            Get Started
          </button>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="relative min-h-[300px] w-full lg:min-h-0 lg:w-1/2">
        <Image
           src="/images/contact.png"
          alt="Person using Xpence card for payment"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
