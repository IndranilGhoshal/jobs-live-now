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
        let starcard = []

        await mongoose.connect(connectionStr);

        if (payload.list) {
            const today = new Date().toISOString().split("T")[0];

            filter = {
                category: "Jobs",
                status: "0"
            };

            switch (payload.jobtype?.toLowerCase()) {

                case "all":
                    break;

                case "latest":
                    break;

                case "closing soon":
                    filter.fields = {
                        $elemMatch: {
                            fieldName: "Application Date",
                            "value.end": {
                                $gte: today
                            }
                        }
                    };
                    break;

                case "active":
                    filter.fields = {
                        $elemMatch: {
                            fieldName: "Application Date",
                            "value.end": {
                                $gte: today
                            }
                        }
                    };
                    break;

                case "expired":
                    filter.fields = {
                        $elemMatch: {
                            fieldName: "Application Date",
                            "value.end": {
                                $lt: today
                            }
                        }
                    };
                    break;

                default:
                    filter.fields = {
                        $elemMatch: {
                            fieldName: "Job Type",
                            "value.value": {
                                $regex: `^${payload.jobtype}$`,
                                $options: "i"
                            }
                        }
                    };
            }

            let sortOption = { createdAt: -1 };

            if (payload.jobtype === "closing soon") {
                sortOption = {
                    "fields.value.end": 1
                };
            }

            const topOnlineForm = await JobSchema.find(filter)
                .sort(sortOption)
                .limit(Number(payload.limit))
                .skip(Number(payload.skip));
            const admitCardData = await JobSchema.find({ category: { $in: ['Admit Card'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            const resultData = await JobSchema.find({ category: { $in: ['Results'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            const answerKeyData = await JobSchema.find({ category: { $in: ['Answer Key'] }, status: { $in: ['0'] } }).sort({ createdAt: -1 }).limit(4);
            
            listlength = await JobSchema.countDocuments(filter);

            const listlengths = await JobSchema.countDocuments({
                category: "Jobs",
                status: "0"
            });

            starcard = [
                {
                    name: "Government Jobs Covered",
                    count: Number(listlengths) || 0,
                    suffix: "+"
                },
                {
                    name: "Official Source Based",
                    count: 100,
                    suffix: "%"
                }
            ]

            const formatJob = (job) => {

                const getField = (fieldName) =>
                    job.fields.find(item => item.fieldName === fieldName)?.value;

                const applicationDate = getField("Application Date");

                return {
                    id: job._id,
                    slug: job.slug,
                    title: getField("Job Advertisement Title"),
                    organisation: getField("Organisation Name"),
                    jobType: getField("Job Type")?.value || "",
                    qualification:
                        getField("Qualification Allow")
                            ?.map(q => q.value)
                            .join(", ") || "",

                    applicationStart: applicationDate?.start || "",
                    applicationEnd: applicationDate?.end || "",

                    createdAt: job.createdAt,
                    updatedAt: job.updatedAt,
                    status: job.status,
                    category: job.category,

                    isNew:
                        (Date.now() - new Date(job.createdAt)) /
                        (1000 * 60 * 60 * 24) <= 3,

                    isExpired: applicationDate?.end
                        ? new Date(applicationDate.end) < new Date()
                        : false,

                    isActive: applicationDate?.end
                        ? new Date(applicationDate.end) >= new Date()
                        : false,

                    daysLeft: applicationDate?.end
                        ? Math.ceil(
                            (new Date(applicationDate.end) - new Date()) /
                            (1000 * 60 * 60 * 24)
                        )
                        : null
                };
            };

            const jobCards = topOnlineForm.map(formatJob);

            const featuredOnlineForm =
                topOnlineForm.length > 0
                    ? formatJob(topOnlineForm[0])
                    : null;

            result = {
                featuredOnlineForm,
                topOnlineForm: jobCards,
                admitCardData,
                resultData,
                answerKeyData,
                starcard
            };

            responsestatus = StatusCodes.SUCCESS
            success = true
            message = "Job found"
        } else if (payload.sitemap) {
            let jobs = await JobSchema.find({
                category: "Jobs",
                status: "0",
            })
                .select("name slug createdAt fields updatedAt")
                .sort({ updatedAt: -1 })
                .lean();
            if (jobs) {
                result = jobs
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Job found"
            } else {
                result = []
                responsestatus = StatusCodes.NO_CONTENT
                success = false
                message = "Job not found"
            }
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
                message = "Job not found"
            }
        } else if (payload.relatedPosts) {
            result = await JobSchema.find({
                category: payload.category,
                status: "0",
                slug: { $ne: payload.slug } // current post বাদ
            })
                .sort({ createdAt: -1 })
                .limit(8)
                .lean();

            if (result.length > 0) {
                responsestatus = StatusCodes.SUCCESS;
                success = true;
                message = "Related posts found";
            } else {
                responsestatus = StatusCodes.NO_CONTENT;
                success = false;
                message = "No related posts found";
                result = [];
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