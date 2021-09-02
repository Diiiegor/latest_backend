import {NextFunction, Request, Response} from "express";
import {MessagesRepository} from "./MessagesRepository";
import {bind} from "decko";
import {sendMqttMessage} from "./sendMqttMessage";

export class MessagesController {

    private readonly messagesRepository: MessagesRepository = new MessagesRepository();

    @bind()
    async sendMessage(req: Request, resp: Response, next: NextFunction) {
        try {
            const fact = await this.messagesRepository.getRandomMessage();

            const message = {
                message: fact,
                user: req.user['_id']
            }
            sendMqttMessage(JSON.stringify(message), (error) => {
                return resp.status(400).json({
                    resp: {
                        errors: {...error, message: "No se pudo establecer la conexion mqtt"}
                    }
                });
            }, () => {
                return resp.json({
                    resp: {
                        message: JSON.stringify(message)
                    }
                });
            });
        } catch (e) {
            return resp.status(400).json({
                resp: {
                    errors: e
                }
            });
        }
    }
}