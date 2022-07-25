import express from "express";
import { getCast } from "~controllers/cast";

const router = express.Router();

router.get("/", getCast);

export { router as castRouter };
