// import mongoose, { Schema } from "mongoose"

// const UserSchema = new Schema({
//     name: {
//         type: "string",
//         require: true
//     }, number: {
//         type: "string",
//         require: true
//     }, email: {
//         type: "string",
//         require: true
//     }, password: {
//         type: "string",
//         require: true
//     },
// })

// export default mongoose.model("User", UserSchema)

import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Check if the 'User' model already exists in Mongoose models to avoid overwrite error
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
