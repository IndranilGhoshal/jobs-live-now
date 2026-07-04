import mongoose from "mongoose";

const feedbackSchemaModel = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        index: true,
    },

    type: {
        type: String,
        enum: ["helpful", "partial", "improve"],
        required: true,
    }
},
    {
        timestamps: true,
    });

export const FeedbacksSchema = mongoose.models.feedbacks || mongoose.model("feedbacks", feedbackSchemaModel);