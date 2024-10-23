//import { updateTrolleyQuantity } from "../data/trolley.js";
import {
  toggleMenu,
  toggleSidebar,
  owlCarouselFunc,
  pageLoader,
} from "./app.js";
import { renderHistoryHTML } from "../data/qrSummary.js";
import { ftrProducts } from "../data/ftrProducts.js";
import { products } from "../data/products.js";
import { modifyCents } from "./utilities/currency.js";
// import { renderCurr, changeFlag, currChange } from "./utilities/currency.js";

pageLoader();
toggleSidebar();
// renderCurr();
// changeFlag();
// currChange(products);
renderHistoryHTML();
owlCarouselFunc();
// owlCarouselFunc2();

//latest products
const latestProducts = products.slice(products.length - 15);
let latestProductsHTML = "";
latestProducts.forEach((product) => {
  latestProductsHTML += `
  <div class="item">
    <div class="thumb">
      <div class="hover-content">
        <ul>
          <li>
            <a href="single-product.html"
              ><i class="fa fa-eye"></i
            ></a>
          </li>
          <li>
            <a href="single-product.html"
              ><i class="fa fa-star"></i
            ></a>
          </li>
          <li>
            <a href="single-product.html"
              ><i class="fa fa-shopping-cart"></i
            ></a>
          </li>
        </ul>
      </div>

      <div class="late-prod">
        <img src="${product.image}" alt="" />
      </div>
    </div>
    <div class="down-content">
      <h4>${product.name}</h4>
      <ul class="stars">
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
      </ul>
      <span>$${modifyCents(product.price)}</span>
    </div>
  </div>
  
  `;
  document.getElementById("latest-carousel").innerHTML = latestProductsHTML;
});

// Reinitialize Owl Carousel after dynamically adding items
$(".owl-carousel").owlCarousel("refresh");

//featured products
let ftrProductsHTML = "";
ftrProducts.forEach((product) => {
  ftrProductsHTML += `
    <div class="products-single">
          <div class="f-img-div">
            <img src="${product.image}" class="f-img" alt="Image"/>
            <div class="mask-icon">
              <ul>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="View"
                    ><i class="fa fa-eye"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Compare"
                    ><i class="fa fa-shopping-cart"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Add to Wishlist"
                    ><i class="fa fa-heart"></i
                  ></a>
                </li>
              </ul>
              <a class="cart" href="#">Add to Trolley</a>
            </div>
          </div>
          <div class="dwn-text">
            <h4>${product.name}</h4>
            <h5>$${product.price}</h5>
          </div>
        </div>
  
  `;

  document.querySelector(".f-container").innerHTML = ftrProductsHTML;
  // currChange(ftrProducts);
});
