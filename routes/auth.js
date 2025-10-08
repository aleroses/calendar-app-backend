/* 
  User paths / Auth
  host + /api/auth
*/

import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import {
  createUser,
  loginUser,
  revalidateToken,
} from "../controllers/auth.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

const router = Router();

router.post(
  "/new",
  [
    // Middlewares
    check("name", "The name is mandatory.").not().isEmpty(),
    check("email", "The email is mandatory.").isEmail(),
    check(
      "password",
      "The password must be 6 characters long."
    ).isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "The email is mandatory.").isEmail(),
    check(
      "password",
      "The password must be 6 characterslong."
    ).isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

router.get("/renew", validateJWT, revalidateToken);

// module.exports = router;
export { router };
