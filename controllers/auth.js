import { response } from "express";

export const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

export const loginUser = (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

export const revalidateToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

// module.exports = { createUser };
