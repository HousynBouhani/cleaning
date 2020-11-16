import express, { request, response } from "express";
import Admin from "../models/Admin.js";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auh.js";

const router = express.Router();

// @route  GET api/auth
// @desc to GET logged in admin
// @acesss private to admins

router.get("/", authMiddleware, async (request, response) => {
  try {
    const admin = await Admin.findById(request.admin.id).select(["-password","-email","-username"]);
    response.json(admin);
  } catch (error) {
    console.error(error.message);
    response.status(500).send("server error");
  }
});

// @route  POST api/auth
// @desc to authenticate admin
// @acesss private to admins

router.post(
  "/",
  [
    check("email", "Bitte geben Sie eine gültige E-Mail-Adresse ein").isEmail(),
    check("password", "Passwort wird benötigt").exists().not().isEmpty(),
  ],
  async (request, response) => {
    const errors = validationResult(request);
    //if there is erros send them in a response
    if (!errors.isEmpty()) {
      response.status(400).json({ msg: errors.array() });
      return;
    }
    // get email/password from request
    const { email, password } = request.body;
    try {
      //look if admin exists
      let admin = await Admin.findOne({ email: email });
      // if not tell user they don't have a account registred with email provided
      if (!admin) {
        response
          .status(400)
          .json({ msg: [{ msg: "Benutzer existiert nicht" }] });
        return;
      }
      // compare hashed password with password provided
      const isMatch = await bcrypt.compare(password, admin.password);
      // if not match tell them somehting is wrong

      if (!isMatch) {
        response
          .status(400)
          .json({
            msg: [{ msg: "Bitte überprüfen Sie Ihre E-Mail / Passwort" }],
          });
        return;
      }
      const payload = {
        admin: {
          id: admin.id,
        },
      };

      jwt.sign(payload, process.env.JWT_SECRET, (error, token) => {
        if (error) throw error;
        response.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      response.status(500).send("server error");
    }
  }
);

export default router;
