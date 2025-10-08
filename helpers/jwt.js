/* import jwt from "jsonwebtoken";

export const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.log(err);

          reject("The token couldn't be generated!!!");
        }

        resolve(token);
      }
    );
  });
}; */

import jwt from "jsonwebtoken";

export const generateJWT = async (uid, name) => {
  const payload = { uid, name };
  const secret = process.env.SECRET_JWT_SEED;

  try {
    const token = await jwt.sign(payload, secret, {
      expiresIn: "2h",
    });
    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("The token couldn't be generated!!!");
  }
};
