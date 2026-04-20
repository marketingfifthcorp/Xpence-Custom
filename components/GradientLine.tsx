type GradientLineProps = {
  className?: string;
};

export function GradientLine({ className = "" }: GradientLineProps) {
  return (
    <div className={`relative h-3 w-full max-w-3xl ${className}`}>
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-6 -translate-y-1/2 blur-md"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgb(139 92 246 / 0.6), rgb(52 211 153 / 0.5), rgb(250 204 21 / 0.5), rgb(59 130 246 / 0.6))",
        }}
        aria-hidden
      />
      <div
        className="relative mx-auto h-0.5 w-full max-w-2xl shadow-[0_0_12px_rgba(168,85,247,0.5)]"
        style={{
          background:
            "linear-gradient(90deg, rgb(139 92 246), rgb(52 211 153), rgb(250 204 21), rgb(59 130 246))",
        }}
        aria-hidden
      />
    </div>
  );
}
