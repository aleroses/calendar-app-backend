// const express = require("express");
import express from "express";
import "dotenv/config";
// import dotenv from "dotenv";

// dotenv.config({ path: ".env" });

console.log(process.env);

// Create the Express server
const app = express();

// Rutes
// Public directory
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   console.log("The / is required.");

//   res.json({
//     ok: true,
//   });
// });

// Listen to requests
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
