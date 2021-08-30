import {Request, Response, Router} from 'express';
import {registerApiRoutes} from "./components";

export function initRestRoutes(router: Router): void {
    registerApiRoutes(router)
}