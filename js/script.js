
// ==========================================
// RANJAN KUMAR SINGH - PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  // 1. UPDATE FOOTER YEAR
  const yearElements = document.querySelectorAll("#year");

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  // 2. MOBILE NAVIGATION
  const menuToggle = document.querySelector(
    ".menu-toggle, #menu-toggle, .hamburger"
  );

  const navLinks = document.querySelector(
    ".nav-links"
  );

  if (menuToggle && navLinks) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("show");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  // 3. ACTIVE NAVIGATION LINK
  const currentPage = window.location.pathname
    .split("/")
    .pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (!linkPage) return;

    const cleanLink = linkPage.split("#")[0];

    if (cleanLink === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });


  // 4. SCROLL REVEAL ANIMATION
  const revealElements = document.querySelectorAll(
    ".card, .project-card, .skill-card, " +
    ".timeline-item, .education-card, " +
    ".experience-card, .achievement-card, " +
    ".certificate-card, .contact-item"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries, currentObserver) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(function (element) {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }


  // 5. CONTACT FORM VALIDATION
  const contactForm = document.querySelector(
    "#contact-form, .contact-form"
  );

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      const nameField = contactForm.querySelector(
        '[name="name"], #name'
      );

      const emailField = contactForm.querySelector(
        '[name="email"], #email'
      );

      const messageField = contactForm.querySelector(
        '[name="message"], #message'
      );

      if (!contactForm.checkValidity()) {
        event.preventDefault();
        contactForm.reportValidity();
        return;
      }

      if (
        nameField && !nameField.value.trim() ||
        emailField && !emailField.value.trim() ||
        messageField && !messageField.value.trim()
      ) {
        event.preventDefault();
        alert("Please fill in all required fields.");
        return;
      }

      if (emailField) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailField.value.trim())) {
          event.preventDefault();
          alert("Please enter a valid email address.");
          emailField.focus();
        }
      }

      // Note: Validation alone does not send or store messages.
      // Configure a backend or form service to receive submissions.
    });
  }


  // 6. SMOOTH SCROLL FOR SAME-PAGE LINKS
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // 7. BACK TO TOP BUTTON
  const backToTop = document.querySelector(
    "#back-to-top, .back-to-top"
  );

  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle(
        "show",
        window.scrollY > 300
      );
    });

    backToTop.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  // 8. CONSOLE MESSAGE
  console.log(
    "%cWelcome to Ranjan Kumar Singh's Portfolio!",
    "color: #ffd60a; font-size: 16px; font-weight: bold;"
  );

});
