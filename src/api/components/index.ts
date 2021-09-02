import {Router} from "express";
import {UserRoutes} from "./users/UserRoutes";
import {AuthorizationRoutes} from "./authorization/AuthorizationRoutes";
import {MessagesRoutes} from "./messages/MessagesRoutes";

//Se importan las rutas de cada modulo y se les asigna el path correspondiente
export function registerApiRoutes(router: Router) {
    router.use('/users', new UserRoutes().router);
    router.use('/authorization', new AuthorizationRoutes().router);
    router.use('/messages', new MessagesRoutes().router);
}