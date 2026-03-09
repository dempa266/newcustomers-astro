# Design System — newcustomers.se

This skill defines the visual language and section patterns for the newcustomers site. Follow these rules when creating or modifying sections and components.

## Aesthetic Direction

Premium, editorial, typography-driven. Confident restraint — no unnecessary decoration. Think Stripe/Apple level subtlety. Light backgrounds, generous whitespace, thin dividers.

## Color

- **Primary/accent**: `#d5a438` (gold) — used for eyebrows, numbered indices, hover states, buttons
- **Foreground**: `oklch(0.3 0.01 265)` — near-black for headings
- **Muted text**: `color-mix(in oklab, var(--foreground) 72%, white 28%)` — for body paragraphs via `var(--text-muted)`
- **Borders**: `border-black/6` — the standard divider opacity across all sections
- **Backgrounds**: White (`#ffffff`) to off-white (`#f6f8fb`). No colored section backgrounds. No dark sections (except footer).
- Never use opacity variants on primary color (no `text-primary/30`). Use solid `text-primary` for all gold elements.
- All color tokens live in `src/styles/themes/newcustomers.css`

## Typography

- **Headings**: `var(--font-heading)` = Poppins. Weight 600 for h1-h2, 500 for h3-h6. Tight line-height (1.12). Negative letter-spacing on h1-h3.
- **Body**: `var(--font-body)` = Source Sans 3. Weight 400-500. Line-height 1.65-1.7.
- **Serif accent**: `cinematic-serif` class = Playfair Display italic. Used sparingly for editorial transition text.
- **Mono**: JetBrains Mono for `type-micro-label` and `type-meta-note` classes.
- All heading sizes use fluid `clamp()` values defined as CSS custom properties (`--heading-h1` through `--heading-h6`).
- Headings inside sections should NOT have color classes — they inherit `var(--foreground)`. Never use `text-gray` on headings.

## Section Anatomy

Every section follows this structure:

```astro
<section class="section-spacing" aria-label="Section Name">
  <div class="site-container">
    <div class="section-intro section-intro--spaced" data-reveal>
      {eyebrow && <SectionEyebrow text={eyebrow} />}  <!-- or center prop -->
      <h2>{title}</h2>
      <p class="type-section-lead prose-measure">{description}</p>
    </div>
    <div class="section-after-intro ..." data-reveal-children>
      <!-- content items -->
    </div>
  </div>
</section>
```

### Required patterns:
- **`aria-label`** on every `<section>` — use the eyebrow text or a descriptive fallback
- **`SectionEyebrow`** component for all section labels — never inline eyebrow markup
- **`section-spacing`** class for standard vertical rhythm (`clamp(5rem, 8vw, 8rem)`)
- **`section-spacing-tight`** for compact sections like StatsBar (`clamp(3rem, 5vw, 5rem)`)
- **`site-container`** for horizontal containment (max-width 82rem, 1.5rem padding, 2rem at lg)
- **`section-intro--spaced`** adds bottom margin before content
- **`section-after-intro`** adds top margin for the content area
- **`data-reveal`** on intro blocks, **`data-reveal-children`** on item grids/lists

### Centered vs left-aligned intros:
- Centered: Add `section-intro--center` class and pass `center` prop to `SectionEyebrow`
- Left-aligned: Default. Used when section has a side-by-side layout (e.g., ServicesList, MainFeatures)

## Content Item Patterns

### Numbered list items (PainPoints, Testimonials, ServicesList)
```html
<div class="flex gap-5 py-8 border-b border-black/6">
  <span class="shrink-0 font-[var(--font-heading)] text-base font-semibold leading-[1.12] text-primary tabular-nums">
    01
  </span>
  <div>
    <h4 class="mb-2 text-foreground">{title}</h4>
    <p class="leading-relaxed">{description}</p>
  </div>
</div>
```
- Numbers are zero-padded: `String(i + 1).padStart(2, '0')`
- Always `text-primary` (solid gold), never opacity variants
- Container wrapped in `border-t border-black/6` at the top, each item has `border-b`
- Standard padding: `py-8` for full items, `py-5` for compact items (ServicesList)

### Large numbered features (MainFeatures)
- Numbers use `text-[clamp(2rem,3.2vw,2.8rem)] font-bold text-primary`
- 3-column grid on md+ with vertical `border-left` separators
- Each column has equal padding-left/right via CSS

### Metric/stat values
- Font: `font-[var(--font-heading)]` with `font-bold leading-none tracking-tight`
- Size: `text-[clamp(1.8rem,3vw,2.4rem)]` for inline metrics, `text-[clamp(2.2rem,3.6vw,3rem)]` for StatsBar
- Labels below: `type-micro-label mt-2 text-foreground/40` or `mt-3`

## Dividers

- Standard divider: `border-black/6` (6% opacity black)
- Used as `border-t` at the start of content grids and `border-b` on each item
- No horizontal rules (`<hr>`), no decorative dividers between sections
- Section separation is handled by whitespace alone (`--space-section`)

## Animations

- Centralized in `src/scripts/scroll-reveal.ts`, loaded in Layout.astro
- `data-reveal` — single element fade-up (18px, 0.7s, power3.out)
- `data-reveal-children` — stagger children (0.06s between each)
- `data-reveal-delay="0.12"` — optional additional delay
- Trigger: element top crosses 82% of viewport
- Respects `prefers-reduced-motion` (early return + CSS override)
- FAQ uses CSS `grid-template-rows` animation for open/close
- SubHero and Hero have their own GSAP load animations (not scroll-triggered)

## Buttons

- Use the `Button.astro` component with `type` prop: `primary`, `secondary`, `transparent`
- Sizes: `sm` (h-10), `md` (h-12), `lg` (h-14)
- Primary buttons have a sweep layer animation on hover (`button__layer`)
- All buttons: `border-radius: var(--radius-button)` (pill shape), `scale(1.03)` on hover

## Contact Form

- Always the last section before footer
- Uses `id="kontakt"` as anchor target
- Two-column layout: left = info + addresses, right = form card
- Form card: `rounded-[2rem] border border-black/8 bg-[linear-gradient(165deg,#ffffff_0%,#f9fafb_100%)]`
- Fields: `rounded-xl border border-black/10` with `focus:border-primary/40 focus:ring-2 focus:ring-primary/12`

## Footer

- Dark: `bg-[linear-gradient(180deg,#15151f_0%,#111119_100%)]`
- White text at varying opacities (90%, 44%, 32%)
- Logo and award images use `brightness-0 invert` filter
- Only dark element on the page — everything else is light

## Data Passing in MDX

Complex data (arrays of objects) is passed to sections via:
```js
export const myData = encodeURIComponent(JSON.stringify([...]));
// Then: <Section data={{ items: myData }} />
```
Sections decode with: `parseEncodedJson<Type[]>(data.items, [])`

## Accessibility

- `prefers-reduced-motion` kills all animations globally (CSS + JS)
- `focus-visible` outlines on all interactive elements (buttons, links, FAQ summaries)
- `.micro-link:focus-visible` has `outline: 2px solid var(--primary)`
- All images should have `width` and `height` attributes
- Hero/above-fold images: `loading="eager"`. Everything else: `loading="lazy"`
- `tel:` links use E.164 format (`+46703877177`)

## Sections Reference (seo/byra page order)

1. **SubHero** — Full-width hero with gradient background, H1, description, 2 CTAs, logo cloud
2. **StatsBar** — Centered eyebrow, 2-column (mobile) / n-column grid of stat values
3. **PainPoints** — Centered intro, 2-column numbered items, optional italic transition text
4. **MainFeatures** — Left-aligned intro with optional button, 3-column numbered features
5. **ResultsShowcase** — Centered intro, 2-column case studies with metric rows
6. **ServicesList** — Left-aligned sticky intro, 2-column numbered checklist
7. **SplitCoworkers** — Left-aligned intro, 2-column: slot content + coworker cards
8. **Testimonials** — Centered intro, numbered quotes with author attribution
9. **Faq** — Left-aligned intro, accordion with animated open/close
10. **ContactForm** — 2-column: info + form card
