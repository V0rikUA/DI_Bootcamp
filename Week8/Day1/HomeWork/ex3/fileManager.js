const fs = require("node:fs");

const readFile = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

const writeFile = (path, content) => {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Success!");
    }
  });
};

module.exports = { readFile, writeFile };
