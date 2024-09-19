//import { updateTrolleyQuantity } from "../data/trolley.js";
import {
  toggleMenu,
  renderHistoryHTML,
  toggleSidebar,
  owlCarouselFunc,
} from "./app.js";

toggleSidebar();
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
