import mongoose from "mongoose";

const AdminModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: true,
    },
    usertype: {
      type: String,
      default: true,
    },
    lastLogin: {
      type: String,
      default: true,
    },
  },
  { timestamps: true }
);

export const AdminSchema =  mongoose.models.admins || mongoose.model("admins", AdminModel);
