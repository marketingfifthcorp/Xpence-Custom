import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Corporate Cards", href: "#" },
      { label: "Teams", href: "#" },
      { label: "Automated Bookkeeping", href: "#" },
      { label: "Virtual Cards", href: "#" },
      { label: "Invoicing", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Freelancers", href: "#" },
      { label: "Startups", href: "#" },
      { label: "SMEs", href: "#" },
      { label: "Corporates", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Perks", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function XpenceColorLogo() {
  return (
    <svg
      viewBox="0 0 291 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-auto"
    >
      <g clipPath="url(#clip0_footer)">
        <path
          d="M19.0688 6.97876H5.82963C5.58671 6.97876 5.40452 7.28241 5.58671 7.52533L12.1456 15.9061C12.2063 15.9669 12.3278 15.9669 12.3885 15.9061L13.7853 14.1449C13.846 14.0842 13.846 14.0235 13.7853 13.9627L10.3237 9.4687C10.2629 9.34724 10.3237 9.22578 10.4451 9.22578H17.5506C17.6113 9.22578 17.672 9.22578 17.672 9.16505L19.1903 7.22168C19.3118 7.16095 19.1903 6.97876 19.0688 6.97876Z"
          fill="#03DAC5"
        />
        <path
          d="M28.1178 18.093L26.721 19.8542C26.721 19.915 26.721 19.9757 26.721 20.0364L30.2433 24.5305C30.3041 24.6519 30.2433 24.7734 30.1219 24.7734H22.4091C22.2877 24.7734 22.2269 24.7127 22.1662 24.6519L17.0041 18.093C16.9434 18.0323 16.8219 18.0323 16.7612 18.093L15.3644 19.8542C15.3037 19.915 15.3037 19.9757 15.3644 20.0364L20.7087 26.8989C20.7694 26.9597 20.8909 27.0204 20.9516 27.0204H34.6159C34.8588 27.0204 35.041 26.7168 34.8588 26.4738L28.3607 18.093C28.3 17.9716 28.1785 17.9716 28.1178 18.093Z"
          fill="#03DAC5"
        />
        <path
          d="M22.4697 10.8051L21.0729 12.5662C21.0122 12.627 21.0122 12.6877 21.0729 12.7484L23.5021 15.9064C23.5628 15.9671 23.6843 15.9671 23.745 15.9064L25.1418 14.1452C25.2026 14.0845 25.2026 14.0238 25.1418 13.963L22.7126 10.8051C22.6519 10.7443 22.5304 10.7443 22.4697 10.8051Z"
          fill="#03DAC5"
        />
        <path
          d="M25.9923 0.420533L0.364053 33.1542C0.181862 33.3364 0.364053 33.7008 0.606974 33.7008H14.332C14.4535 33.7008 14.5142 33.64 14.575 33.5793L19.4941 27.3241C19.5548 27.2633 19.5548 27.2026 19.4941 27.1419L18.0973 25.3807C18.0366 25.32 17.9151 25.32 17.8544 25.3807L13.1782 31.393C13.1174 31.4537 12.996 31.5145 12.9352 31.5145H5.22248C5.10102 31.5145 5.04029 31.3323 5.10102 31.2715L27.3891 2.66756C27.4498 2.60683 27.5712 2.54609 27.632 2.54609H35.3447C35.4662 2.54609 35.5269 2.72829 35.4662 2.78902L21.0731 21.1903C21.0124 21.251 21.0124 21.3118 21.0731 21.3725L22.4699 23.1337C22.5306 23.1944 22.6521 23.1944 22.7128 23.1337L40.1424 0.845645C40.3246 0.663454 40.1424 0.299072 39.8995 0.299072H26.2352C26.1137 0.299072 26.053 0.359803 25.9923 0.420533Z"
          fill="#6200EE"
        />
        <path
          d="M121.765 12.3844V10.441C121.765 10.3803 121.704 10.2588 121.582 10.2588H111.926C111.866 10.2588 111.744 10.3195 111.744 10.441V23.498C111.744 23.5587 111.805 23.6802 111.926 23.6802H121.582C121.643 23.6802 121.765 23.6195 121.765 23.498V21.5546C121.765 21.4939 121.704 21.3724 121.582 21.3724H114.477C114.416 21.3724 114.295 21.3117 114.295 21.1903V18.1537C114.295 18.093 114.356 17.9715 114.477 17.9715H120.793C120.854 17.9715 120.975 17.9108 120.975 17.7894V15.846C120.975 15.7853 120.914 15.6638 120.793 15.6638H114.477C114.416 15.6638 114.295 15.6031 114.295 15.4816V12.7487C114.295 12.688 114.356 12.5665 114.477 12.5665H121.582C121.704 12.5665 121.765 12.5058 121.765 12.3844Z"
          fill="#6200EE"
        />
        <path
          d="M80.5283 12.3844V10.441C80.5283 10.3803 80.4676 10.2588 80.3461 10.2588H70.69C70.6293 10.2588 70.5078 10.3195 70.5078 10.441V23.498C70.5078 23.5587 70.5685 23.6802 70.69 23.6802H80.3461C80.4069 23.6802 80.5283 23.6195 80.5283 23.498V21.5546C80.5283 21.4939 80.4676 21.3724 80.3461 21.3724H73.2407C73.1799 21.3724 73.0585 21.3117 73.0585 21.1903V18.1537C73.0585 18.093 73.1192 17.9715 73.2407 17.9715H79.5566C79.6174 17.9715 79.7388 17.9108 79.7388 17.7894V15.846C79.7388 15.7853 79.6781 15.6638 79.5566 15.6638H73.2407C73.1799 15.6638 73.0585 15.6031 73.0585 15.4816V12.7487C73.0585 12.688 73.1192 12.5665 73.2407 12.5665H80.3461C80.4676 12.5665 80.5283 12.5058 80.5283 12.3844Z"
          fill="#6200EE"
        />
        <path
          d="M92.1885 10.5015V19.4289L85.0831 10.3801C85.0224 10.3193 85.0223 10.3193 84.9616 10.3193H83.1397C83.079 10.3193 82.9575 10.3801 82.9575 10.5015V23.5586C82.9575 23.6193 83.0182 23.7407 83.1397 23.7407H85.326C85.3867 23.7407 85.5082 23.68 85.5082 23.5586V14.5705L92.6136 23.6193C92.6744 23.68 92.6744 23.68 92.7351 23.68H94.557C94.6177 23.68 94.7392 23.6193 94.7392 23.4978V10.5015C94.7392 10.4408 94.6785 10.3193 94.557 10.3193H92.31C92.2493 10.3193 92.1885 10.3801 92.1885 10.5015Z"
          fill="#6200EE"
        />
        <path
          d="M68.0781 15.1778C67.8959 17.607 65.7704 19.4289 63.3412 19.4289H60.3046C60.2439 19.4289 60.1224 19.4896 60.1224 19.6111V23.4978C60.1224 23.5585 60.0617 23.68 59.9403 23.68H57.754C57.6932 23.68 57.5718 23.6193 57.5718 23.4978V10.5015C57.5718 10.4408 57.6325 10.3193 57.754 10.3193H63.4019C66.1348 10.3193 68.2603 12.5056 68.0781 15.1778ZM63.159 12.5664H60.3654C60.3046 12.5664 60.1832 12.6271 60.1832 12.7485V17.0604C60.1832 17.1211 60.2439 17.2426 60.3654 17.2426H63.2804C64.6165 17.2426 65.7096 16.0887 65.5882 14.6919C65.4667 13.4773 64.3736 12.5664 63.159 12.5664Z"
          fill="#6200EE"
        />
        <path
          d="M104.092 21.6763C101.662 21.6763 99.6584 19.6115 99.6584 17.0001C99.6584 14.4494 101.662 12.3239 104.092 12.3239C105.549 12.3239 106.825 13.0526 107.675 14.2672C107.736 14.328 107.857 14.3887 107.918 14.2672L109.254 12.5668C109.315 12.506 109.315 12.3846 109.254 12.3846C107.918 10.9271 106.035 10.0161 103.91 10.0768C100.326 10.1983 97.3506 13.1134 97.2292 16.6964C97.047 20.6439 100.205 23.8626 104.152 23.8626C106.217 23.8626 108.039 22.9517 109.315 21.4941C109.375 21.4334 109.375 21.3727 109.315 21.3119L107.978 19.6115C107.918 19.5508 107.796 19.5508 107.736 19.6115C106.885 20.8868 105.549 21.6763 104.092 21.6763Z"
          fill="#6200EE"
        />
        <path
          d="M50.0415 16.8782L54.9606 10.5623C55.0213 10.4408 54.9606 10.3193 54.8391 10.3193H52.1063C52.0456 10.3193 51.9848 10.3193 51.9848 10.3801L48.5232 14.8134C48.4625 14.8741 48.341 14.8741 48.2803 14.8134L44.8186 10.3801C44.7579 10.3193 44.7579 10.3193 44.6972 10.3193H41.9036C41.7821 10.3193 41.7214 10.5015 41.7821 10.5623L46.762 16.8782C46.8227 16.9389 46.8227 16.9997 46.762 17.0604L41.8429 23.3764C41.7821 23.4978 41.8429 23.6193 41.9643 23.6193H44.6972C44.7579 23.6193 44.8186 23.6193 44.8186 23.5586L48.2803 19.1252C48.341 19.0645 48.4625 19.0645 48.5232 19.1252L51.9848 23.5586C52.0456 23.6193 52.0456 23.6193 52.1063 23.6193H54.8391C54.9606 23.6193 55.0213 23.4371 54.9606 23.3764L50.0415 17.0604C49.9807 17.0604 49.9807 16.9389 50.0415 16.8782Z"
          fill="#6200EE"
        />
      </g>
      <defs>
        <clipPath id="clip0_footer">
          <rect width="290.74" height="81" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function UAEFlag() {
  return (
    <svg viewBox="0 0 40 24" fill="none" className="h-5 w-auto">
      <rect width="40" height="8" fill="#00732F" />
      <rect y="8" width="40" height="8" fill="#FFFFFF" />
      <rect y="16" width="40" height="8" fill="#000000" />
      <rect width="8" height="24" fill="#FF0000" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #3B3B3B 100%)",
      }}
    >
      {/* Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(217, 217, 217, 0.12)" }}
        aria-hidden
      />

      {/* Background X logo watermark */}
      <div className="pointer-events-none absolute -top-32 right-0 w-[60%] opacity-[0.03]">
        <svg viewBox="0 0 40 34" fill="currentColor" className="w-full text-white">
          <path d="M19.0688 6.97876H5.82963C5.58671 6.97876 5.40452 7.28241 5.58671 7.52533L12.1456 15.9061C12.2063 15.9669 12.3278 15.9669 12.3885 15.9061L13.7853 14.1449C13.846 14.0842 13.846 14.0235 13.7853 13.9627L10.3237 9.4687C10.2629 9.34724 10.3237 9.22578 10.4451 9.22578H17.5506C17.6113 9.22578 17.672 9.22578 17.672 9.16505L19.1903 7.22168C19.3118 7.16095 19.1903 6.97876 19.0688 6.97876Z" />
          <path d="M28.1178 18.093L26.721 19.8542C26.721 19.915 26.721 19.9757 26.721 20.0364L30.2433 24.5305C30.3041 24.6519 30.2433 24.7734 30.1219 24.7734H22.4091C22.2877 24.7734 22.2269 24.7127 22.1662 24.6519L17.0041 18.093C16.9434 18.0323 16.8219 18.0323 16.7612 18.093L15.3644 19.8542C15.3037 19.915 15.3037 19.9757 15.3644 20.0364L20.7087 26.8989C20.7694 26.9597 20.8909 27.0204 20.9516 27.0204H34.6159C34.8588 27.0204 35.041 26.7168 34.8588 26.4738L28.3607 18.093C28.3 17.9716 28.1785 17.9716 28.1178 18.093Z" />
          <path d="M22.4697 10.8051L21.0729 12.5662C21.0122 12.627 21.0122 12.6877 21.0729 12.7484L23.5021 15.9064C23.5628 15.9671 23.6843 15.9671 23.745 15.9064L25.1418 14.1452C25.2026 14.0845 25.2026 14.0238 25.1418 13.963L22.7126 10.8051C22.6519 10.7443 22.5304 10.7443 22.4697 10.8051Z" />
          <path d="M25.9923 0.420533L0.364053 33.1542C0.181862 33.3364 0.364053 33.7008 0.606974 33.7008H14.332C14.4535 33.7008 14.5142 33.64 14.575 33.5793L19.4941 27.3241C19.5548 27.2633 19.5548 27.2026 19.4941 27.1419L18.0973 25.3807C18.0366 25.32 17.9151 25.32 17.8544 25.3807L13.1782 31.393C13.1174 31.4537 12.996 31.5145 12.9352 31.5145H5.22248C5.10102 31.5145 5.04029 31.3323 5.10102 31.2715L27.3891 2.66756C27.4498 2.60683 27.5712 2.54609 27.632 2.54609H35.3447C35.4662 2.54609 35.5269 2.72829 35.4662 2.78902L21.0731 21.1903C21.0124 21.251 21.0124 21.3118 21.0731 21.3725L22.4699 23.1337C22.5306 23.1944 22.6521 23.1944 22.7128 23.1337L40.1424 0.845645C40.3246 0.663454 40.1424 0.299072 39.8995 0.299072H26.2352C26.1137 0.299072 26.053 0.359803 25.9923 0.420533Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-12 lg:px-10 lg:py-16">
        {/* Top Section: Logo and Language */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/" className="block">
            <Image
              src="/logo.svg"
              alt="Xpence"
              width={290}
              height={81}
              className="h-16 w-auto"
            />
          </Link>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
          >
            <UAEFlag />
            <span className="text-sm text-white">English</span>
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:gap-8">
          {/* Product Column */}
          <div>
            <h3 className="mb-5 text-2xl font-bold text-white lg:text-3xl">
              {footerLinks.product.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-lg font-light text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="mb-5 text-2xl font-bold text-white lg:text-3xl">
              {footerLinks.solutions.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-lg font-light text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-5 text-2xl font-bold text-white lg:text-3xl">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-lg font-light text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-5 text-2xl font-bold text-white">Contact</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-white">Support</h4>
                <a
                  href="mailto:xpense@gmail.com"
                  className="text-lg font-light text-white/90 transition-colors hover:text-white"
                >
                  xpense@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Contact Us</h4>
                <a
                  href="tel:+440000000"
                  className="text-lg font-light text-white/90 transition-colors hover:text-white"
                >
                  +44(0000000)
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:max-w-sm">
            <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-white lg:text-2xl">
              Subscribe to our newsletter
            </h3>
            <p className="mb-4 text-lg font-light text-white/90">
              Get our latest news and products.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-xpence px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Address and Social Links Section */}
        <div className="grid gap-10 border-b border-white/10 py-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="max-w-xs text-xl font-light leading-relaxed text-white">
                WeWork Hub71, Al Khatem Tower, ADGM square, Abu Dhabi, UAE
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                Connect with us
              </h4>
              <p className="mb-4 text-lg font-light text-white/90">
                Share your Xpence experience.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="flex flex-wrap items-center justify-between gap-8 border-b border-white/10 py-10">
          {/* VISA Logo */}
          <div className="flex items-center">
            <svg viewBox="0 0 145 48" className="h-12 w-auto" fill="white">
              <text x="0" y="36" fontSize="42" fontWeight="bold" fontFamily="Arial">
                VISA
              </text>
            </svg>
          </div>

          {/* PCI Logo */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 items-center rounded bg-[#02797E] px-4">
              <span className="text-2xl font-bold text-white">pci</span>
            </div>
            <div className="text-xs leading-tight text-white/80">
              <span className="font-medium">Security</span>
              <br />
              <span>Standards Council</span>
            </div>
          </div>

          {/* Microsoft for Startups */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
              <rect x="1" y="1" width="10" height="10" fill="#F25022" />
              <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
              <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
              <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
            </svg>
            <div className="text-sm text-white">
              <span className="font-medium">Microsoft</span>
              <br />
              <span className="text-white/80">for Startups</span>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-8">
          <div className="flex flex-wrap gap-6 lg:gap-12">
            <Link
              href="#"
              className="text-lg font-light text-white transition-colors hover:text-white/80"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className="text-lg font-light text-white transition-colors hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-lg font-light text-white transition-colors hover:text-white/80"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="#"
              className="text-lg font-light text-white transition-colors hover:text-white/80"
            >
              Prohibited Businesses
            </Link>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="flex flex-col items-start justify-between gap-8 pt-4 lg:flex-row lg:items-end">
          <div className="max-w-4xl space-y-3">
            <p className="text-sm font-light leading-relaxed text-white/80">
              The Xpence card is issued by Mashreqbank PSC, pursuant to license by Visa.
              Visa is a registered trademark of Visa Inc. Nymcard Payment Services LLC is
              authorised by the Central Bank of The UAE, holding the Retail Payment
              Services and Card Schemes license in accordance with the Decretal Federal
              Law No. (14) of 2018 Regarding the Central Bank &amp; Organization of
              Financial Institutions and Activities, and Regulatory Framework.
            </p>
            <p className="text-sm font-light text-white/80">
              Copyright &copy; 2024, Xpence, the Xpence logo, this website and all images
              are the copyright of Xpence Global Holdings Ltd, and may not be used or
              reproduced without the consent of the owner.
            </p>
          </div>
          <div className="shrink-0">
            <XpenceColorLogo />
          </div>
        </div>
      </div>
    </footer>
  );
}
