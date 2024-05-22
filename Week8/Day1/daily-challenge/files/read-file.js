const fs = require("fs");
const path = require("path");

function readFileAndDisplay() {
  const filePath = path.join(__dirname, "file-data.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file-data.txt:", err);
      return;
    }

    console.log("Content of file-data.txt:");
    console.log(data);
  });
}

module.exports = readFileAndDisplay;
