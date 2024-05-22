const { products } = require("./products");

const getProductInfo = (name) => {
  return products.find((item) => item.name == name);
};

console.log(getProductInfo("banana"));
