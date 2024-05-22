const { colorfulMessage } = require("./colorful-message");
const readFileAndDisplay = require("./files/read-file");
const { greet } = require("./greeting");

const challenge = () => {
  greet("Adam");
  colorfulMessage();
  readFileAndDisplay();
};

challenge();
