import {
  Activity,
  Box,
  CircleCheck,
  Cog,
  GitCommit,
  KeyRound,
  Rocket,
  ScanSearch,
  type LucideIcon,
} from 'lucide-react';

type Status = 'ok' | 'active' | 'queued';

const stages: {
  code: string;
  label: string;
  icon: LucideIcon;
  status: Status;
  detail: string;
}[] = [
  { code: '01', label: 'Commit', icon: GitCommit, status: 'ok', detail: 'signed · 38a6f9c' },
  { code: '02', label: 'Build', icon: Box, status: 'ok', detail: 'oidc · 42s' },
  { code: '03', label: 'Scan', icon: ScanSearch, status: 'active', detail: 'sast + dast' },
  { code: '04', label: 'Sign', icon: KeyRound, status: 'queued', detail: 'cosign · keyless' },
  { code: '05', label: 'Deploy', icon: Rocket, status: 'queued', detail: 'eu-west-2' },
  { code: '06', label: 'Observe', icon: Activity, status: 'queued', detail: 'sentinel · ocsf' },
];

const logs: { t: string; src: string; msg: string; tag: string }[] = [
  { t: '12:04:21', src: 'pipeline', msg: 'build #1284 passed', tag: 'slsa-3' },
  { t: '12:04:23', src: 'sbom', msg: 'cyclonedx diff · 0 new', tag: 'clean' },
  { t: '12:04:25', src: 'cosign', msg: 'keyless oidc sign ok', tag: 'signed' },
  { t: '12:04:27', src: 'trivy', msg: '0 high · 2 medium triaged', tag: 'pass' },
  { t: '12:04:30', src: 'deploy', msg: 'staging gate open', tag: 'ready' },
  { t: '12:04:33', src: 'config', msg: 'guardrails active · drift 0', tag: 'ok' },
  { t: '12:04:36', src: 'detect', msg: '412 sigma rules synced', tag: 'live' },
  { t: '12:04:39', src: 'identity', msg: 'jit role revoked', tag: 'ok' },
  { t: '12:04:42', src: 'evidence', msg: 'soc2 cc6.1 collected', tag: 'logged' },
  { t: '12:04:45', src: 'kms', msg: 'cmek rotated · 24h', tag: 'ok' },
];

const metrics = [
  { label: 'Mean time to detect', value: '4m 12s' },
  { label: 'Mean time to respond', value: '8m 03s' },
  { label: 'ATT&CK coverage', value: '94%' },
  { label: 'Signed releases', value: '100%' },
];

export function HeroPipeline() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-navy/10 blur-3xl"
      />
      <div className="overflow-hidden rounded-2xl border border-cream-100/15 bg-ink-700 text-cream-100 shadow-2xl shadow-black/30">
        <Header />
        <Pipeline />
        <Stream />
        <Metrics />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-cream-100/10 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-cream-100/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream-100/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold/80" />
        </span>
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-100/55">
          dgc.engage · automation
        </span>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cream-100/55">
          <Cog className="h-3 w-3 text-gold/80" />
          build #1284
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cream-100/55">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-gold" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          live · gmt
        </span>
      </div>
    </div>
  );
}

function Pipeline() {
  return (
    <div className="relative px-4 pb-6 pt-5 sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
          Engagement pipeline
        </p>
        <p className="font-mono text-[10px] text-cream-100/40">06 stages</p>
      </div>

      <ol className="relative grid grid-cols-3 gap-2 sm:grid-cols-6">
        <div
          aria-hidden
          className="pointer-events-none absolute left-3 right-3 top-[44px] hidden h-px bg-cream-100/10 sm:block"
        />
        {stages.map((s) => (
          <Stage key={s.code} {...s} />
        ))}
      </ol>
    </div>
  );
}

function Stage({
  code,
  label,
  icon: Icon,
  status,
  detail,
}: {
  code: string;
  label: string;
  icon: LucideIcon;
  status: Status;
  detail: string;
}) {
  const isActive = status === 'active';
  const isOk = status === 'ok';

  return (
    <li className="relative flex flex-col items-start">
      <div
        className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-lg border ${
          isActive
            ? 'border-gold/60 bg-ink-600 text-gold shadow-[0_0_0_4px_rgba(210,181,118,0.08)]'
            : isOk
              ? 'border-cream-100/15 bg-ink-600 text-cream-100'
              : 'border-cream-100/10 bg-ink-700 text-cream-100/45'
        }`}
      >
        <Icon className="h-4 w-4" />
        {isActive && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-lg ring-1 ring-gold/40 animate-pulse-soft"
          />
        )}
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-cream-100/45">
          {code}
        </span>
        <span className="text-[12px] font-semibold text-cream-100">{label}</span>
      </div>

      <p className="mt-1 font-mono text-[10px] text-cream-100/55">{detail}</p>

      <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em]">
        {isOk && (
          <>
            <CircleCheck className="h-3 w-3 text-gold" />
            <span className="text-cream-100/70">ok</span>
          </>
        )}
        {isActive && (
          <>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-gold" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="text-gold">running</span>
          </>
        )}
        {status === 'queued' && (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-cream-100/20" />
            <span className="text-cream-100/40">queued</span>
          </>
        )}
      </div>

      {isActive && (
        <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-cream-100/10">
          <div
            className="h-full w-1/3 animate-shimmer rounded-full bg-[linear-gradient(90deg,transparent,rgba(210,181,118,0.9),transparent)] bg-[length:200%_100%]"
          />
        </div>
      )}
    </li>
  );
}

function Stream() {
  const ribbon = [...logs, ...logs];
  return (
    <div className="relative border-t border-cream-100/10">
      <div className="flex items-center justify-between border-b border-cream-100/10 px-4 py-2 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
          Event stream
        </p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cream-100/45">
          <span aria-hidden className="h-1.5 w-1.5 animate-blink rounded-full bg-gold" />
          tail · live
        </span>
      </div>
      <div
        aria-hidden
        className="relative h-40 overflow-hidden bg-ink-800 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <ul className="animate-scroll-up px-4 py-2 font-mono text-[11.5px] leading-7 sm:px-6">
          {ribbon.map((l, i) => (
            <li key={i} className="grid grid-cols-[72px_84px_1fr_auto] gap-3">
              <span className="text-cream-100/40">{l.t}</span>
              <span className="text-gold/80">{l.src}</span>
              <span className="truncate text-cream-100/85">{l.msg}</span>
              <span className="rounded-full border border-cream-100/10 px-1.5 py-px text-[9.5px] uppercase tracking-wider text-cream-100/65">
                {l.tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Metrics() {
  return (
    <div className="grid grid-cols-2 gap-px border-t border-cream-100/10 bg-cream-100/10 sm:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-ink-700 px-4 py-3 sm:px-5">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-cream-100/45">
            {m.label}
          </p>
          <p className="mt-1 font-display text-base font-semibold text-cream-100">{m.value}</p>
        </div>
      ))}
    </div>
  );
}
