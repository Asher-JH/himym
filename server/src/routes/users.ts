import express from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  updateUserPermissions,
} from "~controllers/users";
import { validateSchema } from "~validations/index";
import UserSchema from "~validations/user";

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getUsers);
router.post("/", validateSchema(UserSchema.create), createUser);
router.patch("/:id", validateSchema(UserSchema.update), updateUser);
router.patch(
  "/permissions/:id",
  validateSchema(UserSchema.updatePermissions),
  updateUserPermissions
);
router.delete("/:id", deleteUser);

export { router as usersRouter };
