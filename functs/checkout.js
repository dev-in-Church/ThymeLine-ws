import { trolley } from "../data/trolley.js";
import { displayTrolleySummary } from "./checkout/trolleySmmary.js";
import { displayPaymentSummary } from "./checkout/paymentSummary.js";
//import "../data/trolley-oop.js";
import { toggleMenu, pageLoader } from "./app.js";

pageLoader();

displayTrolleySummary();
displayPaymentSummary();

document.querySelector(".place-order-button").addEventListener("click", () => {
  if (trolley.length > 0) {
    window.open("qrcode.html", "_parent");
  } else {
    alert(
      "Can't continue with an empty cart!\nPlease do some shopping to continue"
    );
  }
});

document.querySelector(".return-shop-button").addEventListener("click", () => {
  window.open("shop.html", "_parent");
});
