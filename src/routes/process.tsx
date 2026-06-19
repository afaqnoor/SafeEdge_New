import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, Phone, FileSearch, Compass, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Safe Edge Solutions" },
      {
        name: "description",
        content:
          "A clear five-step process to handle your educational documentation needs end-to-end.",
      },
      { property: "og:title", content: "Our Process — Safe Edge Solutions" },
      {
        property: "og:description",
        content: "Submit inquiry, consultation, document review, processing guidance, completion.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  {
    icon: MessageSquare,
    title: "Submit Inquiry",
    desc: "Share your requirements through our contact form or WhatsApp. We'll respond within hours.",
  },
  {
    icon: Phone,
    title: "Consultation",
    desc: "Speak with a consultant to discuss your case, timelines and best path forward.",
  },
  {
    icon: FileSearch,
    title: "Document Review",
    desc: "We carefully review the documents you have and identify what's needed.",
  },
  {
    icon: Compass,
    title: "Processing Guidance",
    desc: "Receive a clear, step-by-step plan with checklists and proactive updates.",
  },
  {
    icon: CheckCircle2,
    title: "Completion",
    desc: "Confirm successful processing and receive guidance for any follow-up steps.",
  },
];

function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            Our Process
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            A <span className="text-gradient">simple, transparent</span> 5-step journey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            No surprises — just clear communication and steady progress from the first inquiry to
            completion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <ol className="relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/40 before:to-[color:var(--gold)]/40 sm:before:left-8">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative pl-20 sm:pl-24 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-elegant sm:h-16 sm:w-16">
                <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                    Step {i + 1}
                  </span>
                  <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant"
          >
            Start your inquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
