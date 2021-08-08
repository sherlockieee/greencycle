import express from "express";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).send({ message: "Invalid email" });
      return;
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    } else {
      res.status(401).send({ message: "Invalid password" });
    }
  })
);

export default userRouter;
