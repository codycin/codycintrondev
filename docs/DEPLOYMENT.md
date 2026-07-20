# Cloudflare Pages Deployment

## Prerequisites

- A Cloudflare account with permission to create a Pages project and manage the custom domain.
- The repository hosted on GitHub and available to Cloudflare's GitHub integration.
- Node.js 22 for local validation. `.node-version` documents the expected major version.

## Create the Pages project

1. In Cloudflare, open **Workers & Pages** and create a Pages project from Git.
2. Connect the GitHub account and select this repository.
3. Configure production branch `main`, root directory `/`, build command `npm run build`, and output directory `dist`.
4. Set the Node version to 22 in the Pages build environment.
5. Deploy. Production deployments should continue through this connected repository; do not add a competing automatic workflow.

## Custom domains and DNS

Add `codycintron.dev` as the production custom domain and follow Cloudflare's DNS prompts. Cloudflare provisions HTTPS after DNS validation.

Add `www.codycintron.dev` as a custom domain, then configure a Cloudflare Redirect Rule that permanently redirects `https://www.codycintron.dev/*` to `https://codycintron.dev/$1`. Keep this rule scoped to the `www` hostname so it does not affect preview deployments.

The generated `pages.dev` domain may optionally redirect to the canonical domain. If enabled, scope that redirect to the production `pages.dev` hostname only; leave branch and preview deployment hostnames accessible for review.

## Preview deployments

Cloudflare Pages creates preview deployments for non-production branches and pull requests when Git integration is enabled. Test route navigation and direct nested-route entry on both the preview hostname and the custom production domain. Do not redirect all `pages.dev` traffic if preview access is required.

## Local Pages preview

Run:

```bash
npm run cf:preview
```

The command builds the site and serves `dist` with `wrangler pages dev dist`. Verify `/`, `/about`, `/experience`, `/projects`, `/projects/tallyprs`, `/build-lab`, `/resume`, `/contact`, an unknown route, the résumé PDF, project images, and response headers.

Directly open `/projects/tallyprs`, refresh it, and confirm the application loads. Cloudflare Pages SPA fallback depends on the absence of a top-level `404.html`.

## Routing and direct-route troubleshooting

- Vite `base` must remain `/`.
- React Router must remain browser-history based; do not replace it with hash routing.
- Do not generate a top-level `404.html`.
- Do not add `/* /index.html 200` to `_redirects` unless Cloudflare's default fallback has intentionally been replaced.
- Confirm the deployed artifact is the `dist` directory and that no build plugin introduced `404.html`.
- If direct routes fail while client navigation works, inspect the Pages deployment artifact and project framework settings before changing application routing.

## Security and environment policy

`public/_headers` applies static security headers. No Content Security Policy is added until all required asset and script sources are confirmed. The application requires no runtime secrets. Do not place private values in `VITE_*` variables because Vite exposes them to client code.

## Cache considerations

Vite fingerprints application assets for long-term caching. `index.html`, `sitemap.xml`, `robots.txt`, the résumé PDF, and the social-preview image use stable public paths; purge Cloudflare cache or rename an asset when a critical update is not visible after deployment.

## Rollback

Use the Cloudflare Pages deployment history to promote a known-good deployment or roll back the production branch in Git and redeploy. After rollback, retest the canonical homepage and a directly opened nested route.

## Production verification

- Confirm HTTPS and the canonical `codycintron.dev` hostname.
- Confirm `www` redirects without affecting previews.
- Confirm `pages.dev` behavior matches the chosen canonical policy.
- Refresh `/projects/tallyprs` directly.
- Confirm `public/_headers` is present in the build output and returned by Pages.
- Confirm `/resume/Cody-Cintron-Resume.pdf`, `/og-image.png`, project screenshots, `robots.txt`, and `sitemap.xml` return successfully.
- Confirm browser console output contains no application errors.
