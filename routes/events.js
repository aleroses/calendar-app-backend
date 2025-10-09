/* 
  Event Routes
  /api/events
*/

import { Router } from "express";
import { check } from "express-validator";
import { isDate } from "../helpers/isDate.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.js";
import { validateFields } from "../middlewares/validate-fields.js";

const router = Router();

// All of them must undergo JWT validation.
router.use(validateJWT); // Everything is protected.

// Get events
router.get("/", getEvent);

// Create a new event
router.post(
  "/",
  [
    check("title", "The title is mandatory!").not().isEmpty(),
    check("start", "The start date is mandatory!").custom(
      isDate
    ),
    check("end", "The completion date is mandatory!").custom(
      isDate
    ),
    validateFields,
  ],
  createEvent
);

// Update event
router.put("/:id", updateEvent);

// Delete event
router.delete("/:id", deleteEvent);

export { router };
