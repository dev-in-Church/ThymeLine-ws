import { trolley, addToTrolley, pushToMemory } from "../data/trolley.js";
import { products } from "../data/products.js";
import { modifyCents } from "./utilities/currency.js";
import { toggleMenu, toggleSidebar, pageLoader } from "./app.js";
import { displayTrolleySummary } from "./checkout/trolleySmmary.js";
import { renderHistoryHTML } from "../data/qrSummary.js";
import { country_code } from "./utilities/country.js";
import {
  convertPrices,
  renderCurr,
  fetchExchangeRates,
} from "./utilities/currency.js";

pageLoader();
toggleSidebar();
renderHistoryHTML();

////~~search functionality

renderCurr();

// Function to display products
export function displayProducts(productsToDisplay) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear the previous list

  // Check if there are products to display
  if (productsToDisplay.length > 0) {
    let productsHTML = "";
    productsToDisplay.forEach((product) => {
      productsHTML += `
    <div class="item">
      <img src="${product.image}" alt="" />
      <h5>${product.name}</h5>
      <div class="ppc" id="ppc">
        <div class="price" id="product-price-${product.id}"></div>
      </div>
      <button class="add-to-trolley-button button-primary js-add-to-trolley" data-product-id="${product.id}">
      add to trolley
      </button>
    </div>
  `;
    });
    document.getElementById("productList").innerHTML = productsHTML;
    convertPrices(productsToDisplay);
  } else {
    document.getElementById("productList").innerHTML = "no products found";
  }

  document.querySelectorAll(".js-add-to-trolley").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      addToTrolley(productId);
    });
  });
}

//capture category selection
const categoryFilter = document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  filterProductsByCategory(selectedCategory);
});

//filter products by category
function filterProductsByCategory(category) {
  let filteredProducts;

  // If "All Categories" is selected, show all products
  if (category === "all") {
    filteredProducts = products;
  } else {
    // Filter products based on the selected category
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  // Display the filtered products
  displayProducts(filteredProducts);
}

// Function to filter products and display them
function filterAndDisplayProducts(searchTerm) {
  // Filter products based on search term (case insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  displayProducts(filteredProducts);
  // convertPrices(filteredProducts);
  // currChange(filteredProducts);
}

// Function to display all products initially
// Call fetchExchangeRates on page load to get exchange rates
window.onload = async () => {
  await fetchExchangeRates(); // Fetch the exchange rates before user selects a currency
  // convertPrices(); // Convert prices to the selected currency (default is USD)
  displayProducts(products);
};
// window.onload = () => {
//   displayProducts(products); // Display all products on page load
//   // convertPrices(products);
//   // currChange(products);
// };

// Event listener for the search button
document.getElementById("search-icon").addEventListener("click", function () {
  const searchTerm = document.getElementById("searchBar").value;
  filterAndDisplayProducts(searchTerm);
});

// Event listener for the Enter key press in the search input field
document
  .getElementById("searchBar")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const searchTerm = document.getElementById("searchBar").value;
      filterAndDisplayProducts(searchTerm);
    }
  });
