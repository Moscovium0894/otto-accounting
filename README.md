# Otto — landing site

Cinematic dark landing page for Otto, an AI-native bookkeeping platform for
independent restaurants and pubs. Static HTML / CSS / vanilla JS — no build
step.

## Layout

```
index.html              The single-screen scroll-snap deck (hero → pricing → CTA)
styles.css              One organised stylesheet, sectioned by component
how-it-works.html
bookkeepers.html
for-accountants.html
integrations.html
pricing.html
about.html
book-a-call.html        Sub-pages — render in `page-mode` (natural scroll)
```

Sub-pages add `<script>document.documentElement.classList.add('page-mode')</script>`
to opt out of the scroll-snap deck.

## Hero

The hero headline "Revitalised" picks up an animated cyan-to-navy gradient
filtered through a fractal-noise SVG (`#c3-noise`). Source colours are
`#091020 → #0B2551 → #A4F4FD → #00d2ff` running across `200%` of the text
width, animated infinite-loop.

## Background video

One `<video autoplay loop muted playsinline>` fixed behind the deck. The
browser handles the loop natively. A radial dark veil (`.bg-video__veil`)
sits over it for legibility.

## Local preview

Open any HTML file directly in a browser, or:

```
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Stylesheet sections

`styles.css` is organised top-to-bottom as:

1. Tokens
2. Reset + base
3. Layout shell (background video, deck, snap-slide)
4. Components (liquid glass, buttons, nav, nav sheet)
5. Sections (hero, dashmock, triage, cloud, testimonials, pricing, final CTA)
6. Sub-pages (page-mode)
7. Responsive (mobile, tablet, desktop, short-screen)
8. Reduced motion
