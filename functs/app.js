import { updateTrolleyQuantity } from "../data/trolley.js";
import { qrSummary } from "../data/qrSummary.js";

updateTrolleyQuantity();

//js for menu
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
//history html

export function renderHistoryHTML() {
  let historyHTML = "";

  qrSummary.forEach((item) => {
    historyHTML += `
  <div class="code-container">
          <div class="image">
            <img src="img/icons/qr-code-sharp.svg" alt="" />
          </div>
          <div class="date">Due:20/9/2024</div>
          <div class="status">Active</div>
          <div class="rebuy">
            <a href=""
              >Rebuy<img src="img/icons/arrow-redo-circle-outline.svg" alt=""
            /></a>
          </div>
          <div class="options">
            <img src="img/icons/download-outline.svg" alt="" />
            <img src="img/icons/share-social-outline.svg" alt="" />
            <img src="img/icons/trash-outline.svg" alt="" />
          </div>
        </div>
  `;
    /*
    if ((qrSummary.length = 0)) {
      document.querySelector(
        ".codes-grid"
      ).innerHTML = `<div>Due:20/9/2024</div>`;
    } else {
      document.querySelector(".codes-grid").innerHTML = historyHTML;
    }*/
    //here
    //document.querySelector(".codes-grid").innerHTML = historyHTML;
  });

  if (qrSummary.length == 0) {
    document.querySelector(
      ".codes-grid"
    ).innerHTML = `<div class="empty-shoplist"><p>You currently have zero active shoplists:</p>
      <p>Shop &amp; pay for Goods now: <span><a href="shop.html">click Here</a></span></p>
    </div>`;
  } else {
    document.querySelector(".codes-grid").innerHTML = historyHTML;
  }
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
      margin: 30,
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
          items: 2,
        },
        1000: {
          items: 4,
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