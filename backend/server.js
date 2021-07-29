import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready yay!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is at http://localhost:${port}`);
});
