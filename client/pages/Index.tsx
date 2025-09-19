import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Index() {
  const [openAssistant, setOpenAssistant] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setOpenAssistant(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      {/* Hero */}
      <section className="relative">
        <div className="container grid gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
              Official Portal{" "}
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />{" "}
              Modern, citizen-first design
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Seamless access to India’s digital public services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Explore services, schemes, and information across ministries with
              a unified, modern experience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/ledger"
                className="inline-flex items-center rounded-lg bg-brand-blue px-4 py-2.5 text-white shadow hover:bg-brand-blue/90"
              >
                View Accessibility Ledger
              </Link>
              <a
                href="#services"
                className="inline-flex items-center rounded-lg border px-4 py-2.5 hover:bg-muted/50"
              >
                Browse Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-brand-saffron/20 via-transparent to-brand-green/20 blur-2xl" />
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-xl border p-4">
                  <div className="text-2xl font-bold text-brand-blue">
                    1200+
                  </div>
                  <div className="text-xs text-muted-foreground">Services</div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-2xl font-bold text-brand-green">35</div>
                  <div className="text-xs text-muted-foreground">
                    States/UTs
                  </div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-2xl font-bold text-brand-saffron">
                    24x7
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Availability
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border bg-slate-50 p-4">
                <p className="text-sm text-muted-foreground">
                  National single window for citizen-centric services with
                  accessibility at its core.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section id="services" className="container py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-semibold">Popular Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Identity & Certificates",
              desc: "Aadhaar, PAN, passports, and more",
            },
            {
              title: "Payments & Benefits",
              desc: "Direct benefit transfers and subsidies",
            },
            {
              title: "Education & Jobs",
              desc: "Scholarships, exams, recruitment",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-saffron via-brand-blue to-brand-green" />
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility Assistant Popup */}
      {openAssistant && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
        >
          <div className="relative w-full max-w-2xl rounded-2xl border bg-white p-6 shadow-xl">
            <button
              onClick={() => setOpenAssistant(false)}
              className="absolute right-3 top-3 rounded-full p-2 text-muted-foreground hover:bg-slate-100"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="mb-4 text-center">
              <div className="text-sm font-semibold tracking-wider text-brand-blue">
                Accessibility Assistant
              </div>
              <h3 className="mt-1 text-2xl font-bold">
                Do you need accessibility support?
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {/* Voice */}
              <button
                onClick={() => {
                  setOpenAssistant(false);
                  navigate("/accessibility/voice");
                }}
                className="group rounded-xl border p-5 text-left transition hover:shadow-md"
              >
                <div className="text-3xl">🎙</div>
                <div className="mt-2 font-semibold">Voice Navigation</div>
                <p className="text-sm text-muted-foreground">
                  Speak to navigate key sections
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-blue group-hover:underline">
                  Open
                </span>
              </button>

              {/* Sign Language */}
              <button
                onClick={() => {
                  setOpenAssistant(false);
                  navigate("/accessibility/sign-language");
                }}
                className="group rounded-xl border p-5 text-left transition hover:shadow-md"
              >
                <div className="text-3xl">🤟</div>
                <div className="mt-2 font-semibold">Sign Language</div>
                <p className="text-sm text-muted-foreground">
                  Avatar translates text to ISL
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-blue group-hover:underline">
                  Open
                </span>
              </button>

              {/* Gesture */}
              <button
                onClick={() => {
                  setOpenAssistant(false);
                  navigate("/accessibility/gesture");
                }}
                className="group rounded-xl border p-5 text-left transition hover:shadow-md"
              >
                <div className="text-3xl">✋</div>
                <div className="mt-2 font-semibold">Gesture Navigation</div>
                <p className="text-sm text-muted-foreground">
                  Use hand gestures to browse
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-blue group-hover:underline">
                  Open
                </span>
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => setOpenAssistant(false)}
                className="text-sm text-muted-foreground hover:underline"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
