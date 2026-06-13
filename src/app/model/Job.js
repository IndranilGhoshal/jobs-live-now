import mongoose from "mongoose";

const FieldSchema = new mongoose.Schema({
    fieldName: String,
    fieldType: String,
    value: mongoose.Schema.Types.Mixed,
    isMandotary: Boolean,
    icon: String,
    placeholder: String,
    selectvalue: Array,
    isExtra: Boolean
});

const JobModel = new mongoose.Schema({
    name: String,
    category: String,
    status: String,
    author: String,
    slug: { type: String, index: true },
    updatedAt: { type: Date, index: true },
    fields: [FieldSchema],
}, { timestamps: true });

export const JobSchema = mongoose.models.jobs || mongoose.model("jobs", JobModel);