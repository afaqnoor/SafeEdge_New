import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 shadow-soft">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-soft">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold text-foreground">
              SafeEdge international training Center
            </span>
          </span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-[image:var(--gradient-hero)] px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant"
          >
            Get Consultation
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 shadow-soft md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary bg-accent" }}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-[image:var(--gradient-hero)] px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
