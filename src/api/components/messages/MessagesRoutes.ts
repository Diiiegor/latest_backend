import {Router} from "express";
import {MessagesController} from "./MessagesController";
import {checkAuth} from "../../middleware/checkAuth";

export class MessagesRoutes {

    readonly router: Router = Router()
    readonly controller: MessagesController = new MessagesController()

    constructor() {
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.post('/send', checkAuth, this.controller.sendMessage)
    }
}