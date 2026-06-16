import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen, GraduationCap, FileCheck2, Users, FileSearch,
  ClipboardList, FileText, Briefcase, ArrowRight, Check,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Edu Document Solutions" },
      { name: "description", content: "Educational documentation guidance, verification support, consultation and application assistance." },
      { property: "og:title", content: "Services — Edu Document Solutions" },
      { property: "og:description", content: "Comprehensive educational documentation guidance and consultation services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: FileText, title: "Internal Documentation Support",
    desc: "Organize, structure and prepare internal academic paperwork accurately.",
    benefits: ["Document review", "Format correction", "Submission prep"],
  },
  {
    icon: BookOpen, title: "Matric Documentation Guidance",
    desc: "Step-by-step assistance for matric record requests and verifications.",
    benefits: ["Board liaison guidance", "Application help", "Status follow-up"],
  },
  {
    icon: GraduationCap, title: "FSC Documentation Guidance",
    desc: "Complete advice for FSC certificates, transcripts and equivalency.",
    benefits: ["Transcript guidance", "Equivalency help", "Timeline planning"],
  },
  {
    icon: FileSearch, title: "Educational Record Assistance",
    desc: "Help retrieving and organizing official academic records.",
    benefits: ["Record requests", "Archive search", "Authenticity checks"],
  },
  {
    icon: FileCheck2, title: "Certificate Verification Guidance",
    desc: "Navigate official verification procedures with confidence.",
    benefits: ["Process explanation", "Documentation checklist", "Authority coordination"],
  },
  {
    icon: Users, title: "Student Consultation Services",
    desc: "One-on-one sessions for academic and career-related queries.",
    benefits: ["Personalized advice", "Roadmap planning", "Q&A sessions"],
  },
  {
    icon: ClipboardList, title: "Documentation Support",
    desc: "Hands-on help compiling and reviewing required documents.",
    benefits: ["Checklist creation", "Quality review", "Submission tracking"],
  },
  {
    icon: Briefcase, title: "Application Assistance",
    desc: "Support for university, scholarship and institutional applications.",
    benefits: ["Form review", "Document prep", "Deadline management"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">Our Services</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Trusted <span className="text-gradient">educational documentation</span> services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every service is built around clarity, confidentiality, and genuine guidance — never shortcuts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-soft">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-foreground">
                    <Check className="h-4 w-4 text-[color:var(--gold-deep)]" /> {b}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Inquire now <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
