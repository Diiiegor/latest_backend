import * as mongoose from "mongoose";

interface IUser {
    name: String;
    email: String;
    password: String;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model<IUser>('User', userSchema)
export {User, IUser}