import {NextFunction, Request, Response} from "express";
import {config} from "dotenv";

config();
import passport from "passport";
import '../../services/passport';
import {UnAuthorizedToken} from "../components/authorization/UnAuthorizedTokenModel";

//Valida el jwt de la peticion
export function checkAuth(req: Request, resp: Response, next: NextFunction) {
    passport.authenticate("jwt", async function (err, user, jwtToken) {
        const unAuthorizedToken = await UnAuthorizedToken.findOne({token: req.header('Authorization')})

        if (err || !user || unAuthorizedToken) {
            return resp.status(401).json({
                resp: {
                    message: "Unauthorized"
                }
            });
        } else {
            req.user = user;
            return next();
        }
    })(req, resp, next);
}