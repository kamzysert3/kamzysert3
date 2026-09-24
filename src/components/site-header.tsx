import { useEffect, useMemo, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_ITEMS, RESUME_URL, RESUME_FILENAME, profile } from "@/data/resume";
import { useScrollSpy } from "@/hooks/use-scrollspy";
import { isMac } from "@/lib/scroll";
import { ThemeToggle } from "@/components/theme-toggle";

interface SiteHeaderProps {
  onOpenCommand: () => void;
}

export function SiteHeader({ onOpenCommand }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((n) => n.href.slice(1)), []);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-border bg-background/90 backdrop-blur-sm" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-w-0 items-baseline gap-2 font-display text-base font-semibold tracking-tight"
          aria-label="Back to top"
        >
          <span className="truncate">{profile.shortName}</span>
          <span className="hidden font-mono text-[11px] font-normal text-muted-foreground sm:inline">
            SE / AI-ML
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const active = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={`relative py-1 text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px transition-colors ${
                    active ? "bg-signal" : "bg-transparent"
                  }`}
                  aria-hidden
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden h-9 items-center gap-2 rounded-sm border border-border px-2.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
            aria-haspopup="dialog"
          >
            <span>Menu</span>
            <kbd className="rounded-sm border border-border bg-muted px-1.5 py-0.5 tnum">
              {isMac() ? "⌘K" : "Ctrl K"}
            </kbd>
          </button>
          <ThemeToggle />
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="hidden h-9 items-center gap-2 rounded-sm bg-primary px-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 md:flex"
          >
            <Download className="h-4 w-4" aria-hidden />
            Resume
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="container flex flex-col py-3">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-2.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                  <span className="font-mono text-[11px] text-muted-foreground/70 tnum">{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-border pt-3">
              <a
                href={RESUME_URL}
                download={RESUME_FILENAME}
                className="flex items-center gap-2 py-2 text-sm font-medium"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}