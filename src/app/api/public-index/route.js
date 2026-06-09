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
        let topOnlineForm,
            admitCard,
            results,
            answerKey,
            syllabus,
            admissionForm = []

        await mongoose.connect(connectionStr);

        if (payload.list) {
            topOnlineForm = await JobSchema.find({ category: { $in: ['Jobs'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            admitCard = await JobSchema.find({ category: { $in: ['Admit Card'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            results = await JobSchema.find({ category: { $in: ['Results'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            answerKey = await JobSchema.find({ category: { $in: ['Answer Key'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            syllabus = await JobSchema.find({ category: { $in: ['Syllabus'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            admissionForm = await JobSchema.find({ category: { $in: ['Admission Form'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);

            result = {
                topOnlineForm,
                admitCard,
                results,
                answerKey,
                syllabus,
                admissionForm
            }
            
            responsestatus = StatusCodes.SUCCESS
            success = true
            message = "Job found"
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