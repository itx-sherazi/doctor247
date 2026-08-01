import { Schema, model, models } from "mongoose";

const OtpSchema = new Schema({
  mobileNumber: { type: String, required: true, unique: true, trim: true },
  otpHash: { type: String, required: true },
  attempts: { type: Number, default: 0 },
  expiresAt: { type: Date, required: true, expires: 0 },
});

export const Otp = models.Otp || model("Otp", OtpSchema);
