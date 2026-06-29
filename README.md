# JOPPA Construction Website

A premium static website for JOPPA Construction, a Cape Town residential builder and renovation specialist.

## Project Structure

```text
.
|-- archive/
|   `-- original/          # Original source files kept for reference
|-- public/                # Production-ready static site
|   |-- index.html         # Main entry point with hash routing
|   |-- css/
|   |   `-- main.css       # Design system, layout, and components
|   |-- js/
|   |   `-- main.js        # Router, rendering, filters, reveals, and form behavior
|   `-- assets/
|       |-- joppa-logo.png # Brand logo
|       `-- */             # Supplied JOPPA project image folders
`-- README.md
```

## Quick Start

Open `public/index.html` directly in a browser, or serve the `public` folder:

```bash
python -m http.server 8000 --directory public
```

Then visit `http://localhost:8000`.

## Notes

- The site is a plain HTML/CSS/JavaScript SPA with hash routes: `#home`, `#about`, `#services`, `#projects`, and `#contact`.
- Project, service, hero, and gallery imagery uses the supplied JOPPA asset folders.
- The Projects page includes category filters, an expanding hover gallery, and supporting folder-level image collections.
- The contact form prepares a WhatsApp message; there is no backend dependency.

## Before Going Live

1. Review project labels and descriptions in `public/js/main.js` as more project details become available.
2. Replace the Open Graph and Twitter image URLs with a branded 1200x630 image if needed.
3. Update the canonical URL and structured data URL when the production domain is final.
4. Add analytics or tag management only if required.

Copyright (c) 2026 JOPPA Construction. All rights reserved.
