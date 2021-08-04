import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/greencycle", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", (req, res) => {
  res.send("Server is ready yay!");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is at http://localhost:${port}`);
});
