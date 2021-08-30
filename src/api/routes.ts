import {Router} from 'express';
import {registerApiRoutes} from "./components";
import {registerMiddleware} from "./middleware";

export function initRestRoutes(router: Router): void {
    registerMiddleware(router)
    registerApiRoutes(router)
}