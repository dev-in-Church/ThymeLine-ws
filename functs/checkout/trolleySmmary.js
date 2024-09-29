import {
  trolley,
  removeFromTrolley,
  pushToMemory,
  updateTrolleyQuantity,
} from "../../data/trolley.js";
import { products, getProduct } from "../../data/products.js";
import { modifyCents } from "../utilities/currency.js";
import { displayPaymentSummary } from "./paymentSummary.js";

export function displayTrolleySummary() {
  let trolleySummaryHTML = "";
  //let trolleyQuantity = 0;

  trolley.forEach((trolleyItem) => {
    const productId = trolleyItem.productId;

    const matchingProduct = getProduct(productId);
    const ind = trolley.indexOf(trolleyItem);
    //console.log(ind);
    //trolleyQuantity += trolleyItem.quantity;

    trolleySummaryHTML += `
    
    <div class="trolley-item-container js-trolley-item-container-${
      matchingProduct.id
    }">
      <div class="item-no">${ind + 1}</div>
      <div class="trolley-item-details-grid">
        <div class="trolley-prod-img">
          <div>
             <img class="product-image" src="${matchingProduct.image}" />
          </div>
          <div class="phone-product-name">${matchingProduct.name}</div>
        </div>

        <div class="trolley-item-details">
          <div class="product-name">${matchingProduct.name}</div>
          <div class="price-div">
            <div class="product-price"><span>@</span> $${modifyCents(
              matchingProduct.price
            )}</div>
            <div class="total-products-price">
              Subtotal :
              <span>$${modifyCents(
                matchingProduct.price * trolleyItem.quantity
              )}</span>
            </div>
          </div>
          <div class="product-quantity">
            <div>
              <span>
                Quantity:
                <span class="minus js-minus" data-product-id="${
                  matchingProduct.id
                }"><</span
                ><span class="quantity-label">${trolleyItem.quantity}</span
                ><span class="plus js-plus" data-product-id="${
                  matchingProduct.id
                }">></span>
              </span>
            </div>

            <div>
                <a href="#" class="remove-trolley js-remove-trolley" data-product-id="${
                  matchingProduct.id
                }">
              <i class="fa fa-trash"></i>
            </a>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
    
  `;


    //console.log(trolleyQuantity);
    //document.querySelector(".js-count").innerHTML = trolleyQuantity;
    updateTrolleyQuantity();
  });

  function dispEmpty() {
    if (trolley.length == 0) {
      document.querySelector(".js-trolley").innerHTML =
        '<p>YOUR TROLLEY IS EMPTY! <a class="shop-link" href="shop.html">Shop Now </a></p>';
      document.querySelector(".js-trolley").classList.remove("order-summary");
      document.querySelector(".js-trolley").classList.add("order-summary-add");
    } else {
      document.querySelector(".js-trolley").innerHTML = trolleySummaryHTML;
    }

    updateTrolleyQuantity(); // had forgotten men

    //return trolley;
  }

  dispEmpty();

  //document.querySelector(".js-trolley").innerHTML = trolleySummaryHTML;
  //trolley item number
  document.querySelectorAll(".item-no").forEach((box) => {
    box.style.fontSize = "13px";
    if (box.innerHTML >= 10) {
      box.style.fontSize = "10px";
    }
  });

  document.querySelectorAll(".js-remove-trolley").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.dataset.productId;
      removeFromTrolley(productId);

      const container = document.querySelector(
        `.js-trolley-item-container-${productId}`
      );

      container.remove();

      displayTrolleySummary();
      displayPaymentSummary(); //recursion here
    });
  });

  document.querySelectorAll(".js-plus").forEach((plus) => {
    plus.addEventListener("click", () => {
      const productId = plus.dataset.productId;
      trolley.forEach((trolleyItem) => {
        const product_id = trolleyItem.productId;
        let matchingItem;
        if (product_id === productId) {
          matchingItem = trolleyItem;
        }

        if (matchingItem) {
          matchingItem.quantity++;
          pushToMemory();
          displayTrolleySummary();
          displayPaymentSummary();
        }
      });
    });
  });

  document.querySelectorAll(".js-minus").forEach((minus) => {
    minus.addEventListener("click", () => {
      const productId = minus.dataset.productId;
      trolley.forEach((trolleyItem) => {
        const product_id = trolleyItem.productId;
        let matchingItem;
        if (product_id === productId) {
          matchingItem = trolleyItem;
        }

        if (matchingItem) {
          matchingItem.quantity--;
          if (matchingItem.quantity == 0) {
            removeFromTrolley(productId); //parameter__productId

            const container = document.querySelector(
              `.js-trolley-item-container-${productId}`
            );

            container.remove();

            //displayTrolleySummary();
            //displayPaymentSummary();
          }
          pushToMemory();
          displayTrolleySummary();
          displayPaymentSummary();
        }
      });
    });
  });
  //displayTrolleySummary();
}
