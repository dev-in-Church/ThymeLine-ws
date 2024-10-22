export function sortByCategory() {
  //display filtered products
  function displayProducts(productArray) {
    const productList = document.getElementById("productList");

    // Clear previous results
    productList.innerHTML = "";

    // If no products found
    if (productArray.length === 0) {
      productList.innerHTML = "<p>No products found in this category</p>";
      return;
    }

    // Loop through the filtered products and render them
    let productsHTML = "";

    productArray.forEach((product) => {
      // product.count == undefined
      //   ? (product.count = "")
      //   : (product.count = product.count);
      productsHTML += `
    <div class="item">
      <img src="${product.image}" alt="" />
      <h5>${product.name}</h5>
      <div class="ppc">
      <div class="price" id="product-price-${product.id}"></div>
      
      </div>
      <button class="add-to-trolley-button button-primary js-add-to-trolley" data-product-id="${product.id}">
      add to trolley
      </button>
    </div>
  `;
    });

    document.getElementById("productList").innerHTML = productsHTML;
  }

  //capture category selection
  const categoryFilter = document.getElementById("categoryFilter");

  categoryFilter.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    filterProductsByCategory(selectedCategory);
  });

  // Function to display all products initially
  window.onload = () => {
    displayProducts(products); // Display all products on page load
  };

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
}

// document.getElementById("currency-selector").addEventListener("change", () => {
//   changeFlag();
//   convertPrices();
// });

// function changeFlag() {
//   let matchingCountry;
//   country_code.forEach((code) => {
//     const selectedCurrency = document.getElementById("currency-selector").value;
//     if (code.code === selectedCurrency) {
//       matchingCountry = code;
//     }
//   });

//   document.getElementById("select-flag").innerHTML =
//     matchingCountry.symbol_native;
// }

// changeFlag();
