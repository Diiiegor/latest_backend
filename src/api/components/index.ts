import {Router} from "express";
import {UserRoutes} from "./users/UserRoutes";

export function registerApiRoutes(router: Router) {
    router.use('/users', new UserRoutes().router);
}