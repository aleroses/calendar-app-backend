/* 
  User paths / Auth
  host + /api/auth
*/

import { Router } from "express";
import { check } from "express-validator";
import {
  createUser,
  loginUser,
  revalidateToken,
} from "../controllers/auth.js";

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
  ],
  loginUser
);
router.get("/renew", revalidateToken);

// module.exports = router;
export { router };
