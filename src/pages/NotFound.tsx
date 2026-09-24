import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: unknown route", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md">
        <p className="font-mono text-sm text-signal tnum">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          <code className="break-all font-mono text-xs">{location.pathname}</code> does not exist on this
          site.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm transition-colors hover:border-signal/50"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to the portfolio
        </a>
      </div>
    </main>
  );
};

export default NotFound;