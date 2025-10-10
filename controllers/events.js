import { response } from "express";
import { Event } from "../models/Event.js";

export const getEvent = async (req, res = response) => {
  const events = await Event.find().populate("user", "name");

  res.json({
    ok: true,
    msg: "Get events",
    events,
  });
};

export const createEvent = async (req, res = response) => {
  // Verify that it have the event
  // console.log(req.body);

  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();

    res.json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Talk to the administrator.",
    });
  }
};

export const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Update event",
  });
};

export const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Delete event",
  });
};
