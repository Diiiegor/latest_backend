import express from 'express';
import {Server} from './api/server';
import {createServer, Server as HttpServer} from 'http';
import {config} from "dotenv";
import mongoose from 'mongoose'
import bodyParser from "body-parser";

config();

(async function main() {
    try {

        //Inicializa servicor http
        const app: express.Application = new Server().app
        const server: HttpServer = createServer(app)

        //Conexion a mongo
        mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`).then(() => {
            console.log("Conexion a base de datos exitosa")
        }).catch(() => {
            console.log("Error al conectar a la base de datos")
        })

        server.listen(process.env.NODE_PORT)
        server.on('listening', () => {
            console.log(`node server is listening on port ${process.env.NODE_PORT} `);
        });

    } catch (err) {
        console.log("Node server closed")
    }
})();