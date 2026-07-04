import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/_lib/db";
import { CommentSchema } from "@/app/model/Comment";


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
        const comments = await CommentSchema.find({
            slug,
            approved: true,
        }).sort({ createdAt: -1 });


        return NextResponse.json({
            comments
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

       const { slug, name, email, message } = body;

        if (!slug || !name || !email || !message) {
            return NextResponse.json(
                { message: "All fields required" },
                { status: 400 }
            );
        }

        await CommentSchema.create({
            slug,
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
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