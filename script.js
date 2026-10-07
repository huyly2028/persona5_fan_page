// Gallery lightbox
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.createElement("img");
lightbox.append(lightboxImage);
const lightboxClose = lightbox.querySelector(".lightbox-close");

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.showModal();
}

galleryImages.forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
});

lightboxClose.addEventListener("click", () => lightbox.close());

// Clicking the dark backdrop around the image targets the dialog itself
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

// Back to top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 400);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

function setMenuOpen(isOpen) {
  siteNav.classList.toggle("open", isOpen);
}

navToggle.addEventListener("click", () => {
  setMenuOpen(!siteNav.classList.contains("open"));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
