tetra.controller.register('suspectController', {
    scope:'usual suspects',
    constr:function (me, app, page, orm) {
        'use strict';
        return {
            events : {
                view : {
                    'suspect removed' : function(objId){
                        console.log("suspect removed", objId);
                        orm('suspectRemoved').save({uriParams : {id : objId}, removed : true});
                    },
                    'suspect scanned' : function(objId){
                        console.log("suspect scanned", objId);
                        orm('suspectScanned').save({uriParams : {id : objId}, scanned : true});
                    }
                },
                controller : {
                    'flipswitch: set state' : function(data){
                        var 
                            state = !data.state, // invert 'cause negative is good when talking about suspicions
                            id = data.id
                        ; 
                        var 
                            references = id.split("-"),
                            suspicionType = references[1],
                            objId = references[2],
                            toBeSaved = {}
                        ;
                        
                        toBeSaved['uriParams'] = {id : objId, suspicionkeystring : suspicionType};
                        toBeSaved['value'] = state;
                        
                        console.log(toBeSaved);
                        
                        orm('suspectSuspicion').save(toBeSaved);
                        
                    }
                }
            }
        }
    }
});