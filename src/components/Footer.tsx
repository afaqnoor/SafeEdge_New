import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[image:var(--gradient-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-soft">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold">Edu Document</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Solutions</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Trusted guidance for educational documentation, verification, and student consultation.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/process" className="hover:text-primary">Process</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Matric Documentation</li>
              <li>FSC Documentation</li>
              <li>Certificate Verification</li>
              <li>Student Consultation</li>
              <li>Application Assistance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> support@edudocsolutions.com</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +92 300 0000000</li>
              <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-primary" /> WhatsApp available</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Edu Document Solutions. All rights reserved.</p>
          <p>Legitimate educational guidance & verification support only.</p>
        </div>
      </div>
    </footer>
  );
}
