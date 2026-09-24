import { useEffect, useRef, useState } from "react";

interface NavTiming {
  ttfb: number | null;
  dcl: number | null;
  load: number | null;
}

function readNavigationTiming(): NavTiming {
  if (typeof performance === "undefined" || !("getEntriesByType" in performance)) {
    return { ttfb: null, dcl: null, load: null };
  }
  const entries = performance.getEntriesByType("navigation");
  const nav = entries[0] as PerformanceNavigationTiming | undefined;
  if (!nav) return { ttfb: null, dcl: null, load: null };
  return {
    ttfb: nav.responseStart > 0 ? nav.responseStart - nav.fetchStart : null,
    dcl: nav.domContentLoadedEventStart > 0 ? nav.domContentLoadedEventStart : null,
    load: nav.loadEventStart > 0 ? nav.loadEventStart : null,
  };
}

interface TraceRow {
  label: string;
  description: string;
  value: number | null;
  unit: string;
  live?: boolean;
}

export function RequestTrace() {
  const metricId = (label: string) => `trace-${label.toLowerCase().replace(/\s+/g, "-")}-tip`;
  const [nav] = useState<NavTiming>(readNavigationTiming);
  const [lcp, setLcp] = useState<number | null>(null);
  const [cls, setCls] = useState<number | null>(null);
  const clsSum = useRef(0);
  const gotCls = useRef(false);

  useEffect(() => {
    if (typeof PerformanceObserver === "undefined") return;
    let cancelled = false;

    try {
      const paint = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length && !cancelled) {
          setLcp(entries[entries.length - 1].startTime);
        }
      });
      paint.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      /* LCP unsupported */
    }

    try {
      const layout = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          clsSum.current += (entry as unknown as { value: number }).value;
          gotCls.current = true;
        }
        if (!cancelled) setCls(clsSum.current);
      });
      layout.observe({ type: "layout-shift", buffered: true });
    } catch {
      /* CLS unsupported */
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const rows: TraceRow[] = [
    {
      label: "TTFB",
      description: "Time to first byte: request sent until the first byte of the response arrived.",
      value: nav.ttfb,
      unit: "ms",
    },
    {
      label: "DOM content loaded",
      description: "HTML parsed and blocking resources done; listener scripts attach before images finish.",
      value: nav.dcl,
      unit: "ms",
    },
    {
      label: "Load",
      description: "Whole page finished: scripts, stylesheets, and images all fetched.",
      value: nav.load,
      unit: "ms",
    },
    {
      label: "LCP",
      description: "When the largest element (the hero text) became visible. Updates live as the page paints.",
      value: lcp,
      unit: "ms",
      live: true,
    },
    {
      label: "CLS",
      description: "Cumulative layout shift: how much the page jumped while loading. 0 = stable.",
      value: cls,
      unit: "",
    },
  ];

  const numeric = rows.map((r) => r.value).filter((v): v is number => v !== null);
  const max = numeric.length ? Math.max(...numeric) : 1;
  const liveLabel = `${rows[0].label} ${rows[0].value === null ? "n/a" : `${Math.round(rows[0].value)}ms`}, ${rows[1].label} ${
    rows[1].value === null ? "n/a" : `${Math.round(rows[1].value)}ms`
  }, ${rows[2].label} ${rows[2].value === null ? "n/a" : `${Math.round(rows[2].value)}ms`}, ${rows[3].label} ${
    rows[3].value === null ? "n/a" : `${Math.round(rows[3].value)}ms`
  }, ${rows[4].label} ${rows[4].value === null ? "n/a" : cls!.toFixed(3)}`;

  return (
    <figure className="rounded-sm border border-border bg-card/60">
      <figcaption className="flex items-center justify-between gap-2 border-b border-border px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          This page's own load trace
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          live Performance API
        </span>
      </figcaption>

      <div role="img" aria-label={`Page load timing: ${liveLabel}`} className="px-4 py-4">
        <ul className="flex flex-col gap-2.5">
          {rows.map((row) => (
            <li
              key={row.label}
              className="group relative grid grid-cols-[9rem_1fr] items-center gap-3 sm:grid-cols-[10rem_1fr]"
            >
              <span
                tabIndex={0}
                aria-describedby={metricId(row.label)}
                className="truncate font-mono text-xs text-muted-foreground underline decoration-dashed decoration-transparent decoration-1 underline-offset-4 outline-none transition-colors duration-150 hover:text-foreground focus-visible:text-foreground focus-visible:decoration-signal focus-visible:ring-2 focus-visible:ring-signal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                {row.label}
              </span>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-[1px] bg-muted">
                  {row.value !== null && (
                    <div
                      className={`h-full rounded-[1px] transition-[width] duration-700 ease-out ${
                        row.live ? "bg-signal" : "bg-muted-foreground/70"
                      }`}
                      style={{ width: `${Math.min(100, (row.value / max) * 100)}%` }}
                    />
                  )}
                </div>
                <span className={`w-16 text-right font-mono text-xs tnum ${row.live ? "text-signal" : "text-foreground"}`}>
                  {row.value === null ? "—" : row.unit === "ms" ? `${Math.round(row.value)}ms` : row.value.toFixed(3)}
                </span>
              </div>
              <span
                id={metricId(row.label)}
                role="tooltip"
                className="pointer-events-none absolute right-0 top-full z-10 mt-2 w-64 max-w-[calc(100%-1rem)] rounded-sm border border-border bg-card px-3 py-2 font-mono text-[11px] leading-relaxed text-muted-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
              >
                {row.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}