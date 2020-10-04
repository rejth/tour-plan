// Hotel slider
var hotelSlider = new Swiper('.hotel-slider__container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow"
});

// Review slider
var reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  }
});

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--visible");
  document
    .querySelector("body")
    .classList.toggle("no-scroll");
});