import { response } from "express";

export const getEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Get events",
  });
};

export const createEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Create event",
  });
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
