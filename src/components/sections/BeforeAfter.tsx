import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroEnd1 from "@/assets/hero-image-end-1.png";
import heroEnd2 from "@/assets/hero-image-end-2.png";

const projects = [
  {
    image: heroEnd1,
    title: "Full Interior & Exterior Restoration",
    location: "Signal Mountain, TN",
    tags: ["Interior", "Exterior", "Cabinet Refinish"],
    description:
      "Complete repaint of a 3,200 sq ft home — every surface from kitchen cabinetry to exterior siding. Cross-section shows the level of detail we bring to each room.",
  },
  {
    image: heroEnd2,
    title: "Modern Farmhouse Transformation",
    location: "Lookout Mountain, GA",
    tags: ["Exterior", "Deck Stain", "Trim Work"],
    description:
      "Exterior refresh with a crisp white and charcoal palette. New stain on all decking and a full trim detail package brought this home back to life.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-width section-padding">
        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-copper" />
            <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
              Recent Work
            </span>
          </div>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-brand-charcoal mb-5">
            See the{" "}
            <span className="italic text-brand-copper">difference</span>
          </h2>
          <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[55ch]">
            Real projects from homes across the TAG Corner region. Every detail
            matters — from surface prep to the final brushstroke.
          </p>
        </div>

        {/* Projects — asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.title} className="group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl bg-brand-cream mb-6">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-brand-cream text-xs font-medium text-brand-graphite"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info — below, gallery-style */}
              <h3 className="text-xl font-semibold text-brand-charcoal mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-brand-stone mb-3">{project.location}</p>
              <p className="text-sm text-brand-graphite leading-relaxed max-w-[50ch]">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Link to portfolio */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-copper hover:text-brand-copper-light transition-colors group"
          >
            View full portfolio
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
