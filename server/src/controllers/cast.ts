import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import { Cast } from "~models/cast";

export const getCast = asyncHandler(async (req: Request, res: Response) => {
  const casts = await Cast.find({});

  res.status(200).json(casts);
});
