import {Router} from 'express';
import {registerApiRoutes} from "./components";
import {registerMiddleware} from "./middleware";

//Se registran rutas y middlewares en orden, primero middlewares y luego rutas
export function initRestRoutes(router: Router): void {
    registerMiddleware(router)
    registerApiRoutes(router)
}