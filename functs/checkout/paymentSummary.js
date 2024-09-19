import { trolley } from "../../data/trolley.js";
import { getProduct } from "../../data/products.js";
import { modifyCents } from "../utilities/currency.js";
//import { ppp } from "../qrgen.js";

export function displayPaymentSummary() {
  let productPrice = 0;
  let shippingPrice = 0;
  let trolleyQuantity = 0;

  trolley.forEach((trolleyItem) => {
    const product = getProduct(trolleyItem.productId);
    productPrice += product.price * trolleyItem.quantity;

    shippingPrice = 0;

    trolleyQuantity += trolleyItem.quantity;
  });

  const totalBeforeTaxCents = productPrice + shippingPrice;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">Shopping Cost</div>

    <div class="payment-summary-row">
      <div>Total items (${trolleyQuantity}):</div>
      <div class="payment-summary-money">$${modifyCents(productPrice)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Delivery cost(Free):</div>
      <div class="payment-summary-money">$${modifyCents(shippingPrice)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Cost without tax:</div>
      <div class="payment-summary-money">$${modifyCents(
        totalBeforeTaxCents
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Tax fee(10%):</div>
      <div class="payment-summary-money">$${modifyCents(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Grand total:</div>
      <div class="payment-summary-money">$${modifyCents(totalCents)}</div>
    </div>
    <div class="p-btns-div">
      <button class="place-order-button button-primary">
      Next
      </button>
      <button class="return-shop-button button-primary">
        Back to Shopping
      </button>
    </div>

    
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}
