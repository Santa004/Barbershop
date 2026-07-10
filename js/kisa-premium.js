(function () {
  "use strict";

  var BOOKING_URL = "https://bokahit.se/barber-main-page/790205074";
  var PHONE = "079-020 50 74";
  var PHONE_LINK = "tel:+46790205074";
  var ADDRESS = "Kisa torget, 590 37 Kisa";
  var HOURS = "Mån–Fre 10:00–18:00";
  var MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=Kisa+torget+590+37+Kisa";

  var SECTION_CTAS = {
    "Våra tjänster": "Redo för en ny look? Boka din tid på under en minut.",
    "Varför välja oss":
      "Upplev skillnaden själv – vi har tider lediga denna vecka.",
    "Våra produkter":
      "Besök oss i salongen och få personliga produktrekommendationer.",
    "Vad våra kunder säger":
      "Bli nästa nöjda kund – boka din tid hos oss idag.",
    "Se vårt hantverk": "Gillar du vad du ser? Boka din klippning nu.",
    "5,0 i betyg – nöjda kunder i Kisa":
      "5,0 i betyg av våra kunder – boka och upplev det själv.",
  };

  function isOpenNow() {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();
    if (day === 0 || day === 6) return false;
    return hour >= 10 && hour < 18;
  }

  function createBookingBar() {
    var open = isOpenNow();
    var bar = document.createElement("div");
    bar.className = "kisa-booking-bar";
    bar.setAttribute("role", "banner");
    bar.setAttribute("aria-label", "Snabb bokning");
    bar.innerHTML =
      '<div class="kisa-booking-bar__info">' +
      '<span class="kisa-booking-bar__status' +
      (open ? "" : " is-closed") +
      '">' +
      (open ? "Öppet nu" : "Stängt") +
      "</span>" +
      "<span>" +
      HOURS +
      "</span>" +
      '<span><a href="' +
      PHONE_LINK +
      '" style="color:inherit;text-decoration:none;">' +
      PHONE +
      "</a></span>" +
      "<span>" +
      ADDRESS +
      "</span>" +
      "</div>" +
      '<a href="' +
      BOOKING_URL +
      '" class="kisa-booking-bar__cta" target="_blank" rel="noopener noreferrer">Boka tid</a>';
    document.body.appendChild(bar);

    var lastY = 0;
    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        if (y > 400 && y > lastY) {
          bar.classList.add("is-visible");
        } else if (y < 200) {
          bar.classList.remove("is-visible");
        }
        lastY = y;
      },
      { passive: true }
    );
  }

  function createFloatingButton() {
    var btn = document.createElement("a");
    btn.href = BOOKING_URL;
    btn.className = "kisa-floating-book";
    btn.setAttribute("aria-label", "Boka tid hos Kisa Barbershop");
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>' +
      "Boka tid";
    document.body.appendChild(btn);
  }

  function injectSectionCTAs() {
    if (!document.body.classList.contains("kisa-home")) return;

    var headings = document.querySelectorAll("h2.display-2, h2.display-3");
    headings.forEach(function (h2) {
      var title = h2.textContent.trim();
      var msg = SECTION_CTAS[title];
      if (!msg) return;

      var section =
        h2.closest(".section") ||
        h2.closest('[class*="section"]') ||
        h2.parentElement;
      if (!section || section.querySelector(".kisa-section-cta")) return;

      var cta = document.createElement("div");
      cta.className = "kisa-section-cta";
      cta.innerHTML =
        '<p class="kisa-section-cta__text">' +
        msg +
        '</p><a href="' +
        BOOKING_URL +
        '" class="kisa-section-cta__btn" target="_blank" rel="noopener noreferrer">Boka tid</a>';
      section.appendChild(cta);
    });
  }

  function enhanceFooter() {
    var footerLogo = document.querySelector(".footer-logo-wrapper");
    if (!footerLogo || document.querySelector(".kisa-footer-booking")) return;

    var block = document.createElement("div");
    block.className = "kisa-footer-booking";
    block.innerHTML =
      "<h4>Boka din tid</h4>" +
      "<p>" +
      HOURS +
      " · " +
      ADDRESS +
      "</p>" +
      '<a href="' +
      BOOKING_URL +
      '" class="kisa-footer-book-btn" target="_blank" rel="noopener noreferrer">Boka tid online</a>';
    footerLogo.parentElement.appendChild(block);
  }

  function upgradeBookingLinks() {
    document.querySelectorAll('a[href="https://bokahit.se"]').forEach(function (
      link
    ) {
      link.href = BOOKING_URL;
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  function markHomePage() {
    if (
      window.location.pathname === "/" ||
      window.location.pathname.endsWith("index.html") ||
      window.location.pathname.endsWith("/")
    ) {
      document.body.classList.add("kisa-home");
    }
  }

  function init() {
    markHomePage();
    upgradeBookingLinks();
    createBookingBar();
    createFloatingButton();
    injectSectionCTAs();
    enhanceFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
