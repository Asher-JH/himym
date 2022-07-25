import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";

export const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const validateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      console.log(err);
      return res.status(422).json({ message: "Validation errors", error: err });
    }
  };
};
