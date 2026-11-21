export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 28 L15 5 L24 23 M19 28 L30 5 L41 28 L48 13 L56 28"
      pathLength={1}
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
