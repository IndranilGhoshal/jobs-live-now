import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { JobSchema } from "@/app/model/Job";
import { StatusCodes } from "../_lib/StatusCode";
import { connectionStr } from "@/app/lib/db";

// ================= POST =================
export async function POST(req) {
    try {
       
        const payload = await req.json();
        let result;
        let success = false;
        let message;
        let listlength;
        let responsestatus;
        let filter;
        await mongoose.connect(connectionStr);
        if (payload.add) {
            for (let field of payload.fields) {
                if (field.isMandotary) {
                    if (field.fieldType === "text" && (!field.value || field.value.trim() === "")) {
                        return error(field.fieldName);
                    }
                    if (field.fieldType === "singleselect" && (!field.value || !field.value.value)) {
                        return error(field.fieldName);
                    }
                    if (field.fieldType === "multiselect" && (!field.value || field.value.length === 0)) {
                        return error(field.fieldName);
                    }
                    if (field.fieldType === "daterange") {
                        if (!field.value?.start || !field.value?.end) {
                            return error(field.fieldName);
                        }
                    }
                    if (field.fieldType === "texteditor") {
                        const clean = field.value?.replace(/<[^>]*>/g, '').trim();
                        if (!clean) {
                            return error(field.fieldName);
                        }
                    }
                }
                if (field.isExtra && (!field.fieldName || field.fieldName.trim() === "")) {
                    return NextResponse.json({
                        success: false,
                        message: "Extra field name required"
                    }, { status: 400 });
                }
            }

            let results = await JobSchema.findOne({ name: payload.name, status: { $in: ['0', '1'] } })
            if (!results) {
                let obj = {
                    name: payload.name,
                    slug: payload.slug,
                    status: payload.status,
                    category: payload.category,
                    author: payload.author,
                    fields: payload.fields
                }
                const resultsave = new JobSchema(obj);
                result = await resultsave.save()
                if (result) {
                    responsestatus = StatusCodes.CREATED
                    success = true;
                    message = "Job Added Successfully"
                } else {
                    responsestatus = StatusCodes.INTERNAL_SERVER_ERROR
                    success = false;
                    message = "Internal server error"
                }
            }
            else {
                responsestatus = StatusCodes.FOUND
                success = false;
                message = "Job Already Exist"
            }
        }
        else if (payload.details) {
            filter = { _id: payload.id, status: { $in: ['0', '1'] } }
            result = await JobSchema.findOne(filter);
            if (result) {
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Job found"
            } else {
                responsestatus = StatusCodes.NO_CONTENT
                success = false
                message = "Job found not found"
            }
        }
        else if (payload.edit) {
            let results = await JobSchema.findOne({ _id: payload.id })
            if (results) {
                let namefilterresult = await JobSchema.findOne({ name: payload.name })
                if (namefilterresult) {
                    if (namefilterresult.name == payload.name && namefilterresult._id == payload.id) {
                        let data = {
                            name: payload.name,
                            fields: payload.fields,
                            slug: payload.slug,
                            author: payload.author,
                        }
                        result = await JobSchema.findOneAndUpdate({ _id: payload.id }, data)
                        if (result) {
                            responsestatus = StatusCodes.SUCCESS
                            success = true
                            message = "Job update successfully"
                        } else {
                            responsestatus = StatusCodes.INTERNAL_SERVER_ERROR
                            success = false
                            message = "Internal Server Error"
                        }
                    } else {
                        responsestatus = StatusCodes.FOUND
                        success = false
                        message = "Job Already Exist"
                    }
                } else {
                    let data = {
                        name: payload.name,
                        fields: payload.fields,
                        slug: payload.slug,
                        author: payload.author
                    }
                    result = await JobSchema.findOneAndUpdate({ _id: payload.id }, data)
                    if (result) {
                        responsestatus = StatusCodes.SUCCESS
                        success = true
                        message = "Job update successfully"
                    } else {
                        responsestatus = StatusCodes.INTERNAL_SERVER_ERROR
                        success = false
                        message = "Internal Server Error"
                    }
                }
            } else {
                responsestatus = StatusCodes.NO_CONTENT
                success = false;
                message = "Job Not Exist!"
            }
        }
        else if (payload.onstatus) {
            result = await JobSchema.findOneAndUpdate({ _id: payload.id }, { status: payload.status })
            if (result) {
                if (payload.status == "1") {
                    message = result.name + " Job inactive successfully"
                } else if (payload.status == "2") {
                    message = result.name + " Job delete successfully"
                } else {
                    message = result.name + " Job active successfully"
                }
                responsestatus = StatusCodes.SUCCESS
                success = true
            } else {
                responsestatus = StatusCodes.INTERNAL_SERVER_ERROR
                success = false
                message = "Job not found"
            }
        }
        else if (payload.list) {
            filter = { category: { $in: ['Jobs'] } , status: { $in: ['0', '1'] } };
            let len = await JobSchema.find(filter)
            listlength = len.length
            result = await JobSchema.find(filter).limit(payload.limit).skip(payload.skip);
            console.log("result",result);
            
            if (result.length > 0) {
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Job found"
            } else {
                responsestatus = StatusCodes.NO_CONTENT
                success = false
                message = "Job not found"
            }
        }
        return NextResponse.json({ success: success, message: message, status: responsestatus, data: result, listlength });
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.message
        }, { status: 500 });
    }
}

// 🔥 HELPER
function error(fieldName) {
    return NextResponse.json({
        success: false,
        message: `${fieldName} is required`
    }, { status: 400 });
}