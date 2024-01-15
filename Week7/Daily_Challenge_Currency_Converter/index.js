import { api } from "./utils/api.js";

const fromSelect = document.getElementById("currencyFrom");
const toSelect = document.getElementById("currencyTo");

const populateCurrencies = async (event) => {
  Promise.resolve(api.getSupportedCodes()).then((data) => {
    Object.keys(data["conversion_rates"]).map((code) => {});
  });
};

document.body.addEventListener("onload", populateCurrencies);
