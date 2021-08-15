import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils/generateToken.js";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty!" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        cartItemsPrice: req.body.cartItemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .staus(201)
        .send({ message: "New order created", order: createdOrder });
    }
  })
);

export default orderRouter;
