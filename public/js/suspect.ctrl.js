tetra.controller.register('suspectController', {
    scope:'usual suspects',
    constr:function (me, app, page, orm) {
        'use strict';
        return {
            events : {
                view : {
                    'suspect removed' : function(objId){
                        orm('suspectRemoved').save({uriParams : {id : objId}, removed : true});
                    },
                    'suspect not removed' : function(objId){
                        orm('suspectRemoved').save({uriParams : {id : objId}, removed : false});
                    },
                    'suspect scanned' : function(objId){
                        orm('suspectScanned').save({uriParams : {id : objId}, scanned : true});
                    },
                    'suspect not scanned' : function(objId){
                        orm('suspectScanned').save({uriParams : {id : objId}, scanned : false});
                    },
                    'hide scanned' : function(){
                        app.notify('hide scanned');
                    },
                    'show scanned' : function(){
                        app.notify('show scanned');
                    }
                },
                controller : {
                    'flipswitch: set state' : function(data){
                        var 
                            references = data.id.split("-"),
                            suspicionType = references[1],
                            objId = references[2],
                            toBeSaved = {}
                        ;
                        toBeSaved['uriParams'] = {id : objId, suspicionkeystring : suspicionType};
                        toBeSaved['value'] = data.state;
                        orm('suspectSuspicion').save(toBeSaved);
                    }
                }
            }
        }
    }
});