/* Janete Guion — interações leves (vanilla JS) */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = !window.matchMedia ||
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---- Barra de progresso de scroll ---- */
  var bar = document.getElementById("scrollbar");
  var fab = document.getElementById("wfab");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? h.scrollTop / max : 0;
    if (bar) bar.style.transform = "scaleX(" + p + ")";
    if (fab) fab.classList.toggle("is-shown", h.scrollTop > 560);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll (com stagger suave por grupo) ---- */
  if (!reduceMotion) {
    var groups = document.querySelectorAll(".cards-grid, .possivel__grid, .steps");
    groups.forEach(function (group) {
      group.querySelectorAll(".reveal").forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", (i * 80) + "ms");
      });
    });
  }

  var revealEls = document.querySelectorAll(".reveal, .reveal-img");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Tilt 3D nos cards (segue o cursor) ---- */
  if (!reduceMotion && finePointer) {
    var tiltCards = document.querySelectorAll(".card, .pcard");
    tiltCards.forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = "transform .12s var(--ease, ease)";
        card.style.transform =
          "perspective(1100px) rotateX(" + (-py * 5).toFixed(2) + "deg) rotateY(" +
          (px * 5).toFixed(2) + "deg) translateY(-6px)";
      });
      card.addEventListener("pointerleave", function () {
        card.style.transition = "";
        card.style.transform = "";
      });
    });
  }
})();
