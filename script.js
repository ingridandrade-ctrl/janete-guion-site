/* Janete Guion — interações leves (vanilla JS) */
(function () {
  "use strict";

  /* ---- Reveal on scroll (com stagger suave por grupo) ---- */
  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    var groups = document.querySelectorAll(".cards-grid, .possivel__grid, .steps");
    groups.forEach(function (group) {
      var items = group.querySelectorAll(".reveal");
      items.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", (i * 80) + "ms");
      });
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
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
})();
