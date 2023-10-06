const express = require("express");
const SignupRoute = express.Router();
const UserModel = require("../Models/UsersModel");

SignupRoute.post("/signup", async (req, res) => {
  const { email, name } = req.body;
  console.log("email", email, "name", name)
  const userData = await UserModel.find({ email });

  console.log("userData", userData);

  try {
    if (userData.length > 0) {
      return res.send({ message: "User already exists" });
    } else {
      const user = new UserModel({ email, name });
      await user.save();
      return res.status(200).send({ message: "Successfull user sign-up" });
    }
  } catch (err) {
    return res.status(403).send({ message: "404 error Url is not working" });
  }
});

module.exports = SignupRoute
