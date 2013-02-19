var 
    conf      = require('./conf'),
    handlers  = require('./handlers')
;

module.exports = function(server){

    server.route([
        {
            method: 'GET',
            path: conf.api.root + '/suspects',
            config: handlers.retrieve
        },
        {
            method: 'GET',
            path: conf.api.root + '/suspects/{id?}',
            config: handlers.retrieve
        },
        {
            method: 'POST',
            path: conf.api.root + '/suspects',
            config: handlers.create
        },
        {
            method: 'PUT',
            path: conf.api.root + '/suspects/{id}',
            config: handlers.update
        }
    ]);

}
