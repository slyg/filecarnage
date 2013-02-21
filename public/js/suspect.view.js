tetra.view.register('suspectView', {
    scope:'usual suspects',
    constr:function (me, app, _) {
        'use strict';
        return {
            events : {
                user : {
                    'click' : {
                        '#suspects-list .remove' : function(e, elm){
                            var 
                                container = elm.parents('tr'),
                                objId = container.data('object-id'),
                                alreadyRemoved = container.hasClass('removed')
                            ;
                            app.notify(alreadyRemoved ? "suspect not removed" : "suspect removed", objId);
                            container[alreadyRemoved ? 'removeClass' : 'addClass']('removed');
                        },
                        '#suspects-list .scan-done' : function(e, elm){
                            var 
                                container = elm.parents('tr'),
                                objId = container.data('object-id'),
                                alreadyScanned = container.hasClass('scanned')
                            ;
                            app.notify(alreadyScanned ? "suspect not scanned" : "suspect scanned", objId);
                            container[alreadyScanned ? 'removeClass' : 'addClass']('scanned');
                        }
                    }
                },
                controller : {
                    'hide scanned' : function(){ _('#suspects-list .scanned').fadeOut(); },
                    'show scanned' : function(){ _('#suspects-list .scanned').fadeIn(); }
                }
            }
        }
    }
});