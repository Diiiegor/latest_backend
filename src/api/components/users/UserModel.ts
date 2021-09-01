import * as mongoose from "mongoose";

interface IUser {
    name: String;
    email: String;
    password: String;
}

const userSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: async function (email) {
                const user = await this.constructor.findOne({email});
                if (user) {
                    if (this.id === user.id) {
                        return true;
                    }
                    return false;
                }
            }
        },
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model<IUser>('User', userSchema)
export {User, IUser}