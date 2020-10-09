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
    autoHeight: true,
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
  modalButton.on("click", openModalWindow);
  closeModalButton.on("click", closeModalWindow);

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

  // Form Validator
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid animate__animated animate__shakeX",
      rules: {
        name: "required",
        phone: {
          required: true,
          minlength: 11
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Please specify your name"
        },
        phone: {
          required: "We need your phone to contact you",
          minlength: "Your phone number must be at least 11 digits long"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
    });
  });

  AOS.init();

});