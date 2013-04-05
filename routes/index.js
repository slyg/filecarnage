var 
    conf      = require('./../conf'),
    handlers  = require('./../handlers')
;

module.exports = function(server){

    var 
        ws = handlers.ws,
        views = handlers.views
    ;

    server.route([
    
        // Web services
    
        {
            method: 'GET',
            path: conf.api.root + '/suspects',
            config: ws.retrieve
        },
        {
            method: 'GET',
            path: conf.api.root + '/suspects/{id?}',
            config: ws.retrieve
        },
        {
            method: 'POST',
            path: conf.api.root + '/suspects',
            config: ws.create
        },
        {
            method: 'PUT',
            path: conf.api.root + '/suspects/{id}',
            config: ws.update
        },
        
        // Static resources
        
        {
            method: 'GET',
            path: '/resource/{path*}',
            config: views.public
        },
        
        // Views
        
        {
            method: 'GET',
            path: '/',
            config: views.home
        },
        {
            method: 'GET',
            path: '/suspects/search/{typestring}/{querystring}',
            config: views.reference
        },
        {
            method: 'PUT',
            path: '/suspects/{id}/scanned',
            config: views.scanned
        },
        {
            method: 'PUT',
            path: '/suspects/{id}/removed',
            config: views.removed
        },
        {
            method: 'PUT',
            path: '/suspects/{id}/suspicion/{suspicionkeystring}',
            config: views.suspicion
        }
    ]);

};