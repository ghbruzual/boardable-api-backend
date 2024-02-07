import express from "express";
import cors from "cors";

export const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  optionsSuccessStatus: 200
}

app.get("/", cors(corsOptions), (_req, res) => {
  res.json({ test: "Backend!" })
})