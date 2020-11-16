import express from "express";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

const router = express.Router();


// @route  POST api/users
// @desc to register admins
// @acesss VERY PRIVATE ONLY TO DEVELOPERS TO ADD ADMINS

router.post("/", async (request, response) => {
  const { username, email, password } = request.body;

  try {
    // look for existing email
    let user = await Admin.findOne({ email: email });
    // if user is found show error
    if (user) {
      response.status(400).json({ msg: "User already exists" });
      return;
    }
    // create a user
    user = new Admin({
      username,
      email,
      password,
    });
    //hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    //save to DB
    await user.save();
    response.status(200).send("user saved");
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

export default router;
