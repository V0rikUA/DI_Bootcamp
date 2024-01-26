const express = require("express");
const cors = require("cors");
const { hello } = require("./routes/hello.routes");
const app = express();
const port = 5000;

app.use(cors());
app.use("/", hello);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
