import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceGrid({ services }) {
  const navigate = useNavigate();

  if (!services.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <h3 className="text-lg font-bold text-slate-900">No service found</h3>
        <p className="mt-2 text-sm text-slate-500">Try searching for another service.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {services.map(({ name, category, icon: Icon, description }) => (
        <button
          key={category}
          onClick={() => navigate(`/services?category=${category}`)}
          className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft sm:p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-quickks-600 transition group-hover:bg-quickks-500 group-hover:text-white">
              <Icon size={24} strokeWidth={2} />
            </div>
            <ArrowUpRight size={18} className="text-slate-300 transition group-hover:text-quickks-600" />
          </div>

          <h3 className="mt-6 text-base font-extrabold text-slate-900 sm:text-lg">{name}</h3>
          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{description}</p>
        </button>
      ))}
    </div>
  );
}