type XpenceMarkProps = {
  className?: string;
  /** Fixed pixel size. Omit to fill parent (parent must define dimensions). */
  size?: number;
};

export function XpenceMark({ className = "", size }: XpenceMarkProps) {
  const fill = size === undefined;
  return (
    <svg
      width={fill ? "100%" : size}
      height={fill ? "100%" : size}
      viewBox="0 0 100 100"
      className={`shrink-0 text-white ${fill ? "h-full w-full" : ""} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform="translate(50 50) rotate(45)">
        <rect
          x="-10"
          y="-42"
          width="20"
          height="84"
          rx="4"
          fill="currentColor"
        />
      </g>
      <g transform="translate(50 50) rotate(-45)">
        <rect
          x="-10"
          y="-42"
          width="20"
          height="84"
          rx="4"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
