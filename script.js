// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      const open = nav.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  initGridField();
});

// Ambient grid-field: a quiet nod to tower-defense grids, drawn behind the hero.
// Dots drift almost imperceptibly. Skips animation entirely if reduced motion is requested.
function initGridField() {
  const canvas = document.querySelector(".grid-field");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, dpr;
  const spacing = 42;
  let t = 0;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const cols = Math.ceil(w / spacing) + 1;
    const rows = Math.ceil(h / spacing) + 1;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing;
        const y = j * spacing;
        const wobble = reduceMotion ? 0 : Math.sin(t * 0.0006 + i * 0.6 + j * 0.4) * 1.4;
        const alpha = 0.10 + (reduceMotion ? 0 : 0.05 * Math.sin(t * 0.0008 + i + j));
        ctx.beginPath();
        ctx.arc(x, y + wobble, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(51, 68, 158, ${Math.max(0.05, alpha)})`;
        ctx.fill();
      }
    }
  }

  function loop() {
    t += 16;
    draw();
    if (!reduceMotion) requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  resize();
  if (reduceMotion) {
    draw();
  } else {
    requestAnimationFrame(loop);
  }
}
