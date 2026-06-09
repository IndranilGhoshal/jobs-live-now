import mongoose from "mongoose";

const marqueeModel = new mongoose.Schema({
    marquee: String,
}, { timestamps: true });

export const MarqueeSchema =  mongoose.models.marquees || mongoose.model("marquees", marqueeModel);