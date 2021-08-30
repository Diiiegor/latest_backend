import {NextFunction, Request, Response} from "express";

export class UserController {

    async createUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        return resp.json({"resp": "creando usuario"});
    }

    async updateUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        return resp.json({"resp": "actualizando usuario"});
    }

    async deleteUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        return resp.json({"resp": "eliminando usuario"});
    }

    async activateUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        return resp.json({"resp": "activando usuario"});
    }

    async getUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        return resp.json({"resp": "consultando usuario"});
    }


}