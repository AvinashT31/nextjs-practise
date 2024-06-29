import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionstr } from "../../../../lib/db";
import User from "@/app/Models/user";


export async function GET() {

    await mongoose.connect(connectionstr)
    return NextResponse.json({ result: true })
}

export async function POST(request) {

    try {
        await mongoose.connect(connectionstr)

        const { name, email, number, password } = await request.json();

        const newuser = new User({
            name: name,
            email: email,
            number: number,
            password: password,
        })
        console.log(newuser, "newuser")
        await newuser.save();

        return NextResponse.json({ status: 200, message: "registration successfully", newuser })
    } catch (error) {
        console.error("Error during user registration:", error);
        return NextResponse.json({ status: 500, message: "An error occurred during registration" });
    }

}

// export async function POST(request) {
//     try {
//         await mongoose.connect(connectionstr);

//         const { _id } = await request.json();
//         console.log(_id, "id heree")

//         const finddata = await User.findById(_id);
//         console.log(finddata, "finddata");

//         if (!finddata) {
//             return NextResponse.json({ status: 401, message: "data not found" })
//         }

//         return NextResponse.json({ status: 200, message: "data retrived successfully", finddata })
//     } catch (error) {
//         console.error("Error during user registration:", error);
//         return NextResponse.json({ status: 500, message: "An error occurred during registration" });
//     }
// }