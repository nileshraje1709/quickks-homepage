import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceGrid from "./components/ServiceGrid";
import WhyQuickks from "./components/WhyQuickks";
import Footer from "./components/Footer";
import { services } from "./data";

export default function App() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredServices = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return services;
    return services.filter(
      (service) =>
        service.name.toLowerCase().includes(value) ||
        service.description.toLowerCase().includes(value)
    );
  }, [query]);

  const handleSearch = () => {
    if (!query.trim()) {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const match = services.find(
      (service) =>
        service.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        query.trim().toLowerCase().includes(service.name.toLowerCase())
    );

    if (match) navigate(`/services?category=${match.category}`);
    else document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        <Hero query={query} setQuery={setQuery} onSearch={handleSearch} />

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-quickks-600">
                Popular services
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What do you need help with?
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Choose a service and book a verified professional for your home.
            </p>
          </div>

          <ServiceGrid services={filteredServices} />
        </section>

        <WhyQuickks />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-soft sm:px-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
                  Need it today?
                </p>
                <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
                  Book trusted home services without the hassle.
                </h2>
                <p className="mt-3 max-w-xl text-slate-300">
                  Tell us what you need and we’ll help you find the right service.
                </p>
              </div>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-sky-50"
              >
                Book Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}