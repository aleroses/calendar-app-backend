import express from "express";
import cors from "cors";
import "dotenv/config";
import { router as authRoutes } from "./routes/auth.js";
import { dbConnection } from "./database/config.js";

// Create the Express server
const app = express();

// Data Base
dbConnection();

// CORS
app.use(cors());

// Public directory
app.use(express.static("public"));

// Reading and parsing the body
app.use(express.json());

// Rutes
app.use("/api/auth", authRoutes);
// TODO: CRUD: Events

// Listen to requests
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
