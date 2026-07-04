import mongoose from "mongoose";

const commentSchemaModel = new mongoose.Schema({
        slug: {
            type: String,
            required: true,
            index: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 50,
        },

        email: {
            type: String,
            required: true,
        },

        message: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 500,
        },

        approved: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true });

export const CommentSchema = mongoose.models.comments || mongoose.model("comments", commentSchemaModel);