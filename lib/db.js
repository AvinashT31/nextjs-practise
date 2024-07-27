import mongoose from "mongoose"

export const connectionstr = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error while connecting DB", error);
    }
}
