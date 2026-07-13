export function BrandMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="14" fill="#0F766E" />
      <path
        d="M14.5 29.5a11 11 0 1 1 19 0"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <path
        d="m24 25 6-5"
        stroke="#FDBA74"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
      <circle cx="24" cy="25" r="2.75" fill="#FDBA74" />
      <path
        d="M16 34h16"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
    </svg>
  );
}
