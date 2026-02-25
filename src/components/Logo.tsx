interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AJ Logo"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* A shape — left side */}
      <path
        d="M4 88L38 12h18L74 52H56l-8-18-22 54H4z"
        fill="url(#logo-gradient)"
      />
      {/* A crossbar / arrow cutout */}
      <path
        d="M30 62l10-24 10 24H30z"
        fill="#0B1020"
      />
      {/* J shape — right side */}
      <path
        d="M68 12h22v58c0 12-8 20-20 20h-8v-18h6c4 0 6-3 6-7V30H68V12z"
        fill="url(#logo-gradient)"
      />
      {/* Connection bridge between A and J */}
      <path
        d="M58 44h16v16H62L58 44z"
        fill="url(#logo-gradient)"
      />
    </svg>
  );
}
