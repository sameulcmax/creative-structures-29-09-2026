import { useState } from "react";
import { ArrowRight, Check, Hammer, Ruler, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn, images, services } from "../content";
import { ContactBanner, PageHero, Reveal, SectionIntro } from "../components";

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Residential construction services"
        title="Your vision, built with intention."
        body="Focused improvements and whole-home transformations, handled with practical guidance and careful execution."
        image={images.tools}
        imageAlt="Carpenter measuring wood with care"
      />
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <SectionIntro eyebrow="What we do" title="A considered approach to every part of your home." body="Select a service to see how we can help. Every scope is tailored to the home, priorities, and practical needs of the people who live there." />
          <div className="mt-16 border-t border-[#0d2a5e]/25">
            {services.map((service, index) => {
              const isExpanded = expanded === index;
              return (
                <div key={service.title} className="border-b border-[#0d2a5e]/25">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="group grid w-full grid-cols-[40px_1fr_auto] items-center gap-3 py-6 text-left sm:grid-cols-[60px_1fr_auto] lg:py-8"
                  >
                    <span className="text-xs font-bold tracking-[0.16em] text-[#d81922]">{service.number}</span>
                    <span>
                      <span className="block font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">{service.title}</span>
                      <span className="mt-2 hidden text-sm text-[#0d2a5e]/70 sm:block">{service.short}</span>
                    </span>
                    <span className={cn("grid h-10 w-10 place-items-center border border-[#0d2a5e]/30 transition-all", isExpanded && "rotate-45 bg-[#0d2a5e] text-white")}>
                      <X size={18} className={cn(!isExpanded && "rotate-45")} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-10 pl-0 sm:pl-[72px] lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:pb-14">
                          <div className="py-2">
                            <p className="max-w-lg text-base leading-7 text-[#0d2a5e]/75">{service.description}</p>
                            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm font-semibold">
                                  <Check size={16} className="text-[#d81922]" /> {feature}
                                </li>
                              ))}
                            </ul>
                            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d81922]">
                              Discuss this service <ArrowRight size={16} />
                            </Link>
                          </div>
                          <img src={service.image} alt={service.title} className="aspect-[16/9] h-full max-h-[340px] w-full object-cover" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#0d2a5e] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1344px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <SectionIntro eyebrow="Built in, not added on" title="The small details are part of the big picture." light />
          <Reveal className="grid gap-8 sm:grid-cols-3">
            {[
              { Icon: Ruler, title: "Careful planning", body: "Good work begins with a clear scope and well-sequenced decisions." },
              { Icon: Hammer, title: "Craftsmanship", body: "Materials and details are handled with durability and finish in mind." },
              { Icon: ShieldCheck, title: "Respectful process", body: "We work with care for your property, schedule, and day-to-day life." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="border-t border-white/25 pt-6">
                <Icon size={26} className="text-white/80" />
                <h3 className="mt-5 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}