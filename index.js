"use strict";

var 
    appconf         = require('./conf'),
    Hapi            = require('hapi'),
    addRoutes       = require('./routes')
;

var server = new Hapi.Server(appconf.api.host, appconf.api.port, {
    views: {
        path: __dirname + '/templates'
    }
});

// Add routes
addRoutes(server);

// Start the server
server.start();