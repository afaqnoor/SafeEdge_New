import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sparkles,
  BookOpen,
  FileCheck2,
  Users,
  Award,
  ArrowRight,
  Star,
  ChevronDown,
  GraduationCap,
  FileSearch,
  ClipboardList,
  MessageSquare,
  CheckCircle2,
  Lock,
  Clock,
  Globe2,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe Edge Solutions — Educational Documentation & Verification" },
      {
        name: "description",
        content:
          "Professional educational documentation, verification guidance, consultation, and student support.",
      },
      { property: "og:title", content: "Safe Edge Solutions" },
      {
        property: "og:description",
        content:
          "Helping students and professionals with educational documentation, verification, and consultation.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "10K+", label: "Students Assisted" },
  { value: "8+", label: "Years of Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Verified & Secure",
    desc: "Confidential handling of every document with end-to-end privacy.",
  },
  {
    icon: Sparkles,
    title: "Expert Guidance",
    desc: "Decades of combined experience in educational documentation.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Streamlined process with clear timelines and proactive updates.",
  },
  {
    icon: Globe2,
    title: "Nationwide Support",
    desc: "Support for boards and institutions across the country.",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Matric Documentation Guidance",
    desc: "Step-by-step guidance for matric record requests and verifications.",
  },
  {
    icon: GraduationCap,
    title: "FSC Documentation Guidance",
    desc: "Complete assistance with FSC certificate and transcript processes.",
  },
  {
    icon: FileCheck2,
    title: "Certificate Verification Guidance",
    desc: "Help understanding and navigating official verification procedures.",
  },
  {
    icon: Users,
    title: "Student Consultation",
    desc: "One-on-one consultations for academic and documentation queries.",
  },
  {
    icon: FileSearch,
    title: "Educational Record Assistance",
    desc: "Locate and request academic records from relevant boards.",
  },
  {
    icon: ClipboardList,
    title: "Application Assistance",
    desc: "Help preparing and submitting university or institutional applications.",
  },
];

const testimonials = [
  {
    name: "Ayesha K.",
    role: "BS Student",
    quote: "Their team made the entire process easy. Clear updates and very professional.",
  },
  {
    name: "Hamza R.",
    role: "Engineering Graduate",
    quote: "Got my verification guidance handled smoothly. Highly recommended.",
  },
  {
    name: "Sara M.",
    role: "Parent",
    quote: "Trustworthy and patient with every question. Worth every minute.",
  },
];

const faqs = [
  {
    q: "What services do you provide?",
    a: "We offer legitimate guidance for educational documentation, verification processes, consultation, and student support — never the creation or modification of certificates.",
  },
  {
    q: "How long does a typical case take?",
    a: "Most consultations are scheduled within 24 hours. Document guidance timelines depend on the issuing board or institution.",
  },
  {
    q: "Is my information confidential?",
    a: "Absolutely. We follow strict privacy protocols and never share your documents or personal data with third parties.",
  },
  {
    q: "Do you work with all boards?",
    a: "We provide guidance for most major educational boards across the country. Reach out and we'll confirm your specific case.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
              Trusted by 10,000+ students & professionals
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Professional Educational <span className="text-gradient">Documentation</span> &
              Verification Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Helping students and professionals with educational documentation, verification
              guidance, consultation, and support.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5"
              >
                Contact Us <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5"
              >
                Get Consultation
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-primary" /> Secure & Confidential
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Verified Guidance
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" /> Premium Support
              </span>
            </div>
          </div>

          {/* Stats card */}
          <div className="glass mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 rounded-3xl p-8 shadow-elegant sm:grid-cols-4 animate-fade-up">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-gradient font-display text-3xl font-semibold sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            A higher standard of educational support
          </h2>
          <p className="mt-4 text-muted-foreground">
            We pair professional expertise with empathetic service so you always know exactly where
            you stand.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-soft">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="relative bg-[image:var(--gradient-soft)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
                Our services
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Comprehensive guidance, every step
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-gold)] opacity-0 blur-2xl transition group-hover:opacity-30" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Inquire <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / SUCCESS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] p-10 text-primary-foreground shadow-elegant sm:p-14">
          <div className="absolute inset-0 bg-aurora opacity-40" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                Customer success
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Real outcomes for real students
              </h2>
              <p className="mt-4 max-w-lg text-primary-foreground/80">
                From timely document guidance to thoughtful consultations, our clients consistently
                describe the experience as professional, clear, and reassuring.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                <span className="ml-2 text-sm text-primary-foreground/80">
                  4.9 / 5 average rating
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Cases Guided", value: "10,000+" },
                { label: "Repeat Clients", value: "72%" },
                { label: "Response Time", value: "< 2h" },
                { label: "Boards Covered", value: "20+" },
              ].map((m) => (
                <div key={m.label} className="glass-dark rounded-2xl p-5">
                  <div className="text-2xl font-semibold text-[color:var(--gold)]">{m.value}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Students & professionals trust us
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex gap-0.5 text-[color:var(--gold-deep)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-sm font-semibold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="glass flex flex-col items-center gap-5 rounded-3xl p-10 text-center shadow-soft sm:p-14">
          <MessageSquare className="h-10 w-10 text-primary" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to get started?</h2>
          <p className="max-w-xl text-muted-foreground">
            Speak with a consultant today and get clear, honest guidance on your educational
            documentation needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant"
            >
              Get Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground animate-fade-in">
          <CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />
          {a}
        </div>
      )}
    </div>
  );
}
