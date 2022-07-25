import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import { UserRole } from "~constants/index";
import { User } from "~models/user";

type CreateUserRequestBody = {
  name: string;
  email: string;
  nickname?: string;
  catchPhrase?: string;
  role?: UserRole;
  profileImg?: string;
};

type UpdateUserRequestBody = {
  name: string;
  nickname?: string;
  catchPhrase?: string;
  role?: UserRole;
  profileImg?: string;
};

type UpdateUserPermissionsRequestBody = {
  addUser?: boolean;
  updateUser?: boolean;
  deleteUser?: boolean;
  addGame?: boolean;
  updateGame?: boolean;
  deleteGame?: boolean;
};

// Get single user
export const getUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found.");
    }

    res.status(200).json({ data: user });
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching user.");
  }
});

// Get all users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  try {
    const users = await User.find({});

    res.status(200).json({ data: users });
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching all users.");
  }
});

// Create user
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { name, email, nickname, catchPhrase, role, profileImg } =
      req.body as CreateUserRequestBody;

    const emailExists = await User.find({ email });

    if (emailExists) {
      throw new Error("Email already exists.");
    }

    const user = new User({
      name,
      email,
      nickname: nickname || "",
      catchPhrase: catchPhrase || "",
      role: role || UserRole.ADMIN,
      profileImg: profileImg || "",
      isActive: true,
    });

    await user.save();

    res.status(200).json({ message: "New user added.", data: user });
  } catch (err) {
    console.log(err);
    throw new Error("Error creating new user.");
  }
});

// Update user
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, nickname, profileImg, catchPhrase, role } =
      req.body as UpdateUserRequestBody;

    const user = await User.findByIdAndUpdate(id, {
      name,
      nickname,
      profileImg,
      catchPhrase,
      role,
    });

    res.status(200).json({ message: "User updated.", data: user });
  } catch (err) {
    console.log(err);
    throw new Error("Error updating user.");
  }
});

// Update user permissions
export const updateUserPermissions = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const {
        addGame,
        updateGame,
        deleteGame,
        addUser,
        updateUser,
        deleteUser,
      } = req.body as UpdateUserPermissionsRequestBody;

      const user = await User.findById(id);

      if (!user) {
        throw new Error("User does not exist.");
      }

      await user.update({}, { omitUndefined: true });

      res.status(200).json({ message: "User updated." });
    } catch (err) {
      console.log(err);
      throw new Error("Error updating user permissions.");
    }
  }
);

// Delete user
export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    res.status(200).json({ message: "User updated." });
  } catch (err) {
    console.log(err);
    throw new Error("Error deleting user.");
  }
});
