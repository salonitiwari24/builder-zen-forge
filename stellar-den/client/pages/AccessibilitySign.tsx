import { Link } from "react-router-dom";

export default function AccessibilitySign() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Sign Language
          </h1>
          <Link to="/" className="text-sm text-brand-blue hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between pb-3">
              <span className="text-xs font-medium text-muted-foreground">
                Live ISL Translation
              </span>
              <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-blue">
                ISL
              </span>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100 grid place-items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-green/10" />
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-brand-blue to-brand-green opacity-90 animate-pulse" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Translating text into Indian Sign Language (ISL)...
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Instructions</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Keep the avatar panel visible for best results.</li>
              <li>Text content on the page will be translated to ISL.</li>
              <li>Use captions for additional clarity where available.</li>
            </ul>
            <div className="mt-6 rounded-xl border bg-slate-50 p-4">
              <p className="text-sm">
                Translating:{" "}
                <span className="font-medium">
                  Welcome to the National Digital Services Portal
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
