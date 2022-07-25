import { Schema, model, Document } from "mongoose";

import { UserRole } from "~constants/index";

export interface IUser {
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  nickname?: string;
  catchPhrase?: string;
  profileImg?: string;
  permissions: {
    // Users
    addUser?: boolean;
    updateUser?: boolean;
    deleteUser?: boolean;
    // Games
    addGame?: boolean;
    updateGame?: boolean;
    deleteGame?: boolean;
  };
}

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: {
      type: String,
      enum: UserRole,
      required: true,
      default: UserRole.ADMIN,
    },
    isActive: { type: Boolean, required: true, default: true },
    nickname: String,
    catchPhrase: String,
    profileImg: String,
    permissions: {
      addUser: Boolean,
      updateUser: Boolean,
      deleteUser: Boolean,
      addGame: Boolean,
      updateGame: Boolean,
      deleteGame: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUserModel>("User", userSchema);
