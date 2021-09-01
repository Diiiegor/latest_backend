import {Router} from "express";
import {UserRoutes} from "./users/UserRoutes";
import {AuthorizationRoutes} from "./authorization/AuthorizationRoutes";

export function registerApiRoutes(router: Router) {
    router.use('/users', new UserRoutes().router);
    router.use('/authorization', new AuthorizationRoutes().router);
}