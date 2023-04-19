const express = require("express");
const cors = require("cors");
const app = express();
let PORT = process.env.PORT || 3000;

app.use(cors);

app.get("/get", (req, res) => {
  res.send("HEllO WORLD");
});

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:" + PORT);
});
