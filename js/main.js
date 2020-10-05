$(document).ready(function () {
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

  // Menu Button
  var menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-menu")
      .classList.toggle("navbar-menu--visible");
    document
      .querySelector("body")
      .classList.toggle("no-scroll");
  });

  // View other options button to call modal window
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  // var ESCCloseButton = $("[data-toggle=onkeydown]");
  modalButton.on("click", openModalWindow);
  closeModalButton.on("click", closeModalWindow);
  // ESCCloseButton.on("keydown", ESCloseModalWindow);

  function openModalWindow() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  };

  function closeModalWindow(event) {
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  // function ESCloseModalWindow(event) {
  //   if (event.keyCode == 27)
  //     console.log("scsdc")
  // };

});