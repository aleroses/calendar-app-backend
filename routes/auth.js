/* 
  User paths / Auth
  host + /api/auth
*/

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("The / is required.");

  res.json({
    ok: true,
  });
});

// module.exports = router;
export { router };
