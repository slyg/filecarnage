tetra.view.register('suspectView', {
    scope:'usual suspects',
    constr:function (me, app, _) {
        'use strict';
        return {
            events : {
                user : {
                    'click' : {
                        '.remove' : function(e, elm){
                            var container = elm.parents('tr');
                            var objId = container.data('object-id');
                            app.notify("suspect removed", objId);
                            container.addClass('removed');
                        },
                        '.scan-done' : function(e, elm){
                            var container = elm.parents('tr');
                            var objId = container.data('object-id');
                            app.notify("suspect scanned", objId);
                            container.addClass('scanned');
                        }
                    }
                }
            }
        }
    }
});