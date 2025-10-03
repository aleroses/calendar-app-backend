// const express = require("express");
import express from "express";

// Create the Express server
const app = express();

// Rutes
app.get("/", (req, res) => {
  console.log("The / is required.");

  res.json({
    ok: true,
  });
});

// Listen to requests
app.listen(4000, () => {
  console.log("Server running on port");
});
