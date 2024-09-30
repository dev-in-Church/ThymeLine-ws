import { updateTrolleyQuantity } from "../data/trolley.js";
import { qrSummary } from "../data/qrSummary.js";
// import { renderHistoryHTML } from "../data/qrSummary.js";

updateTrolleyQuantity();
// renderHistoryHTML();

// js for menu
export function toggleMenu() {
  const menuIcon = document.querySelector(".js-menu-icon");
  var navBar = document.querySelector(".navbar-s");

  navBar.style.maxHeight = "0px";

  menuIcon.addEventListener("click", () => {
    navBar.style.maxHeight == "0px"
      ? (navBar.style.maxHeight = "500px")
      : (navBar.style.maxHeight = "0px");
  });
}

toggleMenu();

export function toggleSidebar() {
  const qrImg = document.querySelector(".qrcode-img");
  const sidebar = document.querySelector(".sidebar");
  const closeSide = document.querySelector(".s-b-close");

  //sidebar.style.display = "none";

  qrImg.addEventListener("click", () => {
    sidebar.style.display = "flex";
  });

  closeSide.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
}

/*
document.getElementById("newqr").addEventListener("click", () => {
  history.push(2);
  console.log(history);
});
*/

export function owlCarouselFunc() {
  (function ($) {
    "use strict";

    ///popular categories carousel
    $(".owl-categories-item").owlCarousel({
      items: 5,
      loop: true,
      dots: true,
      nav: true,
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".owl-men-item").owlCarousel({
      items: 5,
      loop: true,
      smartSpeed: 1000,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      nav: true,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    $(document).ready(function () {
      $(document).on("scroll" /*, onScroll*/); //error-onScroll not defined\\

      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $(".scroll-to-section a").each(function () {
          $(this).removeClass("active");
        });
        $(this).addClass("active");

        var target = this.hash,
          menu = target;
        var target = $(this.hash);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 79,
            },
            500,
            "swing",
            function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
            }
          );
      });
    });
  })(window.jQuery);
}

export function pageLoader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
      document.body.removeChild("loader");
    });
  });
}
