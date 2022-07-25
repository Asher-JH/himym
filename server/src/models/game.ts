import { Schema, model, Document } from "mongoose";

import { IUserModel } from "./user";
import { GameStatus } from "~constants/index";

export interface IGame {
  name: string;
  playedAt: Date;
  status: GameStatus;
  loser: string | IUserModel;
}

export interface IGameModel extends IGame, Document {}

const gameSchema: Schema = new Schema<IGame>(
  {
    name: { type: String, required: true },
    playedAt: { type: Date, required: true },
    status: {
      type: String,
      enum: GameStatus,
      required: true,
      default: GameStatus.UPCOMING,
    },
    loser: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Game = model<IGameModel>("Game", gameSchema);
