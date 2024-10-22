import { country_code } from "./country.js";
import { products } from "../../data/products.js";
import { trolley } from "../../data/trolley.js";

export function modifyCents(price) {
  return (Math.round(price) / 100).toFixed(2);
}

//currency converter
// Your base currency (e.g., USD)
const baseCurrency = "USD";

// Object to store current exchange rates
let exchangeRates = {};

// Function to fetch exchange rates from a currency API
export async function fetchExchangeRates() {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
    );
    const data = await response.json();
    exchangeRates = data.rates; // Store exchange rates in a global variable
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

// Function to convert prices when a new currency is selected
export function convertPrices(expectedProducts) {
  const selectedCurrency = document.getElementById("currency-selector").value;

  const rate = exchangeRates[selectedCurrency]; // Get exchange rate for the selected currency
  // console.log(exchangeRates);

  // console.log(rate);

  expectedProducts.forEach((product) => {
    const convertedPrice = product.price * rate;
    let matchingCountry;
    country_code.forEach((country) => {
      if (country.code === selectedCurrency) {
        matchingCountry = country;
      }
    });
    document.getElementById(`product-price-${product.id}`).textContent = `${
      matchingCountry.symbol_native
    } ${modifyCents(convertedPrice)}`;
  });

  currChange(expectedProducts);
  changeFlag();
}

export function currChange(expectedProducts) {
  document
    .getElementById("currency-selector")
    .addEventListener("change", () => {
      // changeFlag();
      // function convertSpecificPrices() {}
      convertPrices(expectedProducts);
      changeFlag();
    });
}

//currOPtions
export function renderCurr() {
  let optionsHTML = "";
  country_code.forEach((code) => {
    optionsHTML += `<option value="${code.code}">${code.code}</option>`;
  });
  document.getElementById("currency-selector").innerHTML = optionsHTML;
}

//change flag
export function changeFlag() {
  let matchingCountry;
  country_code.forEach((code) => {
    const selectedCurrency = document.getElementById("currency-selector").value;
    if (code.code === selectedCurrency) {
      matchingCountry = code;
    }
  });

  document.getElementById("select-flag").innerHTML = matchingCountry.flag;
}
