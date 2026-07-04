import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { StatusCodes } from "../_lib/StatusCode";
import { connectionStr } from "@/app/_lib/db";
import { MarqueeSchema } from "@/app/model/marquee";

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
            if (payload.marquee === "") {
                return error('Marquee');
            }
            let obj = {
                marquee: payload.marquee
            }
            const resultsave = new MarqueeSchema(obj);
            result = await resultsave.save()
            if (result) {
                responsestatus = StatusCodes.CREATED
                success = true;
                message = "Marquee Added Successfully"
            } else {
                responsestatus = StatusCodes.INTERNAL_SERVER_ERROR
                success = false;
                message = "Internal server error"
            }
        }
        else if (payload.details) {
            result = await MarqueeSchema.findOne();
            if (result) {
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Marquee found"
            } else {
                responsestatus = StatusCodes.NO_CONTENT
                success = false
                message = "Marquee not found"
            }
        }
        else if (payload.edit) {
            let obj = {
                marquee: payload.marquee
            }
            result = await MarqueeSchema.findOneAndUpdate({ _id: payload.id }, obj)
            if (result) {
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Marquee update successfully"
            } else {
                responsestatus = StatusCodes.INTERNAL_SERVER_ERROR
                success = false
                message = "Internal Server Error"
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