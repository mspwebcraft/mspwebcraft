import { UserProps } from "@/types";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema<UserProps>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isSuper: {
      type: Boolean,
      default: false,
    },
    designation: {
      type: String,
      default: "employee",
    },
  },
  { timestamps: true },
);

const User = mongoose.models.user || mongoose.model<UserProps>("user", userSchema);
export default User;
