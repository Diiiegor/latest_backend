import {Router} from "express";
import {UserController} from "./UserController";
import {body} from "express-validator";

export class UserRoutes {

    readonly router: Router = Router();
    readonly controller: UserController = new UserController();

    constructor() {
        this.initRoutes()
    }

    initRoutes(): void {
        this.router.post('/', body('name').isString(),
            body('email').isEmail(),
            body('password').isLength({min: 9}), this.controller.createUser);

        this.router.put('/:id', body('name').isString(),
            body('email').isEmail(),
            body('password').isLength({min: 9}), this.controller.updateUser);

        this.router.delete('/:id', this.controller.deleteUser);
        this.router.patch('/:id/active', this.controller.activateUser);
        this.router.get('/:id', this.controller.getUser);
    }

}