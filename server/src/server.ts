import "dotenv/config";
import express, { Request, Response } from "express";

import { usersRouter } from "~routes/users";
import { errorHandler } from "~middlewares/error-handler";
import { connectDB } from "~configs/db";

// Connect to Mongo
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/users", usersRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀 [server]: Server is running at http://localhost:${port}`);
});
