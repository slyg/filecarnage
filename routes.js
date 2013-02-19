var 
    handlers  = require('./handlers')
;

module.exports = function(server){

    server.route([
        {
            method: 'GET',
            path: '/api/suspects',
            config: handlers.retrieve
        },
        {
            method: 'GET',
            path: '/api/suspects/{id?}',
            config: handlers.retrieve
        },
        {
            method: 'POST',
            path: '/api/suspects',
            config: handlers.create
        },
        {
            method: 'PUT',
            path: '/api/suspects/{id}',
            config: handlers.update
        }
    ]);

}
