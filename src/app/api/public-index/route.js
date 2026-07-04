import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { JobSchema } from "@/app/model/Job";
import { StatusCodes } from "../_lib/StatusCode";
import { connectionStr } from "@/app/_lib/db";

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
            byqualification,
            byrecruitment,
            starcard = []

        await mongoose.connect(connectionStr);

        if (payload.list) {

            topOnlineForm = await JobSchema.find({ category: { $in: ['Jobs'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(8);
            admitCard = await JobSchema.find({ category: { $in: ['Admit Card'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(8);
            results = await JobSchema.find({ category: { $in: ['Results'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(8);
            answerKey = await JobSchema.find({ category: { $in: ['Answer Key'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(8);
            syllabus = await JobSchema.find({ category: { $in: ['Syllabus'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(8);
            admissionForm = await JobSchema.find({ category: { $in: ['Admission Form'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(8);



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

            const countJobType = (jobType) => {
                let count = 0;

                for (const q of qualificationCounts) {
                    const field = q.fields.find(f => f.fieldName === "Job Type");

                    if (field && field.value?.value === jobType) {
                        count++;
                    }
                }

                return count;
            };

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
                    name: "Post Graduation",
                    path: "/qualification/Post-Graduation",
                    count: countMap("Post-Graduation") || 0
                },
                {
                    name: "Phd",
                    path: "/qualification/Phd",
                    count: countMap("Phd") || 0
                }
            ];


            byrecruitment = [
                {
                    name: "Government Jobs",
                    path: "/recruitment/government-job",
                    count: countJobType("Government Job") || 0
                },
                {
                    name: "UPSC Jobs",
                    path: "/recruitment/upsc-job",
                    count: countJobType("UPSC Job") || 0
                },
                {
                    name: "SSC Jobs",
                    path: "/recruitment/ssc-job",
                    count: countJobType("SSC Job") || 0
                },
                {
                    name: "Railway Jobs",
                    path: "/recruitment/railway-job",
                    count: countJobType("Railway Job") || 0
                },
                {
                    name: "Bank Jobs",
                    path: "/recruitment/bank-job",
                    count: countJobType("Bank Job") || 0
                },
                {
                    name: "Defence Jobs",
                    path: "/recruitment/defence-job",
                    count: countJobType("Defence Job") || 0
                },
                {
                    name: "Teaching Jobs",
                    path: "/recruitment/teaching-job",
                    count: countJobType("Teaching Job") || 0
                },
                {
                    name: "Contractual Jobs",
                    path: "/recruitment/contractual-job",
                    count: countJobType("Contractual Job") || 0
                }
            ];

            const jobslistlength = await JobSchema.countDocuments({ category: "Jobs", status: "0"});
            const admitcardslistlength = await JobSchema.countDocuments({ category: "Admit Card", status: "0"});
            const resultslistlength = await JobSchema.countDocuments({ category: "Results", status: "0"});

            starcard=[
                {
                    name: "Government Jobs Covered",
                    count: Number(jobslistlength) || 0,
                    suffix:"+"
                },
                {
                    name: "Admit Cards Updated",
                    count: Number(admitcardslistlength) || 0,
                    suffix:"+"
                },
                {
                    name: "Results Published",
                    count: Number(resultslistlength) || 0,
                    suffix:"+"
                },
                {
                    name: "Official Source Based",
                    count: 100,
                    suffix:"%"
                }
            ]

            result = {
                topOnlineForm,
                admitCard,
                results,
                answerKey,
                syllabus,
                admissionForm,
                byqualification,
                byrecruitment,
                starcard
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