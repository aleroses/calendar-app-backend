import { response } from "express";
import jwt from "jsonwebtoken";

export const validateJWT = (req, res = response, next) => {
  // x-token headers
  const token = req.header("x-token");

  // console.log(token);

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "There isn't token in the request.",
    });
  }

  try {
    const { uid, name } = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED
    );

    // console.log(payload);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Invalid token.",
    });
  }

  next();
};
