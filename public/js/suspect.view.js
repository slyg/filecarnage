tetra.view.register('suspectView', {
    scope:'usual suspects',
    constr:function (me, app, _) {
        'use strict';
        return {
            events : {
                user : {
                    'click' : {
                        '#suspects-list .remove' : function(e, elm){
                            var container = elm.parents('tr');
                            var objId = container.data('object-id');
                            app.notify("suspect removed", objId);
                            container.addClass('removed');
                        },
                        '#suspects-list .scan-done' : function(e, elm){
                            var container = elm.parents('tr');
                            var objId = container.data('object-id');
                            app.notify("suspect scanned", objId);
                            container.addClass('scanned');
                        }
                    }
                },
                controller : {
                    'hide scanned' : function(){
                        _('#suspects-list .scanned').fadeOut();
                    }
                }
            }
        }
    }
});