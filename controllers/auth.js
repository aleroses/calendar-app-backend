import { response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { generateJWT } from "../helpers/jwt.js";

export const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "This email address is already in use.",
      });
    }

    user = new User(req.body);

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Generate our JWT (JSON Web Token)
    const token = await generateJWT(user.id, user.name);

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Please speak to the manager!",
    });
  }
};

export const loginUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "The user doesn't exist with that email address.",
      });
    }

    // Confirm passwords
    const validPassword = bcrypt.compareSync(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Incorrect password",
      });
    }

    // Generate our JWT (JSON Web Token)
    const token = await generateJWT(user.id, user.name);

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Please speak to the manager!",
    });
  }
};

export const revalidateToken = async (
  req,
  res = response
) => {
  const { uid, name } = req;

  // Generate a new JWT and return it in this request.
  const token = await generateJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};
