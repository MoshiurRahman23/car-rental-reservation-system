import { Schema, model } from "mongoose";
import { TCar } from "./car.interface";

const carSchema = new Schema<TCar>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
  },
  isElectric: {
    type: Boolean,
  },
  status: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
});

export const carModel = model<TCar>("carModel", carSchema);
