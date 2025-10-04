/* 
  User paths / Auth
  host + /api/auth
*/

import { Router } from "express";
import {
  createUser,
  loginUser,
  revalidateToken,
} from "../controllers/auth.js";

const router = Router();

router.post("/new", createUser);
router.post("/", loginUser);
router.get("/renew", revalidateToken);

// module.exports = router;
export { router };
