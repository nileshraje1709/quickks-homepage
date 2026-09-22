import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-2xl font-black tracking-tight text-white">QUICKKS</Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
              Fast. Reliable. On Time. — Home services made simple.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Services</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <a href="#services" className="block hover:text-white">Plumber</a>
              <a href="#services" className="block hover:text-white">Electrician</a>
              <a href="#services" className="block hover:text-white">Cleaning</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Company</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <a href="#why-quickks" className="block hover:text-white">Why Quickks</a>
              <a href="#" className="block hover:text-white">About</a>
              <a href="#" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Need help?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Book a service quickly and get reliable help at home.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 Quickks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}