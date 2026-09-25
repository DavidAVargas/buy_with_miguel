// Equal Housing Opportunity mark: house outline with an equals sign.
export default function EqualHousingIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3 2 13h3v16h22V13h3L16 3Zm8 23H8V12.2L16 6.5l8 5.7V26Z" />
      <path d="M11 15h10v2.5H11zM11 19.5h10V22H11z" />
    </svg>
  );
}
