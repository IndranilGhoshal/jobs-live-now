import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json({success: true});

        response.cookies.delete("admin_token");

        return response;

    } catch (e) {
        return NextResponse.json({error: e})
    }
}