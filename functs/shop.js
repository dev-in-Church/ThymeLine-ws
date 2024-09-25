import { trolley, addToTrolley, pushToMemory } from "../data/trolley.js";
import { products } from "../data/products.js";
import { modifyCents } from "./utilities/currency.js";
import { toggleMenu, toggleSidebar, renderHistoryHTML, pageLoader } from "./app.js";
import { displayTrolleySummary } from "./checkout/trolleySmmary.js";


pageLoader();
//sidebar javascript
toggleSidebar();
renderHistoryHTML();

let productsHTML = "";

products.forEach((product) => {
  product.count == undefined
    ? (product.count = "")
    : (product.count = product.count);
  productsHTML += `
    <div class="item">
      <img src="${product.image}" alt="" />
      <h5>${product.name}</h5>
      <div class="ppc">
      <div class="price">$${modifyCents(product.price)}</div>
      <div class="pc">${product.count}</div>
      </div>
      <button class="add-to-trolley-button button-primary js-add-to-trolley" data-product-id="${
        product.id
      }">
      add to trolley
      </button>
    </div>
  `;
});

document.querySelector(".js-productsList").innerHTML = productsHTML;

//displayTrolleySummary();

/*
function updateTrolleyQuantity() {
  trolley.forEach((trolleyItem) => {
    //pushToMemory();
  });
}
  */

document.querySelectorAll(".js-add-to-trolley").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId; //keep this code outside,, pass parameter'productId'

    //addToTrolley();works also without the parameter...[parameters functs]
    addToTrolley(productId); //pass the parameter when we call the function
    //pushToMemory();
    //updateTrolleyQuantity();
    //displayTrolleySummary();
  });
});

/*
let x = [1, 2, 3];
let y = [...x];
y.push(4);
console.log(y);
*/

/*log this and its functs*/
