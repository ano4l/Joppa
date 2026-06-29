# JOPPA Construction Website

A modern, accessible, performance-first static website for JOPPA Construction — Cape Town residential builders and renovation specialists.

## Project structure

```
.
├── archive/
│   └── original/          # Original DC-runtime source files (kept for reference)
├── public/                # Production-ready static site
│   ├── index.html         # Main entry point (SPA with hash routing)
│   ├── css/
│   │   └── main.css       # Design system, components, and utilities
│   ├── js/
│   │   └── main.js        # Router, dynamic rendering, reveals, form, filters
│   └── assets/
│       └── joppa-logo.png # Brand logo
└── README.md              # This file
```

## Quick start

Open `public/index.html` in a browser, or serve the `public` folder with any static server:

```bash
# Using Python
python -m http.server 8000 --directory public

# Using Node.js (npx serve)
npx serve public

# Using PHP
php -S localhost:8000 -t public
```

Then visit `http://localhost:8000`.

## Architecture

- **Static SPA**: The site uses hash-based routing (`#home`, `#about`, `#services`, `#projects`, `#contact`) so it works without a backend.
- **No build step**: Plain HTML, CSS, and vanilla JavaScript. Easy to edit, host, and deploy.
- **External CSS/JS**: Styles and scripts are separated from markup for maintainability and caching.
- **Design system**: CSS custom properties handle colours, typography, spacing, and effects consistently.

## Design & UX improvements

- **Real photography**: Hero, project, and service images use high-quality construction-related photos from Unsplash (lazy-loaded with `loading="lazy"`). Replace these with your own project photos before going live.
- **Trust signals**: Added "Licensed & Insured", "Cape Town Local", and "Free Quotes" badges on the About teaser.
- **Mobile-first navigation**: Sticky header with a full-screen mobile menu and hamburger animation.
- **Scroll reveal animations**: Elements fade in as they enter the viewport, with `prefers-reduced-motion` support.
- **Animated stat counters**: Numbers count up when visible.
- **Project filtering**: Filter the portfolio by category (Renovation, Restoration, Bathroom, etc.).
- **WhatsApp integration**: Floating WhatsApp button and form submission prepopulates a WhatsApp message.
- **Improved forms**: Labels, autocomplete attributes, focus states, validation, and success state.
- **Service detail pages**: Each service now has a dedicated image, description, and bullet points.

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`, `h1`–`h3` hierarchy).
- ARIA labels and roles for navigation, mobile menu, and interactive elements.
- Skip-to-content link.
- Visible `focus-visible` indicators.
- Reduced-motion support (`prefers-reduced-motion`).
- High-contrast support (`prefers-contrast`).
- Touch targets sized at least 48px for buttons and links.

## SEO

- Descriptive page titles and meta descriptions.
- Canonical URL, Open Graph, and Twitter card tags.
- Structured data (`LocalBusiness` and `Service`) for Google rich results.
- NAP (Name, Address, Phone) consistency throughout the site.
- Semantic heading hierarchy and alt text on images.

## Before going live

1. **Replace Unsplash images**: Download and host your own project photos in `public/assets/` and update the `src`/`style` attributes in `index.html` and `main.js`.
2. **Add a real Open Graph image**: Replace the `og:image` and `twitter:image` references with a branded 1200×630px image saved as `public/assets/og-image.jpg`.
3. **Add a real favicon**: Replace `public/assets/joppa-logo.png` with proper `favicon.ico` / SVG / PNG sizes if needed.
4. **Google Maps**: Replace the map placeholder image with an embedded Google Map or a static map image of 18 Osborne Street, Zonnebloem, Woodstock.
5. **Domain**: Update the canonical URL and structured data `url` from `https://joppaconstruction.com/` to your actual domain.
6. **Analytics**: Add Google Analytics, Google Tag Manager, or a privacy-friendly analytics script if desired.
7. **Hosting**: Upload the contents of `public/` to your host (Netlify, Vercel, Cloudflare Pages, cPanel, etc.).

## Browser support

Works in all modern browsers (Chrome, Edge, Firefox, Safari). IE11 is not supported because the site uses CSS custom properties and modern DOM APIs.

## License

Copyright &copy; 2026 JOPPA Construction. All rights reserved.
