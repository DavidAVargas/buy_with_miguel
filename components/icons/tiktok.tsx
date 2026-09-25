// Lucide doesn't ship a TikTok icon, so this mirrors its 24px stroke style.
export default function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3a5 5 0 0 0 5 5M16 3v12a5 5 0 1 1-5-5" />
    </svg>
  );
}
