"use client";

import { useEffect, useState } from "react";

export default function VisitorSourcesPage() {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSources() {
      try {
        const response = await fetch("/api/visitor-source");
        if (!response.ok) {
          throw new Error(`Server error ${response.status}`);
        }
        const data = await response.json();
        if (!data.successful) {
          throw new Error(data.msg || "Failed to load visitor sources.");
        }
        setSources(data.preview || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadSources();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-400 font-semibold mb-3">Visitor Source</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Incoming Links & Visitor Count</h1>
          <p className="text-slate-400 text-base md:text-lg">This page shows the sites that link to Technology Craft and the number of unique visitors from each source.</p>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 shadow-xl shadow-slate-950/40 overflow-hidden">
          <div className="grid grid-cols-2 gap-4 bg-slate-950/90 px-6 py-4 text-slate-400 text-sm uppercase tracking-[0.18em] font-semibold">
            <span>Site name</span>
            <span className="text-right">Visitors</span>
          </div>

          {loading ? (
            <div className="px-6 py-16 text-center text-slate-400">Loading visitor sources…</div>
          ) : error ? (
            <div className="px-6 py-16 text-center text-red-400">{error}</div>
          ) : sources.length === 0 ? (
            <div className="px-6 py-16 text-center text-slate-400">No visitor sources recorded yet.</div>
          ) : (
            <div className="divide-y divide-slate-800/70">
              {sources.map((source) => (
                <div key={source.link} className="grid grid-cols-2 items-center gap-4 px-6 py-5 hover:bg-slate-950/80 transition-colors">
                  <div>
                    <a href={source.link} target="_blank" rel="noreferrer" className="text-white font-semibold hover:text-blue-400 transition-colors">
                      {source.siteName}
                    </a>
                    <p className="text-slate-500 text-sm wrap-break-word">{source.link}</p>
                  </div>
                  <div className="text-right text-white font-bold text-lg">{source.visitors}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
