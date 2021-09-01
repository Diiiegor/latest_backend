import {bind} from "decko";
import {NextFunction, Request, Response} from "express";
import {UserRepository} from "../users/UserRepository";
import {Utils} from "../../../services/utils";
import * as jwt from "jsonwebtoken";
import {AuthorizationRepository} from "./AuthorizationRepository";

export class AuthorizationController {

    private userRepository: UserRepository = new UserRepository()
    private authorizationRepository: AuthorizationRepository = new AuthorizationRepository()

    @bind()
    public async login(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const {email, password} = req.body;
        const user = await this.userRepository.getByEmail(email)

        if (user && await Utils.checkPassword(password, user.password)) {
            const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET)
            return resp.json({
                resp: {
                    token: `Bearer ${token}`
                }
            })
        } else {
            return resp.status(401).json({
                resp: {
                    message: "Unauthorized"
                }
            })
        }

    }

    @bind()
    public async logOuth(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const token = req.header('Authorization');
        const newToken = await this.authorizationRepository.saveUnAuthorizedToken({token})
        return resp.json({
            resp: {
                message: 'Session closed'
            }
        })
    }

}
