/**
 * Minimal client-side BM25 (Okapi) keyword retrieval over the resume data.
 * This is keyword retrieval only — there is no LLM involved. Scores are raw
 * BM25 scores, useful for ranking, not for absolute comparison across queries.
 */
import { experience, projects, education, profile } from "@/data/resume";

export interface ResumeChunk {
  id: string;
  text: string;
  source: string;
}

export interface ScoredChunk {
  chunk: ResumeChunk;
  score: number;
}

export function buildResumeChunks(): ResumeChunk[] {
  const chunks: ResumeChunk[] = [];
  chunks.push({ id: "summary", text: profile.summary, source: "Summary" });
  experience.forEach((exp) => {
    const source = `Experience · ${exp.role}, ${exp.company}`;
    chunks.push({ id: `${exp.id}-outcome`, text: exp.outcome, source });
    chunks.push({ id: `${exp.id}-measure`, text: exp.measure, source });
    exp.method.forEach((m, i) => {
      chunks.push({ id: `${exp.id}-method-${i}`, text: m, source });
    });
  });
  projects.forEach((p) => {
    const source = `Project · ${p.title}`;
    chunks.push({ id: `project-${p.id}-summary`, text: p.summary, source });
    if (p.fact) {
      chunks.push({ id: `project-${p.id}-fact`, text: p.fact, source });
    }
  });
  chunks.push({
    id: "education",
    text: `${education.degree} from ${education.institution}, graduated ${education.graduatedDate}, CGPA ${education.cgpa}. Coursework: ${education.coursework.join(", ")}.`,
    source: "Education",
  });
  return chunks;
}

const STOP_WORDS = new Set([
  "and", "the", "for", "with", "across", "from", "into", "that", "this", "these", "are", "you", "your", "was", "were", "had", "has", "have", "its", "they", "them", "their", "than", "then", "over", "under", "about", "also", "via", "per", "not", "but", "out", "off", "own", "on", "in", "at", "of", "to", "a", "an", "is",
]);

function tokenize(text: string): string[] {
  const raw = text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  return raw.filter((t) => t.length > 1 && !STOP_WORDS.has(t));
}

interface IndexedDoc {
  chunk: ResumeChunk;
  terms: Map<string, number>;
  length: number;
}

export class BM25Index {
  private docs: IndexedDoc[];
  private docFreq: Map<string, number>;
  private avgLen: number;

  private constructor(chunks: ResumeChunk[]) {
    this.docs = [];
    this.docFreq = new Map<string, number>();
    for (const chunk of chunks) {
      const terms = tokenize(chunk.text);
      const counts = new Map<string, number>();
      for (const term of terms) {
        counts.set(term, (counts.get(term) ?? 0) + 1);
      }
      for (const term of counts.keys()) {
        this.docFreq.set(term, (this.docFreq.get(term) ?? 0) + 1);
      }
      this.docs.push({ chunk, terms: counts, length: terms.length });
    }
    this.avgLen = this.docs.length === 0 ? 1 : this.docs.reduce((s, d) => s + d.length, 0) / this.docs.length;
  }

  static fromChunks(chunks: ResumeChunk[]): BM25Index {
    return new BM25Index(chunks);
  }

  private static idf(n: number, df: number): number {
    return Math.log(1 + (n - df + 0.5) / (df + 0.5));
  }

  search(query: string, topK = 5): ScoredChunk[] {
    const queryTerms = tokenize(query);
    const n = this.docs.length;
    const scores = this.docs.map((doc) => {
      let score = 0;
      for (const term of queryTerms) {
        const tf = doc.terms.get(term);
        if (!tf) continue;
        const df = this.docFreq.get(term) ?? 1;
        const idf = BM25Index.idf(n, df);
        const k1 = 1.2;
        const b = 0.75;
        const denom = tf + k1 * (1 - b + (b * doc.length) / this.avgLen);
        score += idf * ((tf * (k1 + 1)) / denom);
      }
      return { chunk: doc.chunk, score };
    });
    return scores
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }
}

let sharedIndex: BM25Index | null = null;

export function getResumeIndex(): BM25Index {
  if (!sharedIndex) {
    sharedIndex = BM25Index.fromChunks(buildResumeChunks());
  }
  return sharedIndex;
}

export const SUGGESTED_QUERIES: ReadonlyArray<string> = [
  "RAG",
  "CI/CD edge functions",
  "Backend",
  "Llama 3.1",
  "AI",
  "Postgres",
];