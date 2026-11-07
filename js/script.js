/* Shared interactions for all pages */
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        document.body.classList.remove("menu-open");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks && navLinks.classList.contains("is-open")) menuButton.click();
  });
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  // A photo is optional while developing. Show the initials fallback if profile.jpg is absent.
  document.querySelectorAll(".profile-photo").forEach((photo) => {
    const fallback = photo.parentElement.querySelector(".photo-fallback");
    const showFallback = () => {
      photo.style.display = "none";
      if (fallback) fallback.style.zIndex = "2";
    };
    photo.addEventListener("error", showFallback);
    if (photo.complete && photo.naturalWidth === 0) showFallback();
    photo.addEventListener("load", () => {
      photo.style.display = "block";
      if (fallback) fallback.style.zIndex = "0";
    });
  });

  // A static site cannot send form submissions itself; prepare a message in the visitor's email app.
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailto = `mailto:singhrk0423@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const status = document.querySelector("#form-status");
      if (status) status.textContent = "Opening your email app. If nothing happens, email singhrk0423@gmail.com directly.";
      window.location.href = mailto;
    });
  }
})();
