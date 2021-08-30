import express from 'express';
import {Server} from './api/server';
import {createServer, Server as HttpServer} from 'http';

(async function main() {
    try {

        const app: express.Application = new Server().app
        const server: HttpServer = createServer(app)

        server.listen(3000)
        server.on('listening', () => {
            console.log(`node server is listening on port ${3000} `);
        });

    } catch (err) {
        console.log("Node server closed")
    }
})();