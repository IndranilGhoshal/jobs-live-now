import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/_lib/db";
import { JobSchema } from "@/app/model/Job";

export async function GET(request) {
    try {

        await mongoose.connect(connectionStr);

        const { searchParams } = new URL(request.url);

        const query = searchParams.get("q")?.trim();
        const exactcategory = searchParams.get("exact")?.trim();

        const filter = {
            category: exactcategory,
        };

        // ==========================
        // No Search Query
        // ==========================
        if (!query) {

            const jobs = await JobSchema.find(
                filter,
                {
                    name: 1,
                    slug: 1,
                    _id: 0,
                }
            )
                .sort({ createdAt: -1 })
                .limit(8)
                .lean();

            return NextResponse.json(jobs);

        }

        // Regex special character escape
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        filter.name = new RegExp(escapedQuery, "i");
        
        const jobs = await JobSchema.find(
            filter,
            {
                name: 1,
                slug: 1,
                companyName: 1,
                _id: 0,
            }
        )
            .limit(8)
            .lean();

        return NextResponse.json(jobs);

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            {
                status: 500,
            }
        );

    }
}