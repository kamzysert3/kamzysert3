import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { getResumeIndex, SUGGESTED_QUERIES, type ScoredChunk } from "@/lib/bm25";

export function AskResume() {
  const index = useMemo(() => getResumeIndex(), []);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ScoredChunk[]>([]);
  const [searched, setSearched] = useState(false);

  const runSearch = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) {
      setResults([]);
      setSearched(false);
      return;
    }
    setResults(index.search(trimmed, 6));
    setSearched(true);
  };

  return (
    <section
      aria-labelledby="ask-resume-title"
      className="overflow-hidden rounded-sm border border-border"
    >
      <div className="border-b border-border bg-card/60 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 id="ask-resume-title" className="font-display text-lg font-semibold tracking-tight">
            Ask the resume
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            keyword retrieval — BM25, no LLM
          </p>
        </div>
      </div>

      <div className="px-4 py-5 sm:px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            runSearch(query);
          }}
        >
          <label htmlFor="ask-resume-query" className="sr-only">
            Query the resume
          </label>
          <div className="flex items-center gap-2 rounded-sm border border-border bg-background px-3 transition-colors focus-within:border-signal/60">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
            <input
              id="ask-resume-query"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. edge functions, RAG, computer vision…"
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] text-muted-foreground">Suggested:</span>
          {SUGGESTED_QUERIES.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => {
                setQuery(q);
                runSearch(q);
              }}
              className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-signal/50 hover:text-foreground"
            >
              {q}
            </button>
          ))}
        </div>

        {!searched ? (
          <p className="mt-5 leading-relaxed text-sm text-muted-foreground">
            Type a question or pick a suggestion. Results are ranked chunks of the resume data on this
            page — the same kind of retrieval layer used in the projects below.
          </p>
        ) : results.length === 0 ? (
          <p className="mt-5 font-mono text-sm text-muted-foreground">
            No chunks matched “{query}”. Try a different term.
          </p>
        ) : (
          <ol className="mt-5 flex flex-col divide-y divide-border border-t border-border">
            {results.map(({ chunk, score }, rank) => (
              <li key={chunk.id} className="flex flex-col gap-1 py-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-muted-foreground tnum">
                    {String(rank + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm leading-relaxed">{chunk.text}</span>
                  <span className="shrink-0 font-mono text-[11px] tnum text-signal">
                    {score.toFixed(3)}
                  </span>
                </div>
                <p className="pl-6 font-mono text-[11px] text-muted-foreground">— {chunk.source}</p>
              </li>
            ))}
          </ol>
        )}

        <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
          BM25 = term-frequency × inverse-document-frequency over the resume chunks. Runs entirely in
          your browser; no model, no network call.
        </p>
      </div>
    </section>
  );
}