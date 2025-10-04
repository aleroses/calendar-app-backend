import { response } from "express";

export const createUser = (req, res = response) => {
  // console.log(req.body);
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "The name must be 5 letters long.",
    });
  }

  res.json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

export const loginUser = (req, res = response) => {
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
