import { CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Verified Providers",
    text: "Professionals are checked so you can book with confidence.",
  },
  {
    icon: Clock3,
    title: "On-Time Guarantee",
    text: "Reliable scheduling designed around your time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Simple and secure payment experience from start to finish.",
  },
];

export default function WhyQuickks() {
  return (
    <section id="why-quickks" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-quickks-600">Why choose Quickks</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built around trust and convenience.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <Icon className="text-quickks-600" size={28} />
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}