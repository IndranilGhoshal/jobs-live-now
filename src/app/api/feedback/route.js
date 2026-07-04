import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/_lib/db";
import { FeedbacksSchema } from "@/app/model/FeedbackModel";


// =========================
// GET FEEDBACK COUNT
// =========================

export async function GET(request) {

    try {

        await mongoose.connect(connectionStr);

        const { searchParams } = new URL(request.url);

        const slug = searchParams.get("slug");

        if (!slug) {

            return NextResponse.json(
                {
                    message: "Slug is required"
                },
                {
                    status: 400
                }
            );

        }

        const helpful = await FeedbacksSchema.countDocuments({
            slug,
            type: "helpful",
        });

        const partial = await FeedbacksSchema.countDocuments({
            slug,
            type: "partial",
        });

        const improve = await FeedbacksSchema.countDocuments({
            slug,
            type: "improve",
        });

        return NextResponse.json({
            helpful,
            partial,
            improve,
        });

    } catch (error) {

        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );

    }

}



// =========================
// SAVE FEEDBACK
// =========================

export async function POST(request) {

    try {

        await mongoose.connect(connectionStr);

        const body = await request.json();

        const { slug, type } = body;

        if (!slug || !type) {

            return NextResponse.json(
                {
                    message: "Missing Fields",
                },
                {
                    status: 400,
                }
            );

        }

        await FeedbacksSchema.create({

            slug,

            type,

        });

        return NextResponse.json({

            success: true,

        });

    } catch (error) {

        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );

    }

}