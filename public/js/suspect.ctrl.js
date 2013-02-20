tetra.controller.register('suspectController', {
    scope:'usual suspects',
    constr:function (me, app, page, orm) {
        'use strict';
        return {
            events : {
                view : {
                    'suspect removed' : function(objId){
                        console.log("suspect removed", objId);
                    },
                    'suspect scanned' : function(objId){
                        console.log("suspect scanned", objId);
                        orm('suspectScanned').save({uriParams : {id : objId}, scanned : true});
                    }
                },
                controller : {
                    'flipswitch: set state' : function(data){
                        var state = !data.state, id = data.id; // invert 'cause negative is good when talking about suspicions
                        console.log(id, state);
                    }
                }
            }
        }
    }
});