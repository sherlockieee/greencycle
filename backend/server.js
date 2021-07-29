const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready yay!");
});

app.listen(5000, () => {
  console.log("Server is at http://localhost:5000");
});
