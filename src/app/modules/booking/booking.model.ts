import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
});

export const BookingModel = model<TBooking>("BookingModel", bookingSchema);
