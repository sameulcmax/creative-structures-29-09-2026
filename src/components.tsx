import { ReactNode, useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn, navItems } from "./content";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
      <img
        src="/logo.png"
        alt="Creative Structures logo"
        className={cn(compact ? "h-10 w-auto sm:h-9" : "h-9 w-auto sm:h-11")}
    />
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#0d2a5e]/10 bg-white text-[#0d2a5e]"
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-12">
        <Link to="/" aria-label="Creative Structures home" className="relative z-50 focus-visible:outline-offset-4">
          <BrandMark compact />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-[13px] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-60",
                  isActive && "nav-active",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:+18622510557" className="text-sm font-semibold transition-opacity hover:opacity-60">
            (862) 251-0557
          </a>
          <Link
            to="/contact"
            className={cn(
              "inline-flex min-h-11 items-center justify-center px-5 text-xs font-bold uppercase tracking-[0.14em] transition-colors",
              "bg-[#d81922] text-white transition-opacity hover:opacity-90",
            )}
          >
            Request an estimate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-0 min-h-screen bg-white px-5 pb-10 pt-28 text-[#0d2a5e] lg:hidden"
          >
            <nav className="border-t border-[#0d2a5e]/20" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="flex items-center justify-between border-b border-[#0d2a5e]/20 py-5 font-serif text-3xl"
                >
                  <span>{item.label}</span>
                  <span className="font-sans text-xs tracking-[0.2em]">0{index + 1}</span>
                </NavLink>
              ))}
            </nav>
            <div className="mt-10 space-y-3">
              <a href="tel:+18622510557" className="flex items-center gap-3 text-base font-semibold">
                <Phone size={18} /> (862) 251-0557
              </a>
              <a href="mailto:info@creativestructuresnj.com" className="flex items-center gap-3 text-sm">
                <Mail size={18} /> info@creativestructuresnj.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d2a5e] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-14 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.9fr]">
          <div>
            <BrandMark />
            <p className="mt-7 max-w-md text-lg leading-8 text-white/65">
              Thoughtful residential renovation and construction for homes across Northern New Jersey.
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">Explore</p>
            <div className="grid gap-3 text-sm text-white/75">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="w-fit transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">Start a conversation</p>
            <div className="space-y-4 text-sm text-white/75">
              <a href="tel:+18622510557" className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone size={17} /> (862) 251-0557
              </a>
              <a href="mailto:info@creativestructuresnj.com" className="flex items-center gap-3 break-all transition-colors hover:text-white">
                <Mail size={17} /> info@creativestructuresnj.com
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0" /> Serving Northern New Jersey
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Creative Structures NJ LLC. All rights reserved.</p>
          <p>Residential construction, thoughtfully handled.</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#0d2a5e]">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 bg-white px-4 py-2 text-sm font-bold text-[#0d2a5e] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <Reveal>
      <p className={cn("mb-5 text-xs font-bold uppercase tracking-[0.2em]", light ? "text-white/80" : "text-[#d81922]")}>
        {eyebrow}
      </p>
      <h2 className={cn("max-w-4xl font-serif text-4xl leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-6xl", light && "text-white")}>
        {title}
      </h2>
      {body && <p className={cn("mt-6 max-w-2xl text-lg leading-8", light ? "text-white/80" : "text-[#0d2a5e]/75")}>{body}</p>}
    </Reveal>
  );
}

export function TextLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 border-b pb-2 text-xs font-bold uppercase tracking-[0.17em] transition-colors",
        light ? "border-white/40 text-white hover:border-white" : "border-[#0d2a5e]/35 text-[#0d2a5e] hover:border-[#0d2a5e]",
      )}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function PageHero({ eyebrow, title, body, image, imageAlt }: { eyebrow: string; title: string; body: string; image: string; imageAlt: string }) {
  return (
    <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-[#0d2a5e] text-white sm:min-h-[72svh]">
      <motion.img
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a5e]/95 via-[#0d2a5e]/65 to-black/15" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/80">{eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ["01", "Start with a conversation", "Tell us what is working, what is not, and what you hope your home can become."],
    ["02", "Define the project", "We align on scope, priorities, materials, and a practical path forward before work begins."],
    ["03", "Build with care", "Your project moves forward with regular communication and attention to the details behind the finish."],
    ["04", "Enjoy your space", "We walk through the completed work together so you can settle into your renewed home with confidence."],
  ];
  return (
    <section className="border-y border-[#0d2a5e]/15 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1344px]">
        <SectionIntro eyebrow="A clear process" title="From first idea to final detail." body="Renovation has many moving parts. Our approach keeps the decisions, communication, and work moving in the same direction." />
        <div className="mt-16 grid border-t border-[#0d2a5e]/25 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, body], index) => (
            <Reveal key={number} delay={index * 0.08} className="border-b border-[#0d2a5e]/25 py-8 md:px-7 md:first:pl-0 lg:border-r lg:last:border-r-0">
              <p className="text-xs font-bold tracking-[0.2em] text-[#d81922]">{number}</p>
              <h3 className="mt-8 min-h-0 font-serif text-2xl leading-tight lg:min-h-16">{title}</h3>
              <p className="mt-5 text-sm leading-6 text-[#0d2a5e]/75">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactBanner() {
  return (
    <section className="relative overflow-hidden bg-[#d81922] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/20" />
      <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/20" />
      <Reveal className="relative mx-auto flex max-w-[1344px] flex-col gap-9 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">Have a project in mind?</p>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Let's make your home work beautifully.
          </h2>
        </div>
        <Link
          to="/contact"
          className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-4 bg-[#0d2a5e] px-7 text-xs font-bold uppercase tracking-[0.16em] transition-opacity hover:opacity-90"
        >
          Start your project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}