import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SafeEdge international training Center " },
      {
        name: "description",
        content:
          "Learn about SafeEdge international training Center — our mission, values and team supporting students with educational documentation.",
      },
      { property: "og:title", content: "About — SafeEdge international training Center" },
      { property: "og:description", content: "Our mission, values, and team." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We operate with honesty and provide only legitimate guidance.",
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "Every case is handled with patience and personal attention.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest professional standards.",
  },
];

const team = [
  { name: "Adeel Ahmed", role: "Founder & Lead Consultant", initial: "A" },
  { name: "Sana Tariq", role: "Verification Specialist", initial: "S" },
  { name: "Hassan Iqbal", role: "Student Counselor", initial: "H" },
  { name: "Maryam Khan", role: "Operations Lead", initial: "M" },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            A team built on <span className="text-gradient">trust & expertise</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            SafeEdge international training Center has spent years helping students and
            professionals navigate educational documentation with clarity and care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To make educational documentation simple, transparent, and accessible — empowering
              every student with the guidance they deserve.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-gold)] text-[color:var(--gold-foreground)] shadow-gold">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To become the most trusted partner for educational documentation and verification
              guidance across the region.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            Our Values
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">What we stand for</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] p-10 text-primary-foreground shadow-elegant sm:p-14">
          <div className="absolute inset-0 bg-aurora opacity-30" />
          <div className="relative grid gap-8 sm:grid-cols-3">
            {[
              { v: "8+ years", l: "Industry Experience" },
              { v: "10,000+", l: "Students Helped" },
              { v: "20+ boards", l: "Coverage Across Pakistan" },
            ].map((e) => (
              <div key={e.l}>
                <div className="font-display text-3xl font-semibold text-[color:var(--gold)]">
                  {e.v}
                </div>
                <div className="mt-1 text-sm text-primary-foreground/80">{e.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Meet the people behind the service
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            <Users className="mr-1 inline h-4 w-4 text-primary" />
            Experienced consultants dedicated to your success.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[image:var(--gradient-hero)] font-display text-2xl text-primary-foreground shadow-elegant">
                {m.initial}
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{m.name}</div>
              <div className="text-sm text-muted-foreground">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
