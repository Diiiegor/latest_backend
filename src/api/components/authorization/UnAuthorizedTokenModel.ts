import * as mongoose from "mongoose";

interface IUnAuthorizedToken {
    token: String
}

const unAuthorizedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
})

const UnAuthorizedToken = mongoose.model<IUnAuthorizedToken>('UnAuthorizedToken', unAuthorizedTokenSchema)
export {UnAuthorizedToken, IUnAuthorizedToken}