const express = require("express");
const cors = require("cors");
const app = express();
let PORT = process.env.PORT;

app.use(cors);
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile("./index.html");
});
app.get("/get", (req, res) => {
  res.send("Hey Hello");
});

app.listen(PORT, () => {
  console.log(PORT);
});
