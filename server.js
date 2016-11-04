'use strict';

const Hapi = require('hapi');
const Path = require('path');

const MongoClient = require('mongodb').MongoClient //The official MongoDB driver for Node.js

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

/***********MONGODB start*************/
let  url = 'mongodb://test_sima:test_sima@ds049925.mlab.com:49925/sima_test_db';

server.route({
    method: 'GET',
    path:'/heroesMongoTest', 
    handler: testCallToMongoLab
});

function testCallToMongoLab(request, reply) {
    console.log('testCallToMongoLab(request, reply)');


    MongoClient.connect(url, function(err, db) {
        console.log("MongoClient.connect");

        let collection = db.collection('test1');
        collection.find({}).toArray(function(err, docs) {
            reply(docs);
        });
        db.close();
    });

}
/***********MONGODB end***************/


// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});