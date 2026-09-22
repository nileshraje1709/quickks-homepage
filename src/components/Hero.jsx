import { Search, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero({ query, setQuery, onSearch }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-white/5 px-4 py-2 text-sm font-semibold text-sky-200">
            <ShieldCheck size={16} />
            Trusted home services
          </div>

          <h1 className="text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Home Services,
            <span className="block text-sky-400">On Demand.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Fast. Reliable. On Time. Find skilled professionals for everyday home services, whenever you need them.
          </p>

          <div className="mt-9 max-w-3xl">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 px-4">
                <Search size={21} className="shrink-0 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSearch()}
                  placeholder="Search for Plumber, Electrician..."
                  className="w-full bg-transparent py-3 text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                onClick={onSearch}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-quickks-500 px-7 py-3 font-extrabold text-white transition hover:bg-quickks-600"
              >
                Book Now <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> Serving Pune</span>
            <span className="inline-flex items-center gap-2">✓ Verified providers</span>
            <span className="inline-flex items-center gap-2">✓ Secure payments</span>
          </div>
        </div>
      </div>
    </section>
  );
}