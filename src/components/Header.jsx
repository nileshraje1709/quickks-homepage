import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, MapPin, Menu, Search, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl font-black tracking-tight text-slate-950">QUICKKS</span>
          <span className="hidden rounded-full bg-sky-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-quickks-700 sm:inline">
            Home Services
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#services" className="text-sm font-semibold text-slate-600 transition hover:text-quickks-600">
            Services
          </a>
          <a href="#why-quickks" className="text-sm font-semibold text-slate-600 transition hover:text-quickks-600">
            Why Quickks
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <MapPin size={17} className="text-quickks-600" />
            Pune
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-sky-200 hover:bg-sky-50">
            <LogIn size={17} />
            Login
          </button>
        </div>

        <button
          className="rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <a href="#services" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold hover:bg-slate-50">
              Services
            </a>
            <a href="#why-quickks" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold hover:bg-slate-50">
              Why Quickks
            </a>
            <button className="flex items-center gap-2 rounded-lg px-3 py-3 text-left font-semibold hover:bg-slate-50">
              <MapPin size={17} className="text-quickks-600" /> Pune
            </button>
            <button className="flex items-center gap-2 rounded-lg px-3 py-3 text-left font-semibold hover:bg-slate-50">
              <LogIn size={17} /> Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}