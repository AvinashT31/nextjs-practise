import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionstr } from "../../../lib/db";
import User from "@/app/Models/user";

export async function POST(request) {
    try {
        await mongoose.connect(connectionstr);
        const { _id } = await request.json();
        console.log(_id, "id heree");
        const finddata = await User.findById(_id);
        console.log(finddata, "finddata");
        if (!finddata) {
            return NextResponse.json({ status: 401, message: "data not found" });
        }
        return NextResponse.json({ status: 200, message: "data retrieved successfully", finddata });
    } catch (error) {
        console.error("Error during data retrieval:", error);
        return NextResponse.json({ status: 500, message: "An error occurred during data retrieval" });
    }
}
