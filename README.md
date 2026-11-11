# Haldrecht

Regulatory Affairs & Assurance. Static site in Astro.

The public name is Haldrecht. The header and footer wordmark is HALDRECHT. `package.json` still says `groundwork-site`. That is the package name, not the firm name.

`haldrecht.nl` and `haldrecht.com` are not registered. Canonical URLs stay on `https://example.nl` until a domain is chosen. Do not point this project at those names.

## Run

```
npm install
npm run dev
```

The site is at http://127.0.0.1:4321/. The article editor is at http://127.0.0.1:4321/keystatic and only runs in dev.

## Test

```
npm run build
```

The production build is static. Draft articles stay out of `dist/`.
