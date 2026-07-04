import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { StatusCodes } from "../_lib/StatusCode";
import { connectionStr } from "@/app/_lib/db";
import { JobCategorySchema } from "@/app/model/categories";

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
        if (payload.list) {
            filter = {
                fields: {
                    $elemMatch: {
                        fieldName: "Tags",
                        "value.value": {
                            $regex: `^${payload.tag}$`,
                            $options: "i"
                        },
                    },
                }, category: { $in: ['Jobs'] }, status: { $in: ['0'] }
            };
            listlength = await JobCategorySchema.countDocuments(filter);

            result = await JobCategorySchema.find(filter)
                .sort({ createdAt: -1 })
                .limit(Number(payload.limit))
                .skip(Number(payload.skip));
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