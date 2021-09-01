import {validationResult} from "express-validator";
import {Request, Response} from "express";
import {IUser} from "./UserModel";

export class UserValidations {
    static validateUser(req: Request, resp: Response) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return resp.status(400).json({
                resp: {
                    errors: errors.array()
                }
            });
        }
    }

    static checkUserFound(user: IUser, resp: Response) {
        if (!user) {
            return resp.status(400).json({
                resp: {
                    errors: "User not found"
                }
            });
        }
    }
}