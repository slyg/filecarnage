tetra.view.register('searchView', {
    scope:'usual suspects',
    constr:function (me, app, _) {
        'use strict';
        return {
            events : {
                user : {
                    'submit' : {
                        '#search-suspects form' : function(e, elm){
                            var query = _(elm).find('input')[0].value;
                            app.notify("search suspects", encodeURIComponent(query) );
                            _(elm).parents('#search-suspects').addClass('top');
                        }
                    }
                },
                controller : {
                    'update suspects list' : function(html){
                        _('#suspects-list').fadeOut(function(){
                            _('#suspects-list')
                                .html(html)
                                .fadeIn();
                        });
                    }
                }
            }
        }
    }
});