import { MapPin } from "lucide-react";
import { images } from "../content";
import { ContactBanner, PageHero, ProcessSection, Reveal, SectionIntro } from "../components";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Creative Structures"
        title="Personal service. Professional standards."
        body="A residential construction partner focused on clear communication, thoughtful problem-solving, and work made to last."
        image={images.working}
        imageAlt="Construction planning conversation inside a home"
      />
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1344px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <SectionIntro eyebrow="Our point of view" title="Building is technical. The experience should still feel human." />
          <Reveal className="lg:pt-12">
            <p className="text-xl leading-9 text-[#0d2a5e]/90 sm:text-2xl sm:leading-10">
              Creative Structures NJ LLC helps homeowners turn ideas, frustrations, and underused spaces into homes that support the way they want to live.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#0d2a5e]/75">
              We believe strong work comes from equal parts planning and craftsmanship. That means listening before building, explaining decisions clearly, and never losing sight of how each detail contributes to the whole.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid bg-[#0d2a5e] text-white lg:grid-cols-2">
        <div className="min-h-[420px] lg:min-h-[660px]">
          <img src={images.framing} alt="Wood framing of a home under construction" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <SectionIntro eyebrow="What guides the work" title="Straightforward values, carried through every phase." light />
            <div className="mt-12 space-y-8">
              {[
                ["Clarity", "Straight answers, realistic conversations, and a shared understanding of the work ahead."],
                ["Care", "Respect for your home, your priorities, and the details that make a finished space feel right."],
                ["Craft", "Sound methods and thoughtful execution, including the parts you will never see once the project is complete."],
              ].map(([title, body], index) => (
                <Reveal key={title} delay={index * 0.08} className="grid grid-cols-[42px_1fr] gap-5 border-t border-white/20 pt-7">
                  <span className="text-xs font-bold text-white/80">0{index + 1}</span>
                  <div>
                    <h3 className="font-serif text-3xl">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SectionIntro eyebrow="Local perspective" title="Focused on Northern New Jersey homes." body="Every home comes with its own history, constraints, and possibilities. We bring a practical local mindset to renovations across the region." />
            <Reveal className="grid gap-4 sm:grid-cols-2">
              {[
                "Bergen County",
                "Essex County",
                "Morris County",
                "Passaic County",
                "Sussex County",
                "Surrounding areas",
              ].map((area) => (
                <div key={area} className="flex items-center gap-3 border-b border-[#0d2a5e]/20 py-4 text-sm font-semibold">
                  <MapPin size={16} className="text-[#d81922]" /> {area}
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal className="mt-12 bg-white px-6 py-5 text-sm leading-6 text-[#0d2a5e]/75 sm:px-8">
            Not sure whether your home is within our service area? Call us at <a href="tel:+18622510557" className="font-bold text-[#0d2a5e] underline underline-offset-4">(862) 251-0557</a> and we will be happy to discuss your location.
          </Reveal>
        </div>
      </section>
      <ProcessSection />
      <ContactBanner />
    </>
  );
}