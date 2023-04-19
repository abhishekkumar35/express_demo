const express = require("express");
const cors = require("cors");
const app = express();
let PORT = process.env.PORT || 3000;

app.use(cors);

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:" + PORT);
});
