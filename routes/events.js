/* 
  Event Routes
  /api/events
*/

import { Router } from "express";
import { validateJWT } from "../middlewares/validate-jwt.js";
import {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.js";

const router = Router();

// All of them must undergo JWT validation.
router.use(validateJWT); // Everything is protected.

// Get events
router.get("/", getEvent);

// Create a new event
router.post("/", createEvent);

// Update event
router.put("/:id", updateEvent);

// Delete event
router.delete("/:id", deleteEvent);

export { router };
