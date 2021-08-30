import {Router} from "express";
import {UserController} from "./UserController";

export class UserRoutes {

    readonly router: Router = Router();
    readonly controller: UserController = new UserController();

    constructor() {
        this.initRoutes()
    }

    initRoutes(): void {
        this.router.post('/', this.controller.createUser);
        this.router.put('/:id', this.controller.updateUser);
        this.router.delete('/:id', this.controller.deleteUser);
        this.router.patch('/:id/active', this.controller.activateUser);
        this.router.get('/:id', this.controller.getUser);
    }

}