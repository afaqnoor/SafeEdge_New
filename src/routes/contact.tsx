import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Lock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Edu Document Solutions" },
      { name: "description", content: "Get in touch for educational documentation guidance, consultation and verification support." },
      { property: "og:title", content: "Contact — Edu Document Solutions" },
      { property: "og:description", content: "Contact form, WhatsApp, email and business hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Let's <span className="text-gradient">talk about your case</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Reach out via the form, email, or WhatsApp — we typically respond within a couple of hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">All inquiries are handled confidentially.</p>
            {sent ? (
              <div className="mt-8 rounded-2xl border border-border bg-accent p-6 text-center">
                <p className="font-display text-lg font-semibold text-primary">Thank you!</p>
                <p className="mt-1 text-sm text-muted-foreground">Your message has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-6 grid gap-4 sm:grid-cols-2"
              >
                <Field label="Full Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" className="sm:col-span-1" />
                <Field label="Subject" name="subject" className="sm:col-span-1" />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    maxLength={1000}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="Tell us briefly about your documentation needs…"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
                  <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5 text-primary" /> Secure & confidential
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-4">
            <InfoCard icon={Mail} title="Email" lines={["support@edudocsolutions.com"]} />
            <InfoCard icon={Phone} title="Phone" lines={["+92 300 0000000"]} />
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-[#25D366] p-6 text-white shadow-elegant transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">WhatsApp</div>
                  <div className="text-sm text-white/90">Chat with us instantly</div>
                </div>
              </div>
            </a>
            <InfoCard icon={Clock} title="Business Hours" lines={["Mon – Sat: 9:00 AM – 7:00 PM", "Sun: Closed"]} />
            <InfoCard icon={MapPin} title="Location" lines={["Lahore, Pakistan"]} />
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Office location"
            src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, className,
}: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={150}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: any; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-soft">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-display text-base font-semibold">{title}</div>
          {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
        </div>
      </div>
    </div>
  );
}
