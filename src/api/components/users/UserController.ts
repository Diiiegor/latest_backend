import {NextFunction, Request, Response} from "express";
import {bind} from "decko";
import {UserRepository} from "./UserRepository";
import {Utils} from "../../../services/utils";


export class UserController {

    private readonly userRepository: UserRepository = new UserRepository()

    @bind
    async createUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const {name, email, password} = req.body;
        const newUser = await this.userRepository.create({name, email, password: await Utils.hashPassword(password)})
        return resp.json(newUser);
    }

    @bind()
    async updateUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const {name, email, password} = req.body
        const id = req.params.id
        const newUser = await this.userRepository.updateById({
            name,
            email,
            password: await Utils.hashPassword(password)
        }, id)
        return resp.json(newUser)
    }

    @bind()
    async deleteUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const id = req.params.id
        const user = await this.userRepository.deleteById(id);
        return resp.json(user);
    }

    @bind()
    async activateUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const id = req.params.id
        const user = await this.userRepository.activateById(id);
        return resp.json(user);
    }

    @bind()
    async getUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const id = req.params.id
        const user = await this.userRepository.getById(id);
        return resp.json(user)
    }


}