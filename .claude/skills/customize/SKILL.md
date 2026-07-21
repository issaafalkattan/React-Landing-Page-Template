---
name: customize
description: Turn this landing page template into a real site for a specific company or product. Use when the user wants to personalize the template — change the copy, branding, images, sections, colors, or wire up the contact form.
---

# Customize the landing page

Gather what the site is for (company/product name, tagline, what it offers, contact details, brand color if any), then apply changes in this order. Whatever the user doesn't supply, write sensible copy for and tell them what you invented so they can correct it.

## 1. Copy and content — `src/data/data.json`

Every visible string lives here, keyed by section: `Header`, `Features` (4 items), `About`, `Services` (6 items), `Gallery` (9 items), `Testimonials` (6 items), `Team` (4 items), `Contact`. Edit values only; if you add or remove array items, the Bootstrap 3 grid still lays them out, but keep counts that divide evenly into rows (Features: multiples of 4, Services: multiples of 3, Team: multiples of 4) so the last row doesn't look ragged.

Icons for Features/Services are Font Awesome **4** class names (`fa fa-comments-o`) — check the name exists in v4, not v5/v6.

To drop a whole section, remove its component from `src/App.jsx` AND its link from `src/components/navigation.jsx` (nav links are hardcoded there, not data-driven).

## 2. Page identity — `public/index.html`

Update `<title>`, `meta description`, and `meta author`. Favicon and touch icons are referenced from `public/img/` but not shipped — add them if the user provides a logo.

## 3. Images — `public/img/`

Replace files in place, keeping the same paths and rough aspect ratios (portfolio images have `-small` and `-large` pairs used by the lightbox; team/testimonial photos are square-ish). `data.json` references them as root-relative paths (`img/...`).

## 4. Brand colors — `public/css/style.css`

The template's identity color is the blue gradient `#5ca9fb` → `#6372ff`. To rebrand, search-and-replace those two hexes across `style.css` (they appear in the header overlay, section title underlines, buttons, icon backgrounds, and hover states). This file is static — not processed by the build — so a hard browser refresh may be needed to see changes.

## 5. Contact form — `src/components/contact.jsx`

The form sends via EmailJS and ships with `YOUR_SERVICE_ID` / `YOUR_TEMPLATE_ID` / `YOUR_PUBLIC_KEY` placeholders. Ask the user for their EmailJS values; never invent them. If they don't have an account, point them to emailjs.com and leave the placeholders — the rest of the page works without it.

## 6. Verify

Run `CI=true npm test`, then `npm start` and confirm the page renders with the new content. The smoke test in `src/App.test.js` asserts on default template strings ("We are a Landing Page", "Get In Touch") — update those assertions to match the new copy.
