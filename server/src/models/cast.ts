import { Schema, model } from "mongoose";

export interface ICast {
  name: string;
  character: string;
  age: string;
  episodesAppearedIn: number;
}

const castSchema = new Schema<ICast>({
  name: { type: String, required: true },
  character: { type: String, required: true },
  age: { type: String, required: true },
  episodesAppearedIn: { type: Number, required: true },
});

export const Cast = model<ICast>("Cast", castSchema);