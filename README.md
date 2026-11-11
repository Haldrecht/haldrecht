# Haldrecht

Regulatory Affairs & Assurance. Static site in Astro.

The public name is Haldrecht. The header and footer wordmark is HALDRECHT. `package.json` still says `groundwork-site`. That is the package name, not the firm name.

The only domain is `haldrecht.com`. It is registered at Squarespace and is not connected. Canonical URLs stay on `https://example.nl`. Do not set DNS from this project.

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
