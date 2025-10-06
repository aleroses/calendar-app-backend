import { response } from "express";
import { validationResult } from "express-validator";

export const createUser = (req, res = response) => {
  // console.log(req.body);
  const { name, email, password } = req.body;

  // Error handling
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

export const loginUser = (req, res = response) => {
  // Error handling
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

export const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

// module.exports = { createUser };
