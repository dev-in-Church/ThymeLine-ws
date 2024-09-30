//import { updateTrolleyQuantity } from "../data/trolley.js";
import {
  toggleMenu,
  toggleSidebar,
  owlCarouselFunc,
  pageLoader,
} from "./app.js";
// import { renderHistoryHTML } from "../data/qrSummary.js";

pageLoader();
// toggleSidebar();
//toggleMenu();
renderHistoryHTML();
owlCarouselFunc();
/*
window.addEventListener("deviceorientation", (event) => {
  console.log("Device Orientation:", event.alpha, event.beta, event.gamma);
});
*/

/*
navigator.getBattery().then((battery) => {
  console.log("Battery Level:", battery.level * 100 + "%");
  console.log("Charging:", battery.charging ? "Yes" : "No");
});

Notification.requestPermission().then((permission) => {
  new Notification("Hello, World!");
});
*/

console.log(new Date().getFullYear());
