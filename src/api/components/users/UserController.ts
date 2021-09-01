import {NextFunction, Request, Response} from "express";
import {bind} from "decko";
import {UserRepository} from "./UserRepository";
import {Utils} from "../../../services/utils";
import {UserValidations} from "./UserValidations";


export class UserController {

    private readonly userRepository: UserRepository = new UserRepository()

    @bind
    async createUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const {name, email, password} = req.body;
        UserValidations.validateUser(req, resp);
        try {
            const newUser = await this.userRepository.create({
                name,
                email,
                password: await Utils.hashPassword(password),
            })
            return resp.json(newUser);
        } catch (e) {
            return resp.status(400).json({
                resp: {
                    message: "Email already exists"
                }
            });
        }
    }

    @bind()
    async updateUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const {name, email, password} = req.body
        const id = req.params.id

        UserValidations.validateUser(req, resp);

        try {
            const newUser = await this.userRepository.updateById({
                name,
                email,
                password: await Utils.hashPassword(password)
            }, id)

            UserValidations.checkUserFound(newUser, resp);

            return resp.json(newUser)
        } catch (e) {
            return resp.status(400).json({
                resp: {
                    errors: e
                }
            });
        }
    }

    @bind()
    async deleteUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        const id = req.params.id
        try {
            const user = await this.userRepository.deleteById(id);
            UserValidations.checkUserFound(user, resp);
            return resp.json(user);
        } catch (e) {
            return resp.status(400).json({
                resp: {
                    errors: e
                }
            });
        }
    }

    @bind()
    async activateUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {

        try{
            const id = req.params.id
            const user = await this.userRepository.activateById(id);
            UserValidations.checkUserFound(user,resp)
            return resp.json(user);
        } catch (e){
            return resp.status(400).json({
                resp: {
                    errors: e
                }
            });
        }
    }

    @bind()
    async getUser(req: Request, resp: Response, next: NextFunction): Promise<Response | void> {
        try{
            const id = req.params.id
            const user = await this.userRepository.getById(id);
            UserValidations.checkUserFound(user,resp)
            return resp.json(user)
        } catch (e){
            return resp.status(400).json({
                resp: {
                    errors: e
                }
            });
        }
    }


}