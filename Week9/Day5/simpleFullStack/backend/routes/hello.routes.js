const { Router } = require("express");
const {
  helloResponse,
  helloUserResponse,
} = require("../controller/hello.controller");

const hello = Router();

hello.get("/hello", helloResponse);
hello.get("/hello/:user", helloUserResponse);

module.exports = { hello };
