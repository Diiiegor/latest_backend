import {Router} from "express";
import bodyParser from "body-parser";

export function registerMiddleware(router:Router):void{
    router.use(bodyParser.json())
}