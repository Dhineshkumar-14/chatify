import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.route.js"


dotenv.config()
const app = express();
const PORT = process.env.PORT || 90;
app.get("/api",authRoutes)
app.listen(PORT, () => {
  connectDB()
  console.log("Sever started at http://localhost:" + PORT);
});
