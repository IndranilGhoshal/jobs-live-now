import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { AdminSchema } from "@/app/model/Admin";
import { StatusCodes } from "../../_lib/StatusCode";

export async function GET() {
  let message;
  let result;
  let statuscode;
  let success = false;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      success = false
      message = "Token Not found"
      statuscode = StatusCodes.Not_Found
      return NextResponse.json({ success: success, message: message, status: statuscode });
    }

    let decoded;

    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );
    } catch {
      success = false
      message = "Invalid Token"
      statuscode = StatusCodes.Unauthorized
      return NextResponse.json({ success: success, message: message, status: statuscode });
    }

    await mongoose.connect(connectionStr);

    const admin = await AdminSchema.findOne({
      _id: new ObjectId(decoded.id),
      active: true,
    });

    if (!admin) {
      success = false
      message = "Admin Not Found"
      statuscode = StatusCodes.NO_CONTENT
      return NextResponse.json({ success: success, message: message, status: statuscode });
    }
    else {
      console.log("admin",admin);
      
      success = true
      message = "Admin Found"
      statuscode = StatusCodes.FOUND
      result = {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin,
      };
      return NextResponse.json({ success: success, message: message, status: statuscode, result: result });
    }
  } catch (error) {
    console.error(
      "Admin Auth Error:",
      error
    );
    success = false
    message = "Internal Server Error"
    statuscode = StatusCodes.INTERNAL_SERVER_ERROR
    return NextResponse.json({ success: success, message: message, status: statuscode });
  }
}