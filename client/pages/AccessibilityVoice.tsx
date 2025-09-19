import { Link } from "react-router-dom";

export default function AccessibilityVoice() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Voice Navigation
          </h1>
          <Link to="/" className="text-sm text-brand-blue hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl border bg-white p-8 shadow-sm">
          <p className="text-muted-foreground mb-6">
            Say “Go to Services” to navigate. Microphone UI is for
            demonstration.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button
              aria-label="Microphone"
              className="relative grid h-28 w-28 place-items-center rounded-full bg-brand-blue text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-blue/30"
            >
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-blue/30" />
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 14a4 4 0 0 0 4-4V7a4 4 0 1 0-8 0v3a4 4 0 0 0 4 4Z" />
                <path d="M19 11a7 7 0 0 1-14 0" />
                <path d="M12 19v3" />
              </svg>
            </button>
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-brand-blue font-semibold">
                Listening
              </p>
              <p className="mt-1 text-lg font-medium">Say “Go to Services”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
