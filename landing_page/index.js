//slideshows
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("customers-review");
  const dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].className += " hidden";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].classList.remove("hidden");
  dots[slideIndex].className += " active";
}

// scroll to view
function scrollToView(id) {
  const targetElement = document.getElementById(id);
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
function focusOnInput(id) {
  const targetInput = document.getElementById(id);
  targetInput.scrollIntoView({ behavior: "smooth" });
  targetInput.focus();
}
