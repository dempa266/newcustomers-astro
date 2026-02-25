---
name: astro-mdx-architecture
description: Enforce architecture and composition rules for Astro + MDX projects. Use when creating or refactoring pages, sections, components, and global sections; when reviewing structure quality; or when deciding where new content should live.
---

# Astro MDX Architecture

Use this skill to keep the project structure predictable:
- Pages define routes and compose sections.
- Sections compose components.
- Components are reusable UI primitives.
- Global sections are centrally configured reusable sections.

## Architecture Rules
1. Put route files in `src/pages/**` (`.mdx` or `.astro`).
2. Keep page files focused on page metadata and section composition.
3. Put section-level blocks in `src/sections/**`.
4. Put small reusable UI pieces in `src/components/**`.
5. Put shared, preconfigured reusable sections in `src/global-sections/**`.
6. Keep shared section data/config in `src/data/**` (for example `global-sections.ts`).
7. Keep site chrome in layouts (`src/layouts/**`), not in page files.

## Decision Flow
1. Need a new URL? Create a file in `src/pages`.
2. Need a new content block used by a page? Add/update a section in `src/sections`.
3. Need a smaller reusable piece inside sections? Add/update a component in `src/components`.
4. Need the same preconfigured section on multiple pages? Promote it to `src/global-sections` with centralized data.

## Guardrails
- Do not build full pages inside one monolithic section.
- Do not duplicate large markup across page files; extract to a section.
- Do not put route-level SEO/layout concerns in components.
- Prefer props/data over hardcoded copy in reusable sections/components.
- Keep heading/spacing systems global; avoid random per-page overrides unless explicitly required.

## Implementation Patterns

### Page Template (`src/pages/example/index.mdx`)
```mdx
---
layout: ../../layouts/PageLayout.astro
title: "Example Page"
description: "Example metadata"
---

import Hero from '../../sections/Hero.astro';
import Features from '../../sections/Features.astro';

<Hero data={{ title: "Example H1", description: "Intro copy" }} />
<Features data={{ title: "Why us", description: "Section copy" }} />
```

### Section Template (`src/sections/ExampleSection.astro`)
```astro
---
interface Props {
  data?: {
    title?: string;
    description?: string;
  };
}
const { data = {} } = Astro.props as Props;
---

<section class="section-spacing">
  <div class="site-container">
    <div class="section-intro section-intro--spaced">
      {data.title && <h2>{data.title}</h2>}
      {data.description && <p>{data.description}</p>}
    </div>
  </div>
</section>
```

### Component Template (`src/components/ExampleCard.astro`)
```astro
---
interface Props {
  title: string;
  text?: string;
}
const { title, text } = Astro.props as Props;
---

<article class="surface-card p-4">
  <h3>{title}</h3>
  {text && <p>{text}</p>}
</article>
```

### Global Section Template
1. Create `src/global-sections/TeamMembers.astro`.
2. Read data from `src/data/global-sections.ts`.
3. Render the section through `src/global-sections/GlobalSection.astro`.
4. Reuse it from pages via one consistent entry point.

## Review Checklist
- [ ] URL and file path match (`src/pages`).
- [ ] Page composes sections (not a giant inline block).
- [ ] Section composes components where needed.
- [ ] Repeated section promoted to global section when appropriate.
- [ ] Metadata lives in page frontmatter/layout.
- [ ] Spacing/heading conventions use global utilities.

If a requested change conflicts with these rules, propose the compliant structure first and then implement.
