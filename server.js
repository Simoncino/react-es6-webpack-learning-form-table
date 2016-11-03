'use strict';

const Hapi = require('hapi');
const Path = require('path');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/heroesArray', 
    handler: function (request, reply) {
        console.log('server.route /heroesArray');
        return reply([{"nome":"Il Sima", "valore": Math.floor((Math.random() * 6) + 1)}, {"nome":"Annie", "valore": Math.floor((Math.random() * 6) + 1)}]);
    }
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/heroes/{param*}',
        handler: {
            directory: {
                path: 'src/client'/*,
                listing: true*/
            }
        }
    });
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});