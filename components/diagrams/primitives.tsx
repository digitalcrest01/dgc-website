import type { ReactNode } from 'react';

export const COLORS = {
  bg: '#F7F2E5',
  navy: '#0E1F40',
  navySoft: 'rgba(14,31,64,0.65)',
  line: 'rgba(14,31,64,0.35)',
  gold: '#C3A463',
  goldSoft: '#D2B576',
};

export function DiagramShell({
  title,
  caption,
  viewBox,
  children,
}: {
  title: string;
  caption?: string;
  viewBox: string;
  children: ReactNode;
}) {
  return (
    <figure
      className="overflow-hidden rounded-2xl shadow-glow-soft"
      style={{ background: '#F7F2E5', border: '1px solid rgba(210,181,118,0.35)' }}
    >
      <header
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: '1px solid rgba(14,31,64,0.12)' }}
      >
        <p
          className="font-mono text-[10px] uppercase tracking-[0.22em]"
          style={{ color: 'rgba(14,31,64,0.6)' }}
        >
          {title}
        </p>
        <p
          className="font-mono text-[10px]"
          style={{ color: 'rgba(14,31,64,0.45)' }}
        >
          {caption ?? 'architecture · v1'}
        </p>
      </header>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(14,31,64,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,31,64,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <svg
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          className="relative block h-auto w-full"
          fontFamily="var(--font-mono), ui-monospace, SFMono-Regular, monospace"
          fontSize="11"
        >
          {children}
        </svg>
      </div>
    </figure>
  );
}

export function Node({
  x,
  y,
  w = 150,
  h = 56,
  label,
  sub,
  accent = false,
  filled = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  accent?: boolean;
  filled?: boolean;
}) {
  const fill = filled ? COLORS.navy : '#FFFFFF';
  const textFill = filled ? '#F7F2E5' : COLORS.navy;
  const subFill = filled ? 'rgba(247,242,229,0.6)' : 'rgba(14,31,64,0.55)';
  const stroke = accent ? COLORS.gold : COLORS.line;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        ry={8}
        fill={fill}
        stroke={stroke}
        strokeWidth={accent ? 1.4 : 1}
      />
      <text x={x + 12} y={y + 22} fill={textFill} fontSize={12} fontWeight={600}>
        {label}
      </text>
      {sub && (
        <text x={x + 12} y={y + 40} fill={subFill} fontSize={10}>
          {sub}
        </text>
      )}
    </g>
  );
}

export function Cluster({
  x,
  y,
  w,
  h,
  label,
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        ry={12}
        fill="rgba(14,31,64,0.03)"
        stroke={COLORS.line}
        strokeWidth={1}
        strokeDasharray={dashed ? '4 4' : undefined}
      />
      <text
        x={x + 12}
        y={y + 16}
        fill={COLORS.gold}
        fontSize={9}
        fontWeight={700}
        letterSpacing="1.5"
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
}

export function Arrow({
  from,
  to,
  label,
  curve = 0,
  dashed = false,
}: {
  from: [number, number];
  to: [number, number];
  label?: string;
  curve?: number;
  dashed?: boolean;
}) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 + curve;
  const path =
    curve === 0
      ? `M ${x1} ${y1} L ${x2} ${y2}`
      : `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke={COLORS.line}
        strokeWidth={1.2}
        strokeDasharray={dashed ? '4 4' : undefined}
        markerEnd="url(#arrow)"
      />
      {label && (
        <text
          x={mx}
          y={my - 4}
          fill={COLORS.navySoft}
          fontSize={10}
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </g>
  );
}

export function Defs() {
  return (
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.line} />
      </marker>
    </defs>
  );
}

export function Pill({
  x,
  y,
  label,
}: {
  x: number;
  y: number;
  label: string;
}) {
  const w = Math.max(60, label.length * 6.2 + 16);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={18}
        rx={9}
        ry={9}
        fill="#FFFFFF"
        stroke={COLORS.gold}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + 12}
        fill={COLORS.navy}
        fontSize={9}
        fontWeight={600}
        textAnchor="middle"
        letterSpacing="0.5"
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
}
