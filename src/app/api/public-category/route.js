import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { StatusCodes } from "../_lib/StatusCode";
import { connectionStr } from "@/app/lib/db";
import { JobCategorySchema } from "@/app/model/categories";

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
                category: {
                    $regex: `^${payload.category}$`,
                    $options: "i"
                },
                status: {
                    $in: ["0"]
                }
            };
            result = await JobCategorySchema.find(filter).sort({ createdAt: -1 }).limit(50);;
            if (result) {
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Job Category found"
            } else {
                responsestatus = StatusCodes.NO_CONTENT
                success = false
                message = "Job Category not found"
            }
        } else if (payload.sitemap) {
            let jobs = await JobSchema.find({
                category: { $in: [payload.category] },
                status: "0",
            })
                .select("slug updatedAt")
                .sort({ updatedAt: -1 })
                .lean();
            if (jobs) {
                result = jobs
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Data found"
            } else {
                result = []
                responsestatus = StatusCodes.NO_CONTENT
                success = false
                message = "Data not found"
            }
        }
        else if (payload.details) {
            filter = { slug: payload.slug, status: { $in: ['0'] } }
            result = await JobCategorySchema.findOne(filter);
            if (result) {
                responsestatus = StatusCodes.SUCCESS
                success = true
                message = "Job Category found"
            } else {
                responsestatus = StatusCodes.NO_CONTENT
                success = false
                message = "Job Category not found"
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