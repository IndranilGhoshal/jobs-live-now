import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { JobSchema } from "@/app/model/Job";
import { StatusCodes } from "../_lib/StatusCode";
import { connectionStr } from "@/app/lib/db";

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
            let topOnlineForm = await JobSchema.find({ category: { $in: ['Jobs'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(50);
            let admitCardData = await JobSchema.find({ category: { $in: ['Admit Card'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            let resultData = await JobSchema.find({ category: { $in: ['Results'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            let answerKeyData = await JobSchema.find({ category: { $in: ['Answer Key'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            result = {
                topOnlineForm: topOnlineForm.length > 0 ? topOnlineForm : [],
                admitCardData: admitCardData.length > 0 ? admitCardData : [],
                resultData: resultData.length > 0 ? resultData : [],
                answerKeyData: answerKeyData.length > 0 ? answerKeyData : []
            }
            responsestatus = StatusCodes.SUCCESS
            success = true
            message = "Job found"
        } else if (payload.details) {
            filter = { slug: payload.slug, status: { $in: ['0'] } }
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

        return NextResponse.json({ success: success, message: message, status: responsestatus, data: result, listlength });

    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.message
        }, { status: 500 });
    }
}

export async function OPTIONS() {

    return new Response(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}