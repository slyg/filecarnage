tetra.view.register('searchView', {
    scope:'usual suspects',
    constr:function (me, app, _) {
        'use strict';
        return {
            events : {
                user : {
                    'submit' : {
                        '#search-suspects form' : function(e, elm){
                            var 
                                query = _(elm).find('input')[0].value,
                                type = _(elm).find('select')[0].value
                            ;
                            app.notify("search suspects", {
                                query : encodeURIComponent(query), 
                                type : type
                            });
                            _(elm).parents('#search-suspects').addClass('top');
                        }
                    },
                    'click' : {
                        '#search-suspects .hide-scanned' : function(e, elm){
                           app.notify("hide scanned"); 
                        }
                    }
                },
                controller : {
                    'update suspects list' : function(html){
                        _('#suspects-list').fadeOut(function(){
                            _('#suspects-list')
                                .html(html)
                                .fadeIn(function(){
                                    _("#dataset").fixedHeader();
                                })
                            ;
                        });
                    }
                }
            }
        }
    }
});