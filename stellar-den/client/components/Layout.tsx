import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function AshokaChakra() {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      className="text-brand-blue"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      {/* spokes */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * Math.PI) / 12;
        const x1 = 12 + Math.cos(angle) * 2.2;
        const y1 = 12 + Math.sin(angle) * 2.2;
        const x2 = 12 + Math.cos(angle) * 9.2;
        const y2 = 12 + Math.sin(angle) * 9.2;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Tricolor top ribbon */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-saffron via-white to-brand-green" />

      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="group inline-flex items-center gap-3">
            <AshokaChakra />
            <div className="leading-tight">
              <div className="text-xs text-muted-foreground tracking-wider">
                Government of India
              </div>
              <div className="text-lg font-semibold text-primary group-hover:text-brand-blue transition-colors">
                National Digital Services Portal
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-brand-blue transition-colors ${isActive ? "text-brand-blue font-semibold" : "text-foreground"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/ledger"
              className={({ isActive }) =>
                `hover:text-brand-blue transition-colors ${isActive ? "text-brand-blue font-semibold" : "text-foreground"}`
              }
            >
              Secure Accessibility Ledger
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/accessibility/voice"
              className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium text-primary hover:bg-muted/50"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-white">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} National Digital Services Portal
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-blue">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-blue">
              Terms
            </a>
            <a href="#" className="hover:text-brand-blue">
              Accessibility
            </a>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-brand-green via-white to-brand-saffron" />
      </footer>
    </div>
  );
}
