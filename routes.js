var 
    handlers  = require('./handlers')
;

module.exports = function(server){

    server.route([
        {
            method: 'GET',
            path: '/api/suspects',
            config: handlers.getAll
        },
        {
            method: 'PUT',
            path: '/api/suspect',
            config: handlers.create
        },
        {
            method: 'POST',
            path: '/api/suspects/{id}',
            config: handlers.update
        }
    ]);

}
