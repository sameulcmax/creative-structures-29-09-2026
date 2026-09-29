import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn, images, Project, ProjectCategory, projects } from "../content";
import { ContactBanner, PageHero, SectionIntro } from "../components";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const categories: Array<"All" | ProjectCategory> = ["All", "Kitchens", "Bathrooms", "Living Spaces", "Exteriors"];
  const filtered = useMemo(() => (filter === "All" ? projects : projects.filter((project) => project.category === filter)), [filter]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <PageHero
        eyebrow="Project gallery"
        title="Spaces shaped around living."
        body="Explore the materials, details, and possibilities that inspire our approach to residential construction."
        image={images.kitchenBlue}
        imageAlt="Blue kitchen with marble worktops"
      />
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col gap-7 border-b border-[#0d2a5e]/20 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro eyebrow="Browse the work" title="Find your starting point." />
            <div className="flex flex-wrap gap-x-5 gap-y-3" role="group" aria-label="Filter projects">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "border-b-2 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors",
                    filter === category ? "border-[#d81922] text-[#d81922]" : "border-transparent text-[#0d2a5e]/70 hover:text-[#0d2a5e]",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <motion.div layout className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.button
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  type="button"
                  onClick={() => setSelected(project)}
                  className={cn("group text-left", index % 3 === 1 && "lg:mt-14")}
                  aria-label={`View ${project.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <img src={project.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center bg-white text-[#0d2a5e] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <ExternalLink size={17} />
                    </span>
                  </div>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d81922]">{project.category}</p>
                  <h2 className="mt-2 font-serif text-2xl">{project.title}</h2>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
          <p className="mt-14 border-t border-[#0d2a5e]/15 pt-5 text-xs leading-5 text-[#0d2a5e]/70">
            Gallery imagery is representative of our residential design and construction focus. Ask us about work relevant to your project.
          </p>
        </div>
      </section>
      <ContactBanner />

      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-end bg-[#0d2a5e]/85 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-8"
            onMouseDown={(event) => event.currentTarget === event.target && setSelected(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="relative grid max-h-[92vh] w-full max-w-5xl overflow-auto bg-white lg:grid-cols-[1.3fr_.7fr]"
            >
              <button
                type="button"
                autoFocus
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center bg-white text-[#0d2a5e]"
                aria-label="Close project"
              >
                <X size={21} />
              </button>
              <img src={selected.image} alt={selected.title} className="h-full min-h-[320px] w-full object-cover" />
              <div className="flex flex-col justify-end p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d81922]">{selected.category}</p>
                <h2 id="project-dialog-title" className="mt-4 font-serif text-4xl leading-tight">{selected.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#0d2a5e]/75">{selected.description}</p>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
                  Start a similar project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}