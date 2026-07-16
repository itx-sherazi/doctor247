import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["nurse", "hospital"], required: true },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
