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

const JobCategoryModel = new mongoose.Schema({
    name: String,
    slug: String,
    category: String,
    status: String,
    author: String,
    fields: [FieldSchema],
}, { timestamps: true });

export const JobCategorySchema =  mongoose.models.jobs || mongoose.model("jobs", JobCategoryModel);