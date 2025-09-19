import { useMemo } from "react";

interface LogRow {
  action: string;
  timestamp: string;
  hash: string;
}

export default function Ledger() {
  const rows: LogRow[] = useMemo(
    () => [
      {
        action: "Opened Accessibility Assistant",
        timestamp: new Date().toLocaleString(),
        hash: "0x4a9f1c2b7d8e3f0a12bc...",
      },
      {
        action: "Selected Voice Navigation",
        timestamp: new Date(Date.now() - 1000 * 60 * 5).toLocaleString(),
        hash: "0x8c1e5b9a3f6d2a7c0e1d...",
      },
      {
        action: "Navigated to Services",
        timestamp: new Date(Date.now() - 1000 * 60 * 8).toLocaleString(),
        hash: "0x9d2a4f7b6c1e3a8d0b2f...",
      },
    ],
    [],
  );

  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="container py-12">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Secure Accessibility Ledger
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Blockchain-style immutable log of accessibility actions for
            transparency and auditing.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="bg-gradient-to-r from-brand-saffron via-brand-blue/10 to-brand-green p-4">
            <div className="text-sm font-medium text-foreground">
              Activity Log
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Hash
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rows.map((r, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="px-6 py-3 text-sm">{r.action}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {r.timestamp}
                    </td>
                    <td className="px-6 py-3 text-sm font-mono text-brand-blue">
                      {r.hash}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
