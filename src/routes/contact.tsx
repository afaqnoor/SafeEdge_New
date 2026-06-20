import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Lock, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SafeEdge international training Center" },
      {
        name: "description",
        content:
          "Get in touch for educational documentation guidance, consultation and verification support.",
      },
      {
        property: "og:title",
        content: "Contact — SafeEdge international training Center",
      },
      { property: "og:description", content: "Contact form, WhatsApp, email and business hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      await sendContactEmail({
        data: { name, email, phone, subject, message },
      });
      setSent(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitError(
        err instanceof Error ? err.message : "Failed to send message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-deep)]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Let's <span className="text-gradient">talk about your case</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Reach out via the form, email, or WhatsApp — we typically respond within a couple of
            hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              All inquiries are handled confidentially.
            </p>
            {sent ? (
              <div className="mt-8 flex flex-col items-center justify-center p-8 text-center animate-success-pop">
                {/* Beautiful animated success checkmark */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-white shadow-glow animate-wave-glow">
                  <svg
                    className="h-10 w-10 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <polyline className="animate-checkmark" points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-gradient">
                  Message Sent Successfully!
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you! Your inquiry has been received. Our team will review your details and
                  get back to you shortly.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-xl border border-input bg-background px-5 py-2.5 text-xs font-semibold text-foreground transition hover:bg-muted"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" className="sm:col-span-1" />
                <Field label="Subject" name="subject" className="sm:col-span-1" />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    maxLength={1000}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                    placeholder="Tell us briefly about your documentation needs…"
                  />
                </div>

                {submitError && (
                  <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50/50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-950/20 dark:text-red-400">
                    {submitError}
                  </div>
                )}

                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
                  <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5 text-primary" /> Secure & confidential
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-hero)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        Sending... <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-4">
            <InfoCard icon={Mail} title="Email" lines={["Safeedgeitc@gmail.com"]} />
            <InfoCard icon={Phone} title="Phone" lines={["+92 3088055171"]} />
            <a
              href="https://wa.me/923088055171"
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
            <InfoCard
              icon={Clock}
              title="Business Hours"
              lines={["Mon – Sat: 9:00 AM – 7:00 PM", "Sun: Closed"]}
            />
            <InfoCard icon={MapPin} title="Location" lines={["Peshawar, Pakistan"]} />
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Office location"
            src="https://www.google.com/maps?q=Peshawar,Pakistan&output=embed"
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
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
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
          {lines.map((l) => (
            <div key={l} className="text-sm text-muted-foreground">
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
