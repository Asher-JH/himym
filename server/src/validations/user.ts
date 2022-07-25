import Joi from "joi";

import { IUser } from "~models/user";

export default {
  // Create
  create: Joi.object<IUser>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().required(),
    nickname: Joi.string(),
    catchPhrase: Joi.string(),
    profileImg: Joi.string(),
  }),
  // Update
  update: Joi.object<IUser>({
    name: Joi.string().required(),
    role: Joi.string().required(),
    nickname: Joi.string(),
    catchPhrase: Joi.string(),
    profileImg: Joi.string(),
  }),
  // Update user permissions
  updatePermissions: Joi.object<IUser["permissions"]>({
    addUser: Joi.boolean(),
    updateUser: Joi.boolean(),
    deleteUser: Joi.boolean(),
    addGame: Joi.boolean(),
    updateGame: Joi.boolean(),
    deleteGame: Joi.boolean(),
  }),
};
