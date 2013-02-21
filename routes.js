var 
    conf      = require('./conf'),
    handlers  = require('./handlers')
;

module.exports = function(server){

    server.route([
    
        // Web services
    
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
        },
        
        // Views
        
        {
            method: 'GET',
            path: '/resource/{path*}',
            config: handlers.views.public
        },
        {
            method: 'GET',
            path: '/',
            config: handlers.views.home
        },
        {
            method: 'GET',
            path: '/suspects/search/{typestring}/{querystring}',
            config: handlers.views.reference
        },
        {
            method: 'PUT',
            path: '/suspects/{id}/scanned',
            config: handlers.views.scanned
        },
        {
            method: 'PUT',
            path: '/suspects/{id}/removed',
            config: handlers.views.removed
        },
        {
            method: 'PUT',
            path: '/suspects/{id}/suspicion/{suspicionkeystring}',
            config: handlers.views.suspicion
        }
    ]);

};