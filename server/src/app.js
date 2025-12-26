import cors from "cors";
import express from "express";

import healthRoute from "./routes/health.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoute);

export default app;
