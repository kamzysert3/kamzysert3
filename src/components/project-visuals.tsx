/**
 * Hand-rolled SVG concept visuals for project case studies.
 * All are labelled either "illustrative" or "architecture sketch".
 * Only figures the resume supports appear; everything structural that is
 * unsupported is omitted or marked unverified.
 */

interface NodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  active?: boolean;
  dashed?: boolean;
}

function Node({ x, y, w, h, label, active = false, dashed = false }: NodeProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={2}
        className={`fill-card stroke-current ${active ? "text-signal" : "text-muted-foreground/70"}`}
        strokeWidth={1}
        strokeDasharray={dashed ? "3 3" : undefined}
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        className={`font-mono text-[9px] ${active ? "text-signal" : "fill-current"}`}
      >
        {label}
      </text>
    </g>
  );
}

interface ArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  animated?: boolean;
  signal?: boolean;
}

function Arrow({ x1, y1, x2, y2, animated = false, signal = false }: ArrowProps) {
  const lineClasses = `fill-none stroke-current ${animated ? "flow-line" : ""} ${
    signal ? "text-signal" : "text-muted-foreground/60"
  }`;
  const markerId = signal ? "arrow-signal" : "arrow-muted";
  return (
    <g className={signal ? "text-signal" : "text-muted-foreground/60"} stroke="currentColor">
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={1} markerEnd={`url(#${markerId})`} className={lineClasses} />
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker
        id="arrow-muted"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-current" />
      </marker>
      <marker
        id="arrow-signal"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" className="fill-current" />
      </marker>
    </defs>
  );
}

function Caption({ x, y, text, signal = false }: { x: number; y: number; text: string; signal?: boolean }) {
  return (
    <text
      x={x}
      y={y}
      className={`font-mono text-[9px] uppercase tracking-[0.14em] ${signal ? "text-signal" : "text-muted-foreground"}`}
    >
      {text}
    </text>
  );
}

export function MaizeVisual() {
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label="Illustrative detection overlay on a schematic maize leaf">
      <Defs />
      <Caption x={12} y={18} text="illustrative detection overlay" />
      <g className="text-muted-foreground" stroke="currentColor">
        <path
          d="M60 150 Q95 40 255 62 Q235 110 210 152 Q140 108 60 150 Z"
          className="fill-card stroke-current"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
        <path d="M62 148 Q150 96 252 66" className="fill-none stroke-current" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
        <path d="M118 126 Q175 88 232 78" className="fill-none stroke-current" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
      </g>
      <g className="text-signal" fill="none" stroke="currentColor">
        <rect x={120} y={62} width={34} height={34} rx={2} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        <rect x={168} y={40} width={26} height={26} rx={2} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        <rect x={86} y={112} width={30} height={30} rx={2} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      </g>
      <Caption x={196} y={186} text="94% validation accuracy" signal />
    </svg>
  );
}

export function ChatroomVisual() {
  return (
    <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-label="Architecture sketch of the AI chatroom">
      <Defs />
      <Arrow x1={104} y1={60} x2={146} y2={60} animated />
      <Arrow x1={186} y1={60} x2={212} y2={60} animated />
      <Arrow x1={192} y1={160} x2={150} y2={160} signal />
      <Arrow x1={276} y1={160} x2={276} y2={120} signal />
      <Arrow x1={104} y1={160} x2={138} y2={160} />
      <Node x={12} y={40} w={92} h={40} label="Next.js client" />
      <Node x={146} y={40} w={40} h={40} label="Flask API" />
      <Node x={212} y={40} w={96} h={40} label="Llama 3.1 agent layer" active dashed />
      <Node x={150} y={140} w={42} h={40} label="private" />
      <Node x={192} y={140} w={84} h={40} label="group chat" />
      <Node x={258} y={160} w={50} h={24} label="channels" />
      <Caption x={12} y={210} text="architecture sketch" />
    </svg>
  );
}

export function EfinsuiteVisual() {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-label="Five-phase migration sketch anchored on 96 edge functions">
      <Defs />
      <Caption x={12} y={18} text="migration sketch" />
      <g className="text-signal" stroke="currentColor">
        <line x1={30} y1={86} x2={290} y2={86} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      </g>
      {["1", "2", "3", "4", "5"].map((p, i) => {
        const x = 34 + i * 52;
        const active = i === 4;
        return (
          <g key={p}>
            <circle
              cx={x + 12}
              cy={86}
              r={9}
              className={active ? "fill-card text-signal" : "fill-card text-muted-foreground/60"}
              stroke="currentColor"
              strokeWidth={1}
            />
            <text
              x={x + 12}
              y={86}
              textAnchor="middle"
              dominantBaseline="central"
              className={`font-mono text-[10px] ${active ? "text-signal" : "fill-current"}`}
            >
              P{p}
            </text>
            {i < 4 && (
              <line
                x1={x + 21}
                y1={86}
                x2={x + 46}
                y2={86}
                className="stroke-current text-muted-foreground/50"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
            )}
          </g>
        );
      })}
      <Caption x={34} y={62} text="lovable → vercel" />
      <g>
        <text x={34} y={148} className="text-signal font-mono text-[22px] tnum" fill="currentColor">
          96 edge functions
        </text>
      </g>
    </svg>
  );
}

export function EventixVisual() {
  return (
    <svg viewBox="0 0 320 140" className="h-auto w-full" role="img" aria-label="CI/CD workflow sketch">
      <Defs />
      <Node x={12} y={20} w={84} h={40} label="feature branch" />
      <Arrow x1={96} y1={40} x2={128} y2={40} />
      <Node x={128} y={20} w={76} h={40} label="PR + checks" />
      <Arrow x1={204} y1={40} x2={236} y2={40} signal animated />
      <Node x={236} y={20} w={72} h={40} label="deploy" active />
      <g className="text-signal">
        <circle cx={248} cy={32} r={2.5} fill="currentColor" />
      </g>
      <Caption x={12} y={96} text="CI/CD — illustrative" />
      <text x={12} y={122} className="fill-current font-mono text-[9px] text-muted-foreground">
        branch-per-feature · automated checks · 3x deploys
      </text>
    </svg>
  );
}

export function StorybookVisual() {
  return (
    <svg viewBox="0 0 320 170" className="h-auto w-full" role="img" aria-label="Adaptive difficulty sketch">
      <Defs />
      <Caption x={12} y={18} text="adaptive difficulty sketch" />
      <g className="text-muted-foreground" stroke="currentColor">
        <line x1={20} y1={130} x2={300} y2={130} strokeWidth={1} vectorEffect="non-scaling-stroke" />
        <line x1={20} y1={130} x2={20} y2={20} strokeWidth={1} vectorEffect="non-scaling-stroke" />
        <polyline
          points="20,130 60,118 100,124 140,96 180,104 220,66 260,74 300,40"
          className="fill-none stroke-current"
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </g>
      {[[20, 130], [60, 118], [100, 124], [140, 96], [180, 104], [220, 66], [260, 74], [300, 40]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} className={`fill-card stroke-current ${i === 7 ? "text-signal" : "text-muted-foreground/60"}`} strokeWidth={1} />
      ))}
      <Caption x={220} y={148} text="3x session length" signal />
      <text x={20} y={158} className="fill-current font-mono text-[9px] text-muted-foreground">
        scenes · OCR · difficulty per reader
      </text>
    </svg>
  );
}

export function NuraVisual() {
  return (
    <svg viewBox="0 0 320 170" className="h-auto w-full" role="img" aria-label="Generic RAG pipeline sketch">
      <Defs />
      <Caption x={12} y={18} text="RAG sketch — stack unverified" />
      <Node x={12} y={60} w={70} h={36} label="query" />
      <Arrow x1={82} y1={78} x2={116} y2={78} animated />
      <Node x={116} y={60} w={80} h={36} label="retrieve" active dashed />
      <Arrow x1={196} y1={78} x2={230} y2={78} animated />
      <Node x={230} y={60} w={70} h={36} label="LLM" />
      <Caption x={12} y={132} text="generic retrieval sketch — no full-LLM claim" />
      <text x={12} y={152} className="fill-current font-mono text-[9px] text-muted-foreground">
        Python · LangChain · vector retrieval (client-side keyword demo elsewhere on page)
      </text>
    </svg>
  );
}