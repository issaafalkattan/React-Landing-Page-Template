# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # or: yarn
npm start            # dev server at http://localhost:3000 (hot reload)
npm run build        # production build into build/
CI=true npm test     # run tests once (npm test alone starts Jest in watch mode)
npm test -- --watchAll=false -t "name"   # run a single test by name
```

This is a Create React App project (`react-scripts` 5); there is no separate lint script — linting runs through CRA's built-in ESLint (`react-app` config) during `start`/`build`.

## Architecture

Single-page landing site. All page content lives in `src/data/data.json`, keyed by section name (`Header`, `Features`, `About`, `Services`, `Gallery`, `Testimonials`, `Team`, `Contact`). `src/App.jsx` imports that JSON and passes one top-level key to each section component as its `data` prop.

- **Content changes belong in `data.json`, not in components.** Components are stateless presentational functions in `src/components/` that map over `props.data` and render a fallback (`"Loading..."`) while it is undefined.
- **Styling is NOT part of the CRA build.** Bootstrap 3, Font Awesome 4, nivo-lightbox, and the main stylesheet (`public/css/style.css`) are static files referenced from `public/index.html`. Components use Bootstrap 3 class names (`col-md-*`, `col-xs-*`); Bootstrap 4/5 class names will not work. jQuery and `bootstrap.js` are loaded as global scripts in `index.html` for the navbar collapse behavior — do not import them as modules.
- Images referenced in `data.json` are root-relative paths (e.g. `img/portfolio/01-large.jpg`) served from `public/img/`.
- Anchor navigation uses the `smooth-scroll` package, initialized once at module level in `src/App.jsx`.
- The contact form (`src/components/contact.jsx`) submits via EmailJS and ships with placeholder credentials (`YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`) that a user must replace with their own EmailJS values for the form to send.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages. A newer V2 of this template exists in a separate repository (`react-landing-page-template-2021`); this repo is V1 and stays on React 17.
