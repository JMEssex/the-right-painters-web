import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Paintbrush,
  PanelTop,
  Fence,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Painting Services | The Right Painters — Chattanooga & TAG Corner",
  description:
    "Interior, exterior, cabinet, deck, and commercial painting services. Serving the TAG Corner tri-state area around Chattanooga, TN with premium craftsmanship.",
};

const services = [
  {
    id: "interior",
    icon: Home,
    title: "Interior Painting",
    tagline: "Refresh every room with precision and care",
    description:
      "Whether it's a single accent wall or a full-home repaint, we treat every interior project with the same meticulous prep and clean execution. Walls, ceilings, trim, doors, and detail work — all handled with care for your home and your schedule.",
    includes: [
      "Color consultation and sampling",
      "Full surface preparation — filling, sanding, caulking",
      "Furniture and floor protection throughout",
      "Premium paint application (brush, roll, or spray as needed)",
      "Multi-coat systems for durability and even coverage",
      "Final walkthrough and touch-ups before handoff",
    ],
  },
  {
    id: "exterior",
    icon: Paintbrush,
    title: "Exterior Painting",
    tagline: "Protect and transform the face of your home",
    description:
      "Tennessee Valley weather is tough on exteriors. Our exterior painting process starts with thorough prep — power washing, scraping, priming — followed by premium coating systems designed to hold up against humidity, UV, and seasonal swings.",
    includes: [
      "Power washing and surface cleaning",
      "Scraping, sanding, and spot-priming",
      "Caulking and gap sealing",
      "Two-coat exterior paint systems",
      "Trim, shutters, and accent detail work",
      "Gutter and soffit painting",
    ],
  },
  {
    id: "cabinets",
    icon: PanelTop,
    title: "Cabinet Refinishing",
    tagline: "Factory-smooth finishes without the factory price",
    description:
      "A cabinet refinish transforms a kitchen or bathroom at a fraction of the cost of new cabinetry. We spray-apply coatings for a smooth, durable, factory-quality finish that's built to handle daily use.",
    includes: [
      "Door and hardware removal",
      "Degreasing, sanding, and priming",
      "Spray-applied finish coats for smoothness",
      "Color matching to countertops and hardware",
      "Careful reassembly and hardware reinstall",
      "Curing guidance for maximum durability",
    ],
  },
  {
    id: "deck",
    icon: Fence,
    title: "Deck & Fence Staining",
    tagline: "Restore and protect your outdoor wood",
    description:
      "Outdoor wood takes a beating from rain, sun, and humidity. We pressure wash, sand, and apply premium stain or sealant to bring decks, fences, and pergolas back to life — and keep them protected for years.",
    includes: [
      "Pressure washing and cleaning",
      "Sanding and surface prep",
      "Premium stain or sealant application",
      "Fence, pergola, and railing staining",
      "Maintenance scheduling recommendations",
      "Multiple finish options (solid, semi-transparent, clear)",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Painting",
    tagline: "Minimal disruption, maximum professionalism",
    description:
      "From offices and retail spaces to multi-unit properties and HOA common areas, we work around your schedule to deliver clean, professional results with minimal impact on your operations.",
    includes: [
      "Flexible scheduling including evenings and weekends",
      "Offices, retail, restaurants, and common areas",
      "Multi-unit and property management partnerships",
      "Tenant-ready unit turnovers",
      "Epoxy and specialty coatings available",
      "Detailed project proposals and timelines",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Page hero */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="section-width section-padding">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-brand-copper" />
                <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
                  Our Services
                </span>
              </div>
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
                Painting done{" "}
                <span className="italic text-brand-copper">right</span>,
                <br className="hidden md:block" />
                every time
              </h1>
              <p className="text-base md:text-lg text-brand-graphite leading-relaxed max-w-[60ch]">
                From interior refreshes to full exterior transformations, every
                project gets the same disciplined prep, premium materials, and
                careful execution. We serve homes and businesses across the TAG
                Corner tri-state area.
              </p>
            </div>
          </div>
        </section>

        {/* Services detail list */}
        <section className="py-16 md:py-24 bg-background">
          <div className="section-width section-padding">
            <div className="space-y-20 md:space-y-28">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                      index % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center">
                          <service.icon className="size-5 text-brand-copper" />
                        </div>
                        <span className="text-sm font-medium tracking-wide uppercase text-brand-copper">
                          {service.title}
                        </span>
                      </div>
                      <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-brand-charcoal mb-4">
                        {service.tagline}
                      </h2>
                      <p className="text-base text-brand-graphite leading-relaxed max-w-[55ch] mb-8">
                        {service.description}
                      </p>

                      <Button
                        asChild
                        className="bg-brand-copper text-white hover:bg-brand-copper-light h-11 px-6 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.98]"
                      >
                        <Link href="/contact">
                          Get a {service.title} Estimate
                          <ArrowRight className="size-4 ml-2" />
                        </Link>
                      </Button>
                    </div>

                    {/* What's included */}
                    <div
                      className={`rounded-xl border border-border bg-white p-6 md:p-8 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-charcoal mb-5">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3.5">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-brand-graphite leading-relaxed"
                          >
                            <CheckCircle className="size-4 text-brand-sage shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-20 bg-brand-charcoal">
          <div className="section-width section-padding text-center">
            <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Not sure what you need?
            </h2>
            <p className="text-base text-white/60 max-w-[45ch] mx-auto mb-8">
              Tell us about your project and we&apos;ll recommend the right
              approach with an honest estimate.
            </p>
            <Button
              asChild
              className="bg-brand-copper text-white hover:bg-brand-copper-light h-12 px-8 rounded-lg text-base font-medium transition-all duration-200 active:scale-[0.98]"
            >
              <Link href="/contact">Request a Free Estimate</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
