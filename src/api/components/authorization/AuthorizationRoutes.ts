import {Router} from "express";
import {AuthorizationController} from "./AuthorizationController";
import {checkAuth} from "../../middleware/checkAuth";

export class AuthorizationRoutes {

    public readonly router: Router = Router()
    private readonly controller: AuthorizationController = new AuthorizationController()

    constructor() {
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.post('/', this.controller.login)
        this.router.delete('/',checkAuth, this.controller.logOuth)
    }
}