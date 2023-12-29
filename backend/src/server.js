import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from '../database';

let server;

const start = async() => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: {
                origin: "ignore"
            }
        }
    });

    routes.forEach(element => {
        server.route(element);
    });

    db.connect();
    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping the server...');
    await server.stop({ timeout: 1000 });
    db.end();
    console.log('Server Stopped.');
    process.exit(0);
});

start();