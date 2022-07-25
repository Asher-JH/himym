import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import { User } from "~models/user";

// Get single user
export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json({ data: {} });
});

// Get all users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(200).json({ data: users });
});

// Create user
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({});

  res.status(200).json({ message: "New user added." });
});

// Update user
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json({ message: "User updated." });
});

// Update user permissions
export const updateUserPermissions = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    res.status(200).json({ message: "User permissions updated." });
  }
);

// Delete user
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;

  res.status(200).json({ message: "User deleted." });
});
