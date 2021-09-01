import {Router} from "express";
import {AuthorizationController} from "./AuthorizationController";
import {checkAuth} from "../../middleware/checkAuth";
import {body} from "express-validator";

export class AuthorizationRoutes {

    public readonly router: Router = Router()
    private readonly controller: AuthorizationController = new AuthorizationController()

    constructor() {
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.post('/', body('email').isEmail(),
            body('password').isLength({min: 9}), this.controller.login)
        this.router.delete('/', checkAuth, this.controller.logOuth)
    }
}