# TAG Corner Premium Website Plan

## Project Intent

Build a premium-feeling website for a painting company serving the TAG Corner tri-state area around Chattanooga, TN (about a 50-mile service radius). The site should feel modern, high-trust, and intentionally designed, while remaining clear and conversion-focused for local homeowners and businesses.

## Starting Point (Current Repo)

- Stack: Next.js App Router + React + TypeScript + Tailwind + shadcn-style UI primitives.
- Status: scaffold phase, only a placeholder home page in `src/app/page.tsx`.
- Existing theme tokens: neutral defaults in `src/app/globals.css`, no established brand system.
- Existing reusable components: basic UI primitives in `src/components/ui/*`.
- Planning workspace is available in `.agents/plans/`.

## Goals

1. Create a design direction that looks high-end and local, not generic contractor-template.
2. Build trust quickly with proof, process clarity, and regional relevance.
3. Increase quote requests and call conversions.
4. Keep implementation clean, scalable, and aligned to strict TypeScript + lint constraints.

## Non-Goals (for first pass)

- No custom CMS integration in phase one.
- No complex user accounts or dashboards.
- No broad blog strategy beyond optional future-ready structure.

## Audience

- Homeowners in/around Chattanooga and nearby tri-state communities.
- Property managers and small commercial clients.
- Clients who value quality, reliability, communication, and clean workmanship.

## Brand Positioning Direction

- Tone: confident, skilled, respectful, locally grounded.
- Message: premium craftsmanship with dependable service.
- Promise: clear estimates, clean execution, durable finish.

## Visual Direction Candidates

### Direction A: Ridge and River Premium

- Palette: warm stone, forest, muted copper accents.
- Type pairing: expressive serif headlines + modern sans body.
- Feel: craftsmanship and local heritage with upscale restraint.

### Direction B: Architectural Contrast

- Palette: warm white, graphite, charcoal with one restrained accent.
- Type pairing: bold display sans + readable geometric sans.
- Feel: clean, precise, editorial, and premium.

### Direction C: Southern Hospitality Luxe

- Palette: cream, clay, slate blue, subtle brass highlights.
- Type pairing: soft serif + contemporary sans.
- Feel: warm, polished, and relationship-first.

### Cross-Industry Inspiration Sources

- Architecture studios: borrow editorial layouts, disciplined typography, and project-first storytelling.
- Boutique real estate: borrow aspirational visuals paired with practical inquiry UX.
- Boutique hospitality: borrow atmosphere-led imagery and emotional outcome framing.
- Design-build remodelers: borrow transparent process blocks and craftsmanship trust signals.
- Tile/stone showrooms and luxury furniture brands: borrow finish-detail photography and tighter art direction.
- Guardrail: borrow aesthetics, but keep local-service conversion obvious and fast.

## Site Architecture (Phase-One)

- `/` Home
- `/services`
- `/portfolio`
- `/about`
- `/contact`
- `/service-area`

Optional future pages:

- `/reviews`
- `/faq`
- Service detail pages for SEO depth

## Home Page Section Plan

1. Hero with strong local value proposition + primary CTA.
2. Trust bar: insured, years experience, review score, service guarantee.
3. Services overview cards.
4. Before/after showcase.
5. Process steps (simple 3-5 steps).
6. Testimonials and social proof.
7. Service area map/list with TAG Corner emphasis.
8. Final CTA with quote form and click-to-call.

- Add one finish/material close-up tile per featured project so paint quality feels tangible.
- Use transparent process language inspired by remodelers: prep, protect, paint, walkthrough.
- Keep final CTA outcome-focused (example: "Get a premium finish estimate in 24 hours").

## Conversion Strategy

- Sticky or repeated quote CTA throughout long pages.
- One primary action per section (avoid CTA clutter).
- Fast-contact options: tap-to-call + short estimate form.
- Trust triggers near forms: response time, warranty, proof of insurance.
- Pair each emotional/visual section with one concrete trust fact.
- Keep mobile call + short form reachable within first 1-2 scrolls.
- Avoid heavy media/motion that slows load time or hides CTA paths.

## Content Requirements

- Premium but approachable copy tuned to local audience.
- Service pages for interior, exterior, cabinet, deck/fence, commercial (as applicable).
- Testimonials and project outcomes, not just compliments.
- Service-area messaging with city/region coverage clarity.

## SEO and Structured Data Baseline

- Unique page metadata per route.
- LocalBusiness JSON-LD baseline.
- Service-related schema where useful.
- Clean heading hierarchy and internal linking.

## Technical Implementation Blueprint

### Design System Setup

- Extend CSS variables in `src/app/globals.css` for brand palette, spacing rhythm, radius, elevation, and motion.
- Keep tokens reusable and consistent across sections/components.

### Component Architecture

- Build section components under a dedicated folder (for example `src/components/sections/*`).
- Reuse existing UI primitives where they fit; add purposeful variants only.
- Keep layout and content slices modular to speed iteration.

### Performance and Accessibility

- Optimize image sizes and formats.
- Ensure color contrast and keyboard-safe interactions.
- Keep animations subtle and meaningful.

## Execution Phases

### Phase 0: Discovery Inputs

- Gather proof assets: project photos, testimonials, badges, insurance/license details.
- Confirm top service offerings and highest-priority conversion goals.
- Choose one visual direction from A/B/C.
- Collect 12-20 reference screenshots from cross-industry sources and tag each as layout, typography, proof, or CTA pattern.
- Create a brief borrow/avoid list before locking final art direction.

### Phase 1: IA and Wireframe Plan

- Finalize page map and section objectives.
- Define CTA placement and lead funnel behavior.
- Prepare rough content map for each page.

### Phase 2: Design System and Art Direction

- Lock typography, color system, spacing, and card styles.
- Set image treatment and motion rules.
- Build reusable section patterns before full page assembly.

### Phase 3: Core Page Build

- Implement homepage sections first.
- Implement `/services`, `/portfolio`, `/about`, `/contact`, `/service-area`.
- Add SEO metadata and baseline schema.

### Phase 4: QA and Launch Readiness

- Validate responsive behavior (mobile-first, desktop-polished).
- Run lint, type checks, and basic performance checks.
- QA all forms, links, and contact actions.

## Acceptance Criteria

- Site no longer resembles starter template defaults.
- Visual identity is coherent and premium.
- Home page clearly communicates who, what, where, and why trust.
- At least one strong conversion path from every major section.
- Technical checks pass with no critical issues.

## Build Prompt for Next Step

Use this prompt when you are ready to implement:

```md
Implement a premium redesign for this existing Next.js + TypeScript + Tailwind + shadcn-style repo.

Business context:
- Brand: The Right Painters.
- Service area: TAG Corner tri-state region around Chattanooga, TN (~50 miles).
- Objective: high-trust premium local-service site that avoids generic contractor templates.

Design requirements:
- Use intentional typography (no default generic stacks).
- Define a cohesive brand variable system in CSS (colors, spacing, elevation, motion).
- Use meaningful backgrounds and restrained animation.
- Keep mobile UX excellent, then elevate desktop polish.
- Avoid drab visuals, purple-on-white defaults, and cookie-cutter section styling.

Implementation scope:
1) Build full homepage with: hero, trust bar, services, before/after, process, testimonials, service area, final CTA.
2) Create foundational pages: /services, /portfolio, /about, /contact, /service-area.
3) Add conversion-focused CTA strategy with quote form and click-to-call treatment.
4) Add route metadata and local SEO JSON-LD baseline.
5) Use realistic placeholder content tailored to TAG Corner + Chattanooga audience.

Engineering constraints:
- Keep the current stack and conventions.
- Maintain strict TypeScript/lint quality.
- Use Bun commands when running scripts.

Execution style:
- Start by listing planned file changes.
- Implement in clear phases.
- End with validation results and a short rationale for major design choices.
```

## Repo Notes

- The referenced file `.agents/skills/design-taste-frontend/SKILL.md` was not found in this repo at planning time. If you want strict alignment to that skill's rules, add that file or paste its content into the implementation prompt.
