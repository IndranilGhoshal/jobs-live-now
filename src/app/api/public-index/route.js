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
            admissionForm,
            byqualification = []

        await mongoose.connect(connectionStr);

        if (payload.list) {

            topOnlineForm = await JobSchema.find({ category: { $in: ['Jobs'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            admitCard = await JobSchema.find({ category: { $in: ['Admit Card'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            results = await JobSchema.find({ category: { $in: ['Results'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            answerKey = await JobSchema.find({ category: { $in: ['Answer Key'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            syllabus = await JobSchema.find({ category: { $in: ['Syllabus'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            admissionForm = await JobSchema.find({ category: { $in: ['Admission Form'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);



            const qualificationCounts = await JobSchema.find({
                category: "Jobs",
                status: "0"
            }).lean();

            const countMap = (tags) => {
                let count = 0
                for (let [index, q] of qualificationCounts.entries()) {
                    let fields = q.fields
                    for (let f of fields) {
                        let has
                        if (f.fieldName == "Tags") {
                            let valuearray = f.value
                            has = valuearray.some(item => item.value === tags);
                        }
                        if (has) {
                            count = count + 1
                        }
                    }
                }
                return count
            }

            byqualification = [
                {
                    name: "10th",
                    path: "/qualification/10th",
                    count: countMap("10th") || 0
                },
                {
                    name: "ITI",
                    path: "/qualification/ITI",
                    count: countMap("ITI") || 0
                },
                {
                    name: "12th",
                    path: "/qualification/12th",
                    count: countMap("12th") || 0
                },
                {
                    name: "Diploma",
                    path: "/qualification/Diploma",
                    count: countMap("Diploma") || 0
                },
                {
                    name: "Graduation",
                    path: "/qualification/Graduation",
                    count: countMap("Graduation") || 0
                },
                {
                    name: "Post-Graduation",
                    path: "/qualification/Post-Graduation",
                    count: countMap("Post-Graduation") || 0
                },
                {
                    name: "Phd",
                    path: "/qualification/Phd",
                    count: countMap("Phd") || 0
                }
            ];

            result = {
                topOnlineForm,
                admitCard,
                results,
                answerKey,
                syllabus,
                admissionForm,
                byqualification
            }

            responsestatus = StatusCodes.SUCCESS
            success = true
            message = "Job found"
        }



        return NextResponse.json({ success: success, message: message, status: responsestatus, data: result, listlength });

    } catch (err) {
        console.log(err);

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