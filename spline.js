/* Lazy-load + pause Spline scenes.
 *
 * Markup contract:
 *   <spline-viewer data-spline-url="https://prod.spline.design/.../scene.splinecode"></spline-viewer>
 *
 * - With prefers-reduced-motion: never loads the scene. CSS swaps in a
 *   static fallback (or just hides the panel on sub-pages).
 * - Otherwise: scene is fetched only when its element enters the
 *   viewport (with a 200px lead-in), then display:none'd when it
 *   scrolls back out so the WebGL render loop pauses.
 */
(() => {
  const html = document.documentElement;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    html.classList.add('reduce-motion');
    return;
  }
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('spline-viewer[data-spline-url]');
  if (!targets.length) return;

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const el = entry.target;
      if (entry.isIntersecting) {
        if (!el.dataset.splineLoaded) {
          const url = el.dataset.splineUrl;
          if (url) {
            el.setAttribute('url', url);
            el.dataset.splineLoaded = '1';
          }
        }
        el.style.removeProperty('display');
      } else if (el.dataset.splineLoaded) {
        el.style.display = 'none';
      }
    }
  }, { rootMargin: '200px 0px', threshold: 0.01 });

  targets.forEach((el) => {
    if (el.dataset.splineUrl) io.observe(el);
  });
})();
