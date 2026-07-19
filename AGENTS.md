# AGENTS.md

## Project

This repository contains the professional software engineering portfolio for Cody Cintron at codycintron.dev.

Primary technologies:

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- npm

The production site is a static application intended for Cloudflare Pages, with GitHub Pages compatibility where practical.

## Source of truth

Before making content or design changes, read:

1. `docs/PORTFOLIO_CONTENT.md`
2. `docs/DESIGN_SYSTEM.md`
3. `src/data/portfolio.ts`
4. `README.md`

Professional facts, metrics, dates, links, company names, education details, and project statuses must come from these files.

Never invent:

- Employment dates
- Job titles
- Project metrics
- Repository URLs
- Live URLs
- Technical results
- Awards
- Company claims
- Project completion status

Use a clearly labeled `TODO` value in `src/data/portfolio.ts` when information is unavailable.

## Working agreements

- Use npm. Do not introduce another package manager.
- Use strict TypeScript.
- Do not use `any` unless an external library makes it unavoidable and the reason is documented.
- Prefer small functional React components.
- Keep professional content in `src/data/portfolio.ts`, not embedded throughout JSX.
- Reuse existing components before adding new abstractions.
- Avoid premature abstraction and unnecessary design-system infrastructure.
- Do not add production dependencies unless they clearly reduce complexity.
- Prefer native browser APIs, CSS, and SVG over heavy animation libraries.
- Keep the site deployable as static files.
- Do not introduce a backend without explicit instructions.
- Do not expose secrets or private environment variables in client code.
- Preserve accessibility, responsive behavior, and reduced-motion support.
- Avoid large unrelated refactors.

## Design standards

- Dark-first modern portfolio.
- Deep navy backgrounds, dark blue surfaces, and bright blue accents.
- Professional and technically credible, not game-like or cyberpunk.
- Use surfing, strength training, and nutrition as subtle motifs.
- Avoid excessive gradients, glowing borders, particle effects, typing animations, and decorative noise.
- Motion should communicate hierarchy or status.
- All motion must respect `prefers-reduced-motion`.
- Every interactive element must have visible keyboard focus.
- Do not use arbitrary percentage-based skill bars.
- Use evidence-based project descriptions instead of inflated marketing language.

## Responsive behavior

Test at minimum:

- 360px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

Prevent horizontal overflow at every viewport.

## Application architecture

This project is a routed React application deployed as a client-rendered static site.

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router in Data Mode
- Lucide React
- Cloudflare Pages
- npm

Use `createBrowserRouter` and `RouterProvider` from `react-router`.

Do not use:

- `HashRouter`
- URL hash routing
- `react-router-dom` in new code
- React Router Framework Mode
- Server-side rendering
- Next.js
- A custom server
- A backend unless explicitly requested

The application must use clean browser-history URLs such as:

- `/about`
- `/experience`
- `/projects`
- `/projects/tallyprs`
- `/build-lab`
- `/resume`
- `/contact`

## Route map

The required routes are:

- `/` — homepage
- `/about` — expanded personal and engineering background
- `/experience` — professional experience
- `/projects` — complete project collection
- `/projects/:projectSlug` — dynamic project case study
- `/build-lab` — active and in-progress projects
- `/resume` — responsive web résumé and PDF access
- `/contact` — contact methods and opportunity information
- `*` — in-application not-found page

Do not create a separate route for every small homepage section.

Skills, education, metrics, and featured content may appear on the homepage and on the most contextually relevant deeper pages.

## Shared layout

All primary routes must use one shared application layout containing:

- Skip link
- Site header
- Desktop navigation
- Mobile navigation
- Main route outlet
- Footer
- Route transition behavior
- Scroll restoration behavior
- Route metadata handling

Use nested routes and `<Outlet />`.

The header and footer must not be duplicated across page components.

## Homepage responsibilities

The homepage is a high-impact overview rather than the complete portfolio.

It should contain:

1. Hero
2. Professional impact metrics
3. About preview
4. Current experience preview
5. Featured TallyPRs case study preview
6. Selected project grid
7. Build Lab preview
8. Skills overview
9. Education preview
10. Contact call to action

Each preview should link to its appropriate deeper route.

Do not duplicate entire deeper pages on the homepage.

## Project routes

Project content must come from typed data.

Each project must have a unique stable slug.

The `/projects/:projectSlug` route must:

- Read the slug from route parameters.
- Locate the matching project in centralized project data.
- Display a full case study when the project exists.
- Render the in-application not-found experience when it does not exist.
- Omit repository or live-site actions when URLs are unavailable.
- Clearly distinguish completed, active, in-progress, and planned functionality.
- Never present planned functionality as completed.

Do not create one hard-coded page component per project unless the project requires a genuinely unique interactive experience.

## Route loading

Lazy-load non-home route modules where practical.

The homepage and shared application shell should remain in the initial application bundle.

Use route-level loading placeholders only when a route actually loads asynchronous code or data.

Do not display fake loading states for content already available synchronously.

## Navigation

Use React Router navigation components for all internal links.

Use:

- `Link`
- `NavLink`
- `useNavigate` only for imperative navigation
- `viewTransition` where appropriate

Use ordinary anchor elements for external URLs, downloads, email links, and same-page fragments when appropriate.

Active navigation must:

- Be visually distinct.
- Use the router's active state.
- Preserve `aria-current="page"` behavior.
- Remain understandable without color alone.

Do not use `window.location.href` for internal navigation.

## Page transitions

Use React Router View Transitions and CSS for restrained page transitions.

Do not install an animation framework solely for route transitions.

Transitions must:

- Use opacity and transforms.
- Be brief and subtle.
- Respect `prefers-reduced-motion`.
- Never delay navigation.
- Never animate large amounts of text continuously.
- Gracefully degrade in browsers without View Transition support.

## Navigation accessibility

After navigation:

- Scroll to the top unless navigation targets a hash.
- Move logical focus to the route's primary heading or main content without causing a distracting visible jump.
- Update the document title.
- Preserve browser back and forward behavior.

The mobile menu must close when:

- A route is selected.
- Escape is pressed.
- Navigation completes.

## Route metadata

Every route must define:

- Page title
- Meta description
- Canonical pathname

Project routes must derive metadata from project data.

Create one reusable metadata mechanism rather than manually querying and updating metadata throughout page components.

At minimum, client navigation must update:

- `document.title`
- Description meta tag
- Canonical link

The base `index.html` must contain accurate homepage and fallback Open Graph metadata.

Do not claim that client-only metadata guarantees route-specific social previews. Route-specific server-generated previews would require future prerendering or server rendering.

## Cloudflare Pages requirements

The production target is Cloudflare Pages using GitHub integration.

Required settings:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Site base path: `/`
- Canonical domain: `https://codycintron.dev`

Do not generate a top-level `404.html`.

Cloudflare Pages uses the absence of a top-level `404.html` to provide SPA fallback behavior for nested routes.

The React Router wildcard route must provide the user-facing not-found page.

Do not use hash routing as a deployment workaround.

Do not add an SPA catch-all `_redirects` rule unless Cloudflare's default behavior has been deliberately replaced.

A `_redirects` file may be used for actual canonical or legacy redirects.

A `_headers` file may be used for appropriate static security headers.

## Cloudflare development

Wrangler is a development dependency.

Use:

```bash
npm run cf:preview
```

to build the site and preview the generated `dist` output with Cloudflare Pages locally.

Production deployments must normally occur through the connected GitHub repository.

Do not configure competing automatic deployment workflows unless explicitly requested.

## Testing requirements

Use Vitest and React Testing Library.

Add focused tests for:

- Shared layout rendering
- Primary navigation
- Mobile navigation behavior
- Known project-slug rendering
- Unknown project-slug behavior
- Missing project links
- Project status labels
- Reduced-motion-sensitive components when practical

Tests should verify visible behavior rather than internal implementation details.

Do not pursue arbitrary coverage percentages.

## Required commands

Development:

```bash
npm run dev
```

Validation:

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
```

Full validation:

```bash
npm run check
```

Cloudflare local preview:

```bash
npm run cf:preview
```

Run `npm run check` after meaningful application-wide changes.

## Completion requirements

A routing-related task is not complete until:

- Internal links use React Router.
- Browser back and forward navigation work.
- Direct navigation to nested routes works.
- Refreshing a nested route works in the Cloudflare Pages preview.
- Unknown routes display the designed not-found page.
- Mobile navigation works with keyboard and touch input.
- Route titles update.
- No route causes horizontal overflow.
- `npm run check` passes.
