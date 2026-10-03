/* ═══════════ Bridal Kambal Set — demo interactions ═══════════
   DEMO CONFIG: replace with the business's real WhatsApp number (no +, no spaces)
   e.g. const WHATSAPP_NUMBER = "923215556677";
*/
const WHATSAPP_NUMBER = "923001234567";

(function () {
  "use strict";
  const wa = (text) =>
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);

  /* Year */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* Generic WhatsApp links */
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = wa("Assalam-o-Alaikum! Mujhe Bridal Kambal Set ke designs ke baare mein maloomat chahiye.");
  });

  /* Per-product order links */
  document.querySelectorAll("[data-order]").forEach((a) => {
    const product = a.getAttribute("data-order");
    a.href = wa("Assalam-o-Alaikum! Mujhe ye design order karna hai: *" + product + "*\n\nNaam:\nSheher / Address:");
  });

  /* Sticky nav shadow */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
      document.body.style.overflow = "";
    })
  );

  /* Product filters */
  const chips = document.querySelectorAll(".chip");
  const cards = document.querySelectorAll("#productGrid .card");
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const f = chip.dataset.filter;
      cards.forEach((card) => {
        const show = f === "all" || card.dataset.tags.split(" ").includes(f);
        card.classList.toggle("hide", !show);
      });
    })
  );

  /* Testimonial slider */
  const slides = document.querySelectorAll("#slider .slide");
  const dotsWrap = document.getElementById("dots");
  let current = 0, timer;

  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.setAttribute("aria-label", "Review " + (i + 1));
    if (i === 0) d.classList.add("active");
    d.addEventListener("click", () => go(i, true));
    dotsWrap.appendChild(d);
  });
  const dots = dotsWrap.querySelectorAll("button");

  function go(i, manual) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
    if (manual) restart();
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => go(current + 1), 6000);
  }
  restart();

  /* Scroll reveal */
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* Animated counters */
  const cio = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        cio.unobserve(el);
        const target = +el.dataset.count;
        const dur = 1400, t0 = performance.now();
        (function tick(t) {
          const p = Math.min((t - t0) / dur, 1);
          el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-PK");
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      }),
    { threshold: 0.5 }
  );
  document.querySelectorAll(".count").forEach((el) => cio.observe(el));
})();
