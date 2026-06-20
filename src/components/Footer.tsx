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
                <span className="font-display text-base font-semibold">
                  SafeEdge international training Center
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Trusted guidance for educational documentation, verification, and student
              consultation.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-primary">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Matric Documentation</li>
              <li>FSC Documentation</li>
              <li>Certificate Verification</li>
              <li>Nebosh</li>
              <li>IOSH</li>
              <li>OSHA</li>
              <li>ISO 14001,9001,45001 </li>
              <li>DAE</li>
              <li>Quality control (QA/QC)</li>
              <li>Work permit receiver</li>
              <li>First aid</li>
              <li>Fire safety</li>
              <li>IT Diplomas</li>
              <li>HiQual Uk</li>
              <li>Medical Diplomas</li>
              <li>Skills Base Diploma</li>
              <li>DAE</li>
              <li>Electrical</li>
              <li>Civil</li>
              <li>Mechanical </li>
              <li>IT</li>
              <li>Medical Diploma</li>
              <li>Dit 1 year</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" /> info@isdc.uk
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" /> +92 3088055171
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 text-primary" /> WhatsApp available
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" /> Peshawar, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} SafeEdge international training Center. All rights
            reserved.
          </p>
          <p>Legitimate educational guidance & verification support only.</p>
        </div>
      </div>
    </footer>
  );
}
