import 'dotenv/config.js';
import net from 'net';

/* Debugging messages */
import createDebugMessages from 'debug';
const debug = createDebugMessages('icseon.soothproxy.proxy');

/* Create the proxy */
const proxy = net.createServer(socket => {

    /* Let us know a new connection is made */
    debug(`received a new connection from ${socket.remoteAddress}`);

    /* Create a new client */
    const client = new net.Socket();

    /* Connect the client to the upstream server */
    client.connect(11000, process.env.UPSTREAM_SERVER, () => debug(`successfully connected to upstream`));

    /* Forward every packet we receive from the upstream server to our client */
    client.on('data', buffer => socket.write(buffer));

    /* Once the upstream server has closed the connection, we acknowledge - but don't do anything */
    client.on('error', () => debug('upstream server has closed the connection'));

    /* Once our own client disconnects, ensure the connection to the upstream server is also terminated */
    socket.on('error', () => {
        debug('our client has closed the connection - closing connection with upstream');
        client.destroy();
    });

    /* Forward every packet we receive from our client to the upstream server */
    socket.on('data', buffer => client.write(buffer));


});

/* Listen */
proxy.listen(11000, '0.0.0.0');
debug('proxy is listening - you can now connect to it with a Bots client');