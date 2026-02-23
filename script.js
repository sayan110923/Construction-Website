const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    mainNav.classList.toggle("open");
  });

  mainNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      navToggle.classList.remove("active");
      mainNav.classList.remove("open");
    }
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple number counter animation for stats
const statNumbers = document.querySelectorAll(".stat__number");
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  const triggerPoint = window.innerHeight * 0.85;

  statNumbers.forEach((num) => {
    const rect = num.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      const target = parseInt(num.getAttribute("data-target"), 10);
      let current = 0;
      const duration = 1200;
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        current = Math.floor(progress * target);
        num.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }
  });
  statsAnimated = true;
}

window.addEventListener("scroll", animateStats, { passive: true });
window.addEventListener("load", animateStats);

// Scroll reveal effect
const revealSections = document.querySelectorAll(
  ".section, .service-card, .project-card, .testimonial, .contact-form"
);

revealSections.forEach((el) => el.classList.add("reveal"));

function handleReveal() {
  const triggerPoint = window.innerHeight * 0.88;
  revealSections.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal, { passive: true });
window.addEventListener("load", handleReveal);

// Simple contact form handling
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formNote.textContent =
        "Please fill in your name, email, and project details.";
      formNote.classList.remove("form__note--success");
      formNote.classList.add("form__note--error");
      return;
    }

    formNote.textContent =
      "Thank you! Your request has been recorded. We will contact you shortly.";
    formNote.classList.remove("form__note--error");
    formNote.classList.add("form__note--success");

    contactForm.reset();
  });
}

