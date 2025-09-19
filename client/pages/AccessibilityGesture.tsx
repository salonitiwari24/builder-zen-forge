import { Link } from "react-router-dom";

export default function AccessibilityGesture() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Gesture Navigation
          </h1>
          <Link to="/" className="text-sm text-brand-blue hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[300px,1fr] items-center">
            <div className="relative aspect-[4/5] rounded-xl border bg-slate-50 grid place-items-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0a58ca"
                strokeWidth="1.5"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
              <div className="pointer-events-none absolute inset-0 animate-pulse rounded-xl ring-2 ring-brand-blue/30" />
            </div>
            <div>
              <p className="text-muted-foreground mb-3">
                Camera preview placeholder
              </p>
              <h2 className="text-xl font-semibold">
                Swipe hand right to navigate
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Raise your hand in front of the camera and swipe right to move
                to the next page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
