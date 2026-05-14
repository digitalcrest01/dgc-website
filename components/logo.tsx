type LogoProps = {
  className?: string;
  variant?: 'full' | 'mark';
  monochrome?: boolean;
};

export function Logo({ className, variant = 'mark', monochrome = false }: LogoProps) {
  const navy = monochrome ? 'currentColor' : '#0E1F40';
  const gold = monochrome ? 'currentColor' : '#C3A463';

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 64 72"
        className={className}
        aria-hidden="true"
        role="img"
      >
        <path
          d="M2 6 L32 2 L62 6 L62 38 C62 54 48 66 32 70 C16 66 2 54 2 38 Z"
          fill={navy}
        />
        <path
          d="M5 9 L32 5 L59 9 L59 38 C59 52 47 63 32 67 C17 63 5 52 5 38 Z"
          fill="none"
          stroke={gold}
          strokeWidth="1.1"
        />
        <path d="M32 18 L46 46 L18 46 Z" fill={gold} />
        <rect x="29.2" y="22" width="5.6" height="5.6" transform="rotate(45 32 24.8)" fill={navy} />
        <rect x="22" y="40" width="20" height="2.2" fill={navy} />
        <rect x="25" y="44" width="14" height="1.6" fill={navy} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 280 80" className={className} aria-label="Digital Crest Consulting" role="img">
      <g>
        <path
          d="M2 8 L32 4 L62 8 L62 40 C62 56 48 68 32 72 C16 68 2 56 2 40 Z"
          fill={navy}
        />
        <path
          d="M5 11 L32 7 L59 11 L59 40 C59 54 47 65 32 69 C17 65 5 54 5 40 Z"
          fill="none"
          stroke={gold}
          strokeWidth="1.1"
        />
        <path d="M32 20 L46 48 L18 48 Z" fill={gold} />
        <rect x="29.2" y="24" width="5.6" height="5.6" transform="rotate(45 32 26.8)" fill={navy} />
        <rect x="22" y="42" width="20" height="2.2" fill={navy} />
        <rect x="25" y="46" width="14" height="1.6" fill={navy} />
      </g>
      <g transform="translate(78,0)" fontFamily="var(--font-grotesk), Space Grotesk, sans-serif">
        <text x="0" y="46" fontSize="30" fontWeight="700" fill={navy} letterSpacing="-0.5">
          Digital
        </text>
        <text x="92" y="46" fontSize="30" fontWeight="700" fill={gold} letterSpacing="-0.5">
          Crest
        </text>
        <text
          x="0"
          y="66"
          fontSize="10"
          letterSpacing="3"
          fill={navy}
          opacity="0.7"
          fontWeight="500"
        >
          CONSULTING · LIMITED
        </text>
      </g>
    </svg>
  );
}
