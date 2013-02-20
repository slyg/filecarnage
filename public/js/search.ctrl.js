tetra.controller.register('searchController', {
    scope:'usual suspects',
    constr:function (me, app, page, orm) {
        'use strict';
        return {
            events : {
                view : {
                    'search suspects' : function(data){
                        orm('suspectSearch').fetch({uriParams : {querystring : data}});
                    }
                },
                model : {
                    'suspectSearch' : {
                        'append' : function(col){
                            app.notify("update suspects list", col[0].get('html'));
                        }
                    }
                }
            }
        }
    }
});