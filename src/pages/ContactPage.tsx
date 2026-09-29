import { FormEvent, ReactNode, useState } from "react";
import { ArrowRight, Check, ChevronDown, Mail, Phone, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "../content";
import { PageHero, Reveal, SectionIntro } from "../components";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  timeline: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyForm: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  budget: "",
  timeline: "",
  details: "",
};

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [reviewing, setReviewing] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!values.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    else if (values.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Enter a valid phone number with at least 10 digits.";
    if (!values.projectType) nextErrors.projectType = "Please choose a project type.";
    if (!values.location.trim()) nextErrors.location = "Please enter the project location.";
    if (!values.details.trim()) nextErrors.details = "Please share a few details about your project.";
    else if (values.details.trim().length < 20) nextErrors.details = "Please add a little more detail (at least 20 characters).";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validate()) {
      setReviewing(true);
      requestAnimationFrame(() => document.getElementById("form-review")?.focus());
    } else {
      requestAnimationFrame(() => document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
    }
  };

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (reviewing) setReviewing(false);
  };

  const mailSubject = encodeURIComponent(`Project inquiry from ${values.name || "website visitor"}`);

  return (
    <>
      <PageHero
        eyebrow="Request an estimate"
        title="Tell us what you are imagining."
        body="Share the basics below, then call or email us directly to start a no-pressure conversation about your home."
        image={images.exteriorAlt}
        imageAlt="Traditional New Jersey style home exterior"
      />
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1344px] gap-14 lg:grid-cols-[.68fr_1.32fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow="Start here" title="Let's talk about your project." body="Prefer to speak with someone now? Call or email Creative Structures directly. We look forward to hearing what you have in mind." />
            <Reveal className="mt-10 space-y-4">
              <a href="tel:+18622510557" className="group flex items-center gap-5 border-y border-[#0d2a5e]/20 py-5">
                <span className="grid h-12 w-12 place-items-center bg-[#0d2a5e] text-white"><Phone size={20} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#d81922]">Call directly</span>
                  <span className="mt-1 block font-serif text-2xl group-hover:underline">(862) 251-0557</span>
                </span>
              </a>
              <a href="mailto:info@creativestructuresnj.com" className="group flex items-center gap-5 border-b border-[#0d2a5e]/20 py-5">
                <span className="grid h-12 w-12 place-items-center bg-[#0d2a5e] text-white"><Mail size={20} /></span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#d81922]">Email us</span>
                  <span className="mt-1 block break-all text-sm font-semibold group-hover:underline sm:text-base">info@creativestructuresnj.com</span>
                </span>
              </a>
            </Reveal>
            <Reveal className="mt-10 flex items-start gap-4 bg-white p-6">
              <Sparkles size={20} className="mt-0.5 shrink-0 text-[#d81922]" />
              <p className="text-sm leading-6 text-[#0d2a5e]/75">The form is a planning tool only. It validates and organizes your details in this browser but does not send or save any information.</p>
            </Reveal>
          </div>

          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="bg-white p-6 shadow-[0_20px_70px_rgba(13,42,94,0.10)] sm:p-9 lg:p-12">
              <div className="flex flex-col gap-3 border-b border-[#0d2a5e]/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d81922]">Project planner</p>
                  <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Your project details</h2>
                </div>
                <p className="text-xs text-[#0d2a5e]/70"><span className="text-[#d81922]">*</span> Required fields</p>
              </div>

              <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
                <FormField id="name" label="Full Name" required error={errors.name}>
                  <input id="name" type="text" autoComplete="name" value={values.name} onChange={(event) => updateValue("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className="form-input" placeholder="Your full name" />
                </FormField>
                <FormField id="email" label="Email Address" required error={errors.email}>
                  <input id="email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className="form-input" placeholder="you@example.com" />
                </FormField>
                <FormField id="phone" label="Phone Number" required error={errors.phone}>
                  <input id="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateValue("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className="form-input" placeholder="(201) 555-0123" />
                </FormField>
                <FormField id="projectType" label="Project Type" required error={errors.projectType}>
                  <div className="relative">
                    <select id="projectType" value={values.projectType} onChange={(event) => updateValue("projectType", event.target.value)} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined} className="form-input appearance-none pr-10">
                      <option value="">Select a project</option>
                      <option>Whole-home renovation</option>
                      <option>Kitchen renovation</option>
                      <option>Bathroom renovation</option>
                      <option>Addition or extension</option>
                      <option>Basement finishing</option>
                      <option>Deck or exterior</option>
                      <option>Other residential project</option>
                    </select>
                    <ChevronDown size={17} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0d2a5e]/70" />
                  </div>
                </FormField>
                <FormField id="location" label="Project Location" required error={errors.location}>
                  <input id="location" type="text" autoComplete="address-level2" value={values.location} onChange={(event) => updateValue("location", event.target.value)} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "location-error" : undefined} className="form-input" placeholder="Town, NJ" />
                </FormField>
                <FormField id="budget" label="Project Budget" optional>
                  <div className="relative">
                    <select id="budget" value={values.budget} onChange={(event) => updateValue("budget", event.target.value)} className="form-input appearance-none pr-10">
                      <option value="">Select a range</option>
                      <option>Under $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $200,000</option>
                      <option>$200,000+</option>
                      <option>Not sure yet</option>
                    </select>
                    <ChevronDown size={17} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0d2a5e]/70" />
                  </div>
                </FormField>
                <FormField id="timeline" label="Project Timeline" optional>
                  <div className="relative">
                    <select id="timeline" value={values.timeline} onChange={(event) => updateValue("timeline", event.target.value)} className="form-input appearance-none pr-10">
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 1-3 months</option>
                      <option>Within 3-6 months</option>
                      <option>Within 6-12 months</option>
                      <option>Just exploring</option>
                    </select>
                    <ChevronDown size={17} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0d2a5e]/70" />
                  </div>
                </FormField>
                <div className="hidden sm:block" />
                <div className="sm:col-span-2">
                  <FormField id="details" label="Tell Us About Your Project" required error={errors.details}>
                    <textarea id="details" rows={5} value={values.details} onChange={(event) => updateValue("details", event.target.value)} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? "details-error" : "details-help"} className="form-input resize-y" placeholder="What would you like to change? Include any priorities, challenges, or details that will help us understand the project." />
                  </FormField>
                  {!errors.details && <p id="details-help" className="mt-2 text-xs text-[#0d2a5e]/65">Please include at least 20 characters.</p>}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-[#0d2a5e]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-[#0d2a5e]/70">Your entries remain in this browser. Nothing is transmitted or stored.</p>
                <button type="submit" className="inline-flex min-h-13 items-center justify-center gap-3 bg-[#d81922] px-7 text-xs font-bold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90">
                  Review details <ArrowRight size={16} />
                </button>
              </div>

              <AnimatePresence>
                {reviewing && (
                  <motion.div id="form-review" tabIndex={-1} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-7 border-l-4 border-[#0d2a5e] bg-white p-6 outline-none">
                    <div className="flex items-start gap-3">
                      <Check size={20} className="mt-0.5 shrink-0 text-[#0d2a5e]" />
                      <div>
                        <h3 className="font-serif text-2xl">Your details are ready.</h3>
                        <p className="mt-2 text-sm leading-6 text-[#0d2a5e]/75">Nothing has been sent. Call us, or open your email app to begin a conversation. You can copy any details from the form above into your message.</p>
                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                          <a href="tel:+18622510557" className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#0d2a5e] px-5 text-xs font-bold uppercase tracking-[0.14em] text-white"><Phone size={15} /> Call now</a>
                          <a href={`mailto:info@creativestructuresnj.com?subject=${mailSubject}`} className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#0d2a5e]/35 px-5 text-xs font-bold uppercase tracking-[0.14em]"><Mail size={15} /> Open email</a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FormField({ id, label, required, optional, error, children }: { id: string; label: string; required?: boolean; optional?: boolean; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2.5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.13em] text-[#0d2a5e]">
        <span>{label} {required && <span className="text-[#d81922]" aria-hidden="true">*</span>}</span>
        {optional && <span className="normal-case tracking-normal text-[#0d2a5e]/60">Optional</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-2 text-xs font-semibold text-[#d81922]">{error}</p>}
    </div>
  );
}