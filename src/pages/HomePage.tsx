import { useState } from "react";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { images, services, cn } from "../content";
import { ContactBanner, ProcessSection, Reveal, SectionIntro, TextLink } from "../components";

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-[#0d2a5e] text-white sm:min-h-[100svh]">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          src={images.homeExterior}
          alt="Contemporary home exterior opening to a green lawn"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-6xl"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              Residential construction in Northern New Jersey
            </p>
            <div className="select-none font-serif text-[14vw] leading-[0.75] tracking-[-0.065em] sm:text-[12vw] lg:text-[9.3rem]">
              <span className="block">Creative</span>
              <span className="block pl-[10vw] italic sm:pl-[13vw]">Structures.</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-col gap-7 border-t border-white/30 pt-7 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl">Homes, thoughtfully rebuilt.</h1>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
                Clear planning, careful craftsmanship, and a construction experience built around your home.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-3 bg-[#d81922] px-6 text-xs font-bold uppercase tracking-[0.16em] transition-opacity hover:opacity-90"
              >
                Request an estimate <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex min-h-13 items-center justify-center gap-3 border border-white/50 px-6 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#0d2a5e]"
              >
                Explore our work <ArrowDown size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1344px] gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-24">
          <Reveal className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-white">
              <motion.img
                whileInView={{ scale: [1.05, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src={images.working}
                alt="Homeowner and construction professional reviewing a renovation"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="relative z-10">
            <SectionIntro
              eyebrow="Built around your home"
              title="Good construction starts with a better conversation."
              body="Your home is personal. We approach every project with careful listening, practical guidance, and respect for the way you live. The result is a process that feels clear and work that feels completely at home."
            />
            <Reveal delay={0.15} className="mt-9">
              <TextLink to="/about">Our approach</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2a5e] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="What we build"
              title="One team for the spaces that matter most."
              body="From a focused room remodel to a full-home transformation, every project receives the same thoughtful attention."
              light
            />
            <Reveal className="shrink-0">
              <TextLink to="/services" light>View all services</TextLink>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div className="border-t border-white/20">
              {services.slice(0, 4).map((service, index) => (
                <button
                  type="button"
                  key={service.title}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    "group flex w-full items-center gap-5 border-b border-white/20 py-6 text-left transition-opacity",
                    activeService === index ? "opacity-100" : "opacity-45 hover:opacity-80",
                  )}
                >
                  <span className="text-xs text-white/80">{service.number}</span>
                  <span className="flex-1 font-serif text-2xl sm:text-3xl">{service.title}</span>
                  <ChevronRight size={20} className={cn("transition-transform", activeService === index && "translate-x-1")} />
                </button>
              ))}
            </div>
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[470px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={services[activeService].image}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionIntro eyebrow="Project inspiration" title="Made for real life. Finished with intention." />
            <Reveal className="shrink-0"><TextLink to="/projects">View the gallery</TextLink></Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-12 md:grid-rows-[320px_420px]">
            <Reveal className="group relative overflow-hidden md:col-span-7">
              <img src={images.kitchenBlue} alt="Modern blue kitchen with marble counters" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
                <p className="font-serif text-2xl">A kitchen with character</p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="group relative overflow-hidden md:col-span-5">
              <img src={images.bathMarble} alt="Marble bathroom renovation" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
                <p className="font-serif text-2xl">A quieter routine</p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="group relative overflow-hidden md:col-span-5">
              <img src={images.deck} alt="Outdoor deck dining space" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
                <p className="font-serif text-2xl">Room to live outside</p>
              </div>
            </Reveal>
            <Reveal delay={0.16} className="group relative overflow-hidden md:col-span-7">
              <img src={images.living} alt="Open concept living space" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
                <p className="font-serif text-2xl">Connected family living</p>
              </div>
            </Reveal>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#0d2a5e]/70">Gallery imagery is representative of our residential design and construction focus.</p>
        </div>
      </section>

      <ProcessSection />
      <ContactBanner />
    </>
  );
}