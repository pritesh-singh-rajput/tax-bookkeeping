// Back to top button
document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      document.getElementById("spinner").classList.add("show-transparent");

      const response = await fetch(
        "https://tax-bookkeeping-db.vercel.app/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        // Show the Bootstrap modal
        const thankYouModal = new bootstrap.Modal(
          document.getElementById("thankYouModal")
        );
        thankYouModal.show();

        // Reload the page when the modal is closed
        document
          .getElementById("thankYouModal")
          .addEventListener("hidden.bs.modal", function () {
            window.location.reload();
          });
      } else {
        document.getElementById("spinner").classList.remove("show-transparent");
        const errorModal = new bootstrap.Modal(
          document.getElementById("errorModal")
        );
        errorModal.show();
        // alert('Error: ' + result.error);
      }
    } catch (error) {
      document.getElementById("spinner").classList.remove("show-transparent");
      console.error("Error submitting form:", error);
      const errorModal = new bootstrap.Modal(
        document.getElementById("errorModal")
      );
      errorModal.show();
      // alert('An error occurred while submitting the form');
    }
  });

var navItems = document.querySelectorAll(".navbar-nav .nav-item");
var navbarCollapse = document.getElementById("navbarCollapse");

navItems.forEach(function (navItem) {
  navItem.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

document.getElementById("nav-explore").addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // attractions carousel
  $(".attractions-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: false,
    loop: false,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
    },
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000,
  });
})(jQuery);
