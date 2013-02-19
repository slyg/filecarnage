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
            method: 'GET',
            path: conf.api.root + '/suspects/exists',
            config: handlers.exists
        },
        {
            method: 'GET',
            path: conf.api.root + '/suspects/removed',
            config: handlers.removed
        },
        {
            method: 'GET',
            path: conf.api.root + '/suspects/search/reference/{querystring}',
            config: handlers.search.reference
        },
        {
            method: 'GET',
            path: conf.api.root + '/suspects/search/type/{querystring}',
            config: handlers.search.type
        },
        {
            method: 'GET',
            path: conf.api.root + '/suspects/search/{typestring}/{suspicionkeystring}/{suspicionvaluestring}',
            config: handlers.search.suspicion
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

};